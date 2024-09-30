"use client";

import { FormEvent, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./page.module.css";
import axios from "axios";
import { useSearchParams } from "next/navigation";
import { login } from "@/redux/userInfoSlice";
import { seatIdQr } from "@/redux/seatSlice";
import { useRouter } from "next/navigation";

const loginScreen: React.FC = () => {
  // クエリパラメータを取得
  const searchParams = useSearchParams();
  // "seatId" パラメータを取得
  const seatId = searchParams.get("seatId");

  //api成功後の遷移用ライブラリのインスタンス化
  const router = useRouter();

  //ログインのための変数
  const [mail, setMail] = useState("");
  const [pass, setPass] = useState("");

  //reduxに変数を保存するためのインスタンス化
  const dispatch = useDispatch();

  //ログインボタン押下時の関数
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    //api
    try {
      // APIリクエスト
      const response = await axios.post("/api/auth/loginConfirm", {
        mail: mail,
        pass: pass,
      });

      const data = await response.data;

      // 成功時にアラートを出す
      alert(data.message);

      // ユーザー情報を取得してReduxにdispatch
      dispatch(login({ userData: data.userInfo }));
      // ユーザーがログイン時にqrコードから取得した値をreduxにdispatch
      if (seatId !== null) {
        dispatch(seatIdQr({ seatId: Number(seatId) }));
      }
      //home画面へ
      router.push("/");
    } catch (error) {
      // errorがAxiosError型かどうかを確認
      if (axios.isAxiosError(error)) {
        // エラーメッセージを表示
        alert(`${error.response?.status}番のエラーが発生しました`);
      } else {
        // Axios以外のエラーの場合
        alert("不明なエラーが発生しました");
      }
    }
  };
  console.log(seatId);
  return (
    <main>
      <h1>ログイン画面</h1>
      <div className={styles.position}>
        {
          <form className="loginID" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="mailAddress"
                onChange={(e) => setMail(e.target.value)}
              ></input>
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPass(e.target.value)}
              ></input>
            </div>
            <button type="submit">ログイン</button>
          </form>
        }
      </div>
    </main>
  );
};

export default loginScreen;
