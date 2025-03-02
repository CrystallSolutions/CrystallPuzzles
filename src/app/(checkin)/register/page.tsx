import {Policy} from "@/features";
import {Button, Input, Password, Title} from "@/shared";
import styles from "./page.module.scss";

export default function page() {
  return (
    <div className={styles.container}>
      <Title tag='h1' isCentered className={styles.title}>
        Зарегистрироваться
      </Title>
      <form className={styles.form}>
        <Input
          label='ФИО'
          dataKey='name'
          type='text'
          required
          placeholder='Иванов Иван Иванович'
        />
        <Input
          label='Введите дату рождения'
          dataKey='birthday'
          type='date'
          min='1900-01-01'
          max='2024-01-01'
          required
        />
        <Input
          label='Ваш e-mail'
          dataKey='email'
          type='email'
          required
          placeholder='ivanov@example.com'
        />
        <Password />
        <Policy />
        <Button
          id='registration'
          className={styles.register_btn}
          bgColor='dark'
        >
          Зарегистрироваться
        </Button>
      </form>
    </div>
  );
}
