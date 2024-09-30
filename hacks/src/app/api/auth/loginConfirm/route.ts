import { NextResponse } from "next/server";
import { db } from "@/db/connect";
import bcrypt from "bcryptjs";
import { userInfo } from "os";

export async function POST(req: Request) {
  const { mail, pass } = await req.json();

  try {
    const [rows]: any = await db.query(
      "SELECT * FROM users WHERE user_mail = ?",
      [mail]
    );

    if (rows.length === 0) {
      return NextResponse.json(
        { message: "ユーザーが見つかりません" },
        { status: 404 }
      );
    }

    const user = rows[0];
    const isValidPassword = await bcrypt.compare(pass, user.user_pass);

    if (!isValidPassword) {
      return NextResponse.json(
        { message: "パスワードが正しくありません" },
        { status: 401 }
      );
    }

    // ログイン成功時の処理
    return NextResponse.json(
      {
        message: "ログイン成功",
        userInfo: {
          userId: user.user_id,
          userAccountName: user.user_account_name,
          userMail: user.user_mail,
          userPass: user.user_pass,
          userHandleName: user.user_handle_name,
          userThumbnailFile: user.user_thumbnail_file,
          userSexId: user.user_sex_id,
          userAddress: user.user_address,
          userTel: user.user_tel,
          contractId: user.contract_id,
          loginStatusId: user.login_status_id,
          statusCd: user.status_cd,
          userProfile: user.user_profile,
          message: user.message,
          createdAt: user.created_at,
          updatedAt: user.updated_at,
          deletedAt: user.deleted_at,
        },
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "エラーが発生しました" },
      { status: 500 }
    );
  }
}
