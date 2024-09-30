"use client";

import { useSelector } from "react-redux";
import RootState from "@/components/typesDefinitin/userAllDataTypes";
import Seats from "@/components/typesDefinitin/seatsTypes";

const Home: React.FC = () => {
  const loginConfirm = useSelector((state: RootState) => state);
  const seatConfirm = useSelector((state: Seats) => state);
  console.log(loginConfirm);

  console.log(seatConfirm);
  return <h1>ホーム画面</h1>;
};

export default Home;
