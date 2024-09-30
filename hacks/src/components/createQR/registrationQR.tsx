"use client";
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const registerationQrScreen: React.FC = () => {
  const registrationUrl = "http://localhost:3000/guestRegistrationScreen"; // 新規会員登録ページのURL

  return (
    <main>
      <h1>新規会員登録QRコード</h1>

      <QRCodeCanvas value={registrationUrl} size={128} />
    </main>
  );
};

export default registerationQrScreen;
