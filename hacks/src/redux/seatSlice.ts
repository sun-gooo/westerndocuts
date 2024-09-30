import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import RootState from "../components/typesDefinitin/userAllDataTypes";
import UserTypes from "../components/typesDefinitin/userTypes";
import UserAttendanceTypes from "../components/typesDefinitin/userAttendanceTypes";
import SeatState from "../components/typesDefinitin/seatsTypes";

const initialState: SeatState = {
  seatId: undefined,
  seatName: undefined,
  grounpId: undefined,
  sortNum: undefined,
  visibleFlg: undefined,
  createdAt: undefined,
  updatedAt: undefined,
  deletedAt: undefined,
};

const seatSlice = createSlice({
  name: "SeatState",
  initialState,
  reducers: {
    // qrコードを読み解いたときのseatIdの保持
    seatIdQr: (state, action: PayloadAction<{ seatId: number }>) => {
      state.seatId = action.payload.seatId;
    },
  },
});

export const { seatIdQr } = seatSlice.actions;
export default seatSlice.reducer;
