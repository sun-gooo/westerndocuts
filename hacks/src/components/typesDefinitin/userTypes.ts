//今回、ログイン時、どのデータを保持していてほしいか、共有していないのでreduxですべて保持します
//Userテーブルの情報
interface User {
  // ユーザID
  userId?: number;
  // ログインアカウント名
  userAccountName?: string;
  // メールアドレス
  userMail?: string;
  // パスワード
  userPass?: string;
  // ハンドルネーム（任意）
  userHandleName?: string;
  // サムネイルファイル名（任意）
  userThumbnailFile?: string;
  // 性別（任意）
  userSexId?: number;
  // 住所（任意）
  userAddress?: string;
  // 電話番号（任意）
  userTel?: string;
  // 契約プラン区分（任意）
  contractId?: number;
  // ログイン状態区分（任意）
  loginStatusId?: number;
  // ステータス区分（任意）
  statusCd?: number;
  // プロファイル（任意）
  userProfile?: string;
  // メッセージ（任意）
  message?: string;
  // 登録日付（任意）
  createdAt?: Date;
  // 最終更新日付（任意）
  updatedAt?: Date;
  // 削除日付（任意）
  deletedAt?: Date;
}
export default User;
