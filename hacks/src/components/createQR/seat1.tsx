"use client";
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const seat1: React.FC = () => {
  const seat1Url = "http://localhost:3000/loginScreen?seatId=1"; // 新規会員登録ページのURL

  return (
    <main>
      <h1>座席QRコード</h1>

      <QRCodeCanvas value={seat1Url} size={128} />
    </main>
  );
};

export default seat1;
