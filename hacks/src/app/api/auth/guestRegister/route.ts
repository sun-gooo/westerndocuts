import { NextResponse } from "next/server";
import { db } from "@/db/connect"; // データベース接続
import bcrypt from "bcryptjs";

export async function POST(req: Request) {
  const { name, mail, pass, createdAt } = await req.json();

  // パスワードのハッシュ化
  const hashedPassword = await bcrypt.hash(pass, 10);

  try {
    // ユーザーが既に存在するか確認
    const [existingUser]: any = await db.query(
      "SELECT * FROM users WHERE user_mail = ?",
      [mail]
    );

    if (existingUser.length > 0) {
      return NextResponse.json(
        { message: "このメールアドレスは既に使用されています" },
        { status: 409 }
      );
    }

    // 新規ユーザーをデータベースに登録
    await db.query(
      "INSERT INTO users (user_account_name, user_mail, user_pass, created_at) VALUES (?, ?, ?, ?)",
      [name, mail, hashedPassword, createdAt]
    );

    return NextResponse.json(
      { message: "ユーザー登録が成功しました" },
      { status: 201 }
    );
  } catch (error) {
    console.error(error); // エラーの詳細をログに出力
    return NextResponse.json(
      { message: "エラーが発生しました" },
      { status: 500 }
    );
  }
}
