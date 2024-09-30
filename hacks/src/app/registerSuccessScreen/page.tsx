"use client";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import styles from "./page.module.css";

const RegisterSuccessScreen: React.FC = () => {
  const router = useRouter();

  // Home画面への遷移関数
  const registrationLink = () => {
    router.push("/");
  };

  // ログイン画面への遷移関数
  const loginLink = () => {
    router.push("/loginScreen");
  };

  return (
    <main>
      <div>
        <p>Homeへ</p>
        <button onClick={registrationLink}>Home画面へ</button>
        <p>会員登録せずに利用のお客様</p>
        <button onClick={loginLink}>ログイン</button>
      </div>
    </main>
  );
};

export default RegisterSuccessScreen;
