"use client";

import Seat from "../../components/createQR/seat1";
import { useSelector } from "react-redux";
import RootState from "@/components/typesDefinitin/userAllDataTypes";
import Seats from "@/components/typesDefinitin/seatsTypes";
import styles from "./page.module.css";

const QrScreen: React.FC = () => {
  return (
    //<h1>ホーム画面</h1>;
    <div className={styles.qrContainer}>
      <Seat></Seat>
    </div>
  );
};

export default QrScreen;
