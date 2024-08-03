import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import styles from "./MainPage.module.css";
import { Link, useNavigate } from "react-router-dom";

export default function MainPage() {
  // const startShow = { 1: "0", 2: "0", 3: "0", 4: "0" };
  // const startDisplay = { 1: "-1", 2: "-1", 3: "-1", 4: "-1" };
  // const [show, setShow] = useState(startShow);
  // const [display, setDisplay] = useState(startDisplay);
  // const navigate = useNavigate();

  // function placeShaow(num) {
  //   setShow((prev) => ({
  //     ...prev,
  //     [num]: "1",
  //   }));
  //   setDisplay((prev) => ({
  //     ...prev,
  //     [num]: "1",
  //   }));
  // }

  // function placeShaowOff() {
  //   setShow(startShow);
  //   setDisplay(startDisplay);
  // }

  // function orderPade(page) {
  //   navigate(`/order/${page}`);
  // }

  return (
  <div className={styles.container}>
123
  </div>
  )
}
