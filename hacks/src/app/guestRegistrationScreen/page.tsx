"use client";

import { FormEvent, useState } from "react";
import styles from "./page.module.css";
import axios from "axios";
import { useRouter } from "next/navigation";

const GuestRegistrationScreen: React.FC = () => {
  //api成功後の遷移用ライブラリのインスタンス化
  const router = useRouter();

  // 新規会員登録に必要な変数
  const [accountName, setAccountName] = useState("");
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  // 会員登録ボタンを押下した際にデータベースに情報を追加
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    // 現在時刻をMySQLが受け入れる形式に変換
    const currentTime = new Date().toISOString().slice(0, 19).replace("T", " "); // 'YYYY-MM-DD HH:MM:SS'

    // API
    await axios
      .post("/api/auth/guestRegister", {
        name: accountName,
        mail: mail,
        pass: pass,
        createdAt: currentTime,
      })
      .then((response) => {
        alert(response.data.message);
        //新規登録成功画面へ
        router.push("/registerSuccessScreen");
      })
      .catch((error) => {
        alert(`${error.response.status}番のエラーが発生しました`);
      });
  };

  return (
    <main>
      <h1>ゲスト会員登録画面</h1>
      <div className={styles.position}>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              placeholder="UserName"
              onChange={(e) => setAccountName(e.target.value)}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="MailAddress"
              onChange={(e) => setMail(e.target.value)}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <button type="submit">ゲスト会員登録</button>
        </form>
      </div>
    </main>
  );
};

export default GuestRegistrationScreen;
