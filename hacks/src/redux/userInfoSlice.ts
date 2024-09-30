import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RootState from "../components/typesDefinitin/userAllDataTypes";
import UserTypes from "../components/typesDefinitin/userTypes";
import UserAttendanceTypes from "../components/typesDefinitin/userAttendanceTypes";

const initialState: RootState = {
  loginState: {
    attendance: false,
  },
  userState: {
    userId: undefined,
    userAccountName: undefined,
    userMail: undefined,
    userPass: undefined,
    userHandleName: undefined,
    userThumbnailFile: undefined,
    userSexId: undefined,
    userAddress: undefined,
    userTel: undefined,
    contractId: undefined,
    loginStatusId: undefined,
    statusCd: undefined,
    userProfile: undefined,
    message: undefined,
    createdAt: undefined,
    updatedAt: undefined,
    deletedAt: undefined,
  },
};

const userSlice = createSlice({
  name: "loginState",
  initialState,
  reducers: {
    // login時にidとnameを状態として保持
    login: (state, action: PayloadAction<{ userData: UserTypes }>) => {
      console.log(action.payload.userData);
      state.userState = action.payload.userData;
      state.loginState.attendance = true;
    },
    // logout時に状態を初期状態に戻す
    logout: (state) => {
      state.userState = initialState.userState;
      state.loginState.attendance = false;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
