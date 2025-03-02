import {Button, Input, Password, Title} from "@/shared";
import styles from "./page.module.scss";
import Link from "next/link";
import {Policy} from "@/features";

export default function ChangePasswordPage() {
  return (
    <div className={styles.container}>
      <Title tag='h1' isCentered className={styles.title}>
        Сменить пароль
      </Title>
      <form className={styles.form}>
        <Input
          label='Ваш e-mail'
          dataKey='email'
          type='email'
          required
          placeholder='ivanov@example.com'
        />
        <Password label='Текущий пароль' dataKey='old_password' />
        <Password label='Новый пароль' dataKey='new_password' />
        <Password label='Повторите новый пароль' dataKey='repeat_password' />

        <Link href='/change-password' className={styles.link}>
          Забыли пароль?
        </Link>

        <Policy />
        <Button bgColor='dark' id='change'>
          Сменить
        </Button>
      </form>
    </div>
  );
}
