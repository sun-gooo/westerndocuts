//Userがログインしているかどうかの情報
////今回、ログイン時、どのデータを保持していてほしいか、共有していないのでログインしているかの状態保持は分けています。
interface UserAttendance {
  attendance: boolean;
}
export default UserAttendance;
