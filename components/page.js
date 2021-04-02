import Clock from "./clock";
import useInterval from "../lib/useInterval";
import { useDispatch } from "react-redux";

export default function Page() {
  //毎秒カウントする
  useDispatch(() => {
    const dispatch = useDispatch();

    useInterval(() => {});
  }, 1000);
  return (
    <>
      <Clock />
      <p>hello</p>
    </>
  );
}
