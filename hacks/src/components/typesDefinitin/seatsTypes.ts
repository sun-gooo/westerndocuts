//今回、ログイン時、どのデータを保持していてほしいか、共有していないのでreduxですべて保持します
//seatsテーブルの情報
interface Seats {
  seatId?: number;
  seatName?: string;
  grounpId?: number;
  sortNum?: number;
  visibleFlg?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
export default Seats;
