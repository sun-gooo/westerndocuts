import UserAttendance from "./userAttendanceTypes";
import UserData from "./userTypes";

//Userの保持するデータを一つにまとめます
interface RootState {
  loginState: UserAttendance;
  userState: UserData;
}

export default RootState;
