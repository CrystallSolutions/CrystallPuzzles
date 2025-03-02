'use client'

import {redirect} from "next/navigation";
import Link from "next/link";
import {Policy} from "@/features";
import {Button, Input, Password} from "@/shared";
import styles from "./page.module.scss";

export default function LoginPage() {
  const login = true;

  return (
    <div className={styles.container}>
      <h1 className={styles.header}>
        {login ? "Войти" : "Зарегистрироваться"}
      </h1>
      <form className={styles.form}>
        {!login && (
          <>
            <Input
              label='ФИО'
              dataKey='name'
              type='text'
              required
              placeholder='Иванов Иван Иванович'
            />
          </>
        )}
        {!login && (
          <>
            <Input
              label='Введите дату рождения'
              dataKey='birthday'
              type='date'
              min='1900-01-01'
              max='2024-01-01'
              required
            />
          </>
        )}

        <Input
          label='Ваш e-mail'
          dataKey='email'
          type='email'
          required
          placeholder='ivanov@example.com'
        />

        <Password />

        {login && (
          <div className={styles.forget_password}>
            <Link href='/change-password' className={styles.link}>
              Забыли пароль?
            </Link>
          </div>
        )}

        <Policy />

        <div className={styles.btn_container}>
          <Button bgColor='light'>
            {login ? "Войти" : "Зарегистрироваться"}
          </Button>

          {login && (
            <>
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
            </>
          )}
        </div>
      </form>
    </div>
  );
}
