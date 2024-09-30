"use client";

import Registeration from "../../components/createQR/registrationQR";
import { useSelector } from "react-redux";
import RootState from "@/components/typesDefinitin/userAllDataTypes";
import Seats from "@/components/typesDefinitin/seatsTypes";
import styles from "./page.module.css";

const registeratonQrScreen: React.FC = () => {
  return (
    //<h1>ホーム画面</h1>;
    <div className={styles.qrContainer}>
      <Registeration></Registeration>
    </div>
  );
};

export default registeratonQrScreen;
