"use client";

import styles from "./Password.module.scss";
import {Input} from "../Input/Input";
import {useState} from "react";
import {Eye, EyeOff} from "lucide-react";

export const Password = () => {
  const [openEye, setOpenEye] = useState(true);

  return (
    <Input
      label='Пароль'
      dataKey='password'
      type={openEye ? "password" : "text"}
      required
    >
      {openEye ? (
        <Eye
          onClick={() => {
            setOpenEye(!openEye);
          }}
          className={styles.eye}
        />
      ) : (
        <EyeOff
          onClick={() => {
            setOpenEye(!openEye);
          }}
          className={styles.eye}
        />
      )}
    </Input>
  );
};
