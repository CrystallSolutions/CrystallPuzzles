"use client";

import {redirect} from "next/navigation";
import Link from "next/link";
import {Policy} from "@/features";
import {Button, Input, Password, Title} from "@/shared";
import styles from "./page.module.scss";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <Title tag='h1' isCentered className={styles.title}>
        Войти
      </Title>
      <form className={styles.form}>
        <Input
          label='Ваш e-mail'
          dataKey='email'
          type='email'
          required
          placeholder='ivanov@example.com'
        />

        <Password />

        <div className={styles.forget_password}>
          <Link href='/change-password' className={styles.link}>
            Забыли пароль?
          </Link>
        </div>

        <Policy />

        <div className={styles.btn_container}>
          <Button bgColor='light'>Войти</Button>

          <label htmlFor='registration' className={styles.link}>
            Нет аккаунта?
          </label>
          <Button
            id='registration'
            onClick={() => {
              redirect("/register");
            }}
            className={styles.register_btn}
            bgColor='dark'
          >
            Зарегистрироваться
          </Button>
        </div>
      </form>
    </div>
  );
}
