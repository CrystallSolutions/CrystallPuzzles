'use client';
import { Title } from '@/shared/ui/Title/Title';
import styles from './page.module.scss';
import { Input, Password } from '@/shared/ui/Input';
import Link from 'next/link';
import { Button } from '@/shared/ui/Button/Button';
import { Policy } from '@/features';
import { useSearchParams } from '@/shared/hooks/useSearchParams';
import { useSearchParams as useNextSearchParams } from 'next/navigation';

export default function Auth() {
  const params = useNextSearchParams().get('register') === 'true';
  const [{ register = params }, setSearchParams] = useSearchParams();

  return (
    <div className={styles.container}>
      <Title tag="h1" className={styles.title}>
        {register ? 'Регистрация' : 'Вход'}
      </Title>
      <form className={styles.form}>
        <Input
          label="Ваш e-mail"
          dataKey="email"
          type="email"
          required
          placeholder="ivanov@example.com"
        />

        <Password dataKey="password" label="Пароль" />

        {register && (
          <Link href="/change-password" className={styles.link}>
            Забыли пароль?
          </Link>
        )}

        <Policy />
        <Button dark>{register ? 'Зарегистрироваться' : 'Войти'}</Button>

        <span
          className={styles.link}
          onClick={() => setSearchParams({ register: !register })}
        >
          {register
            ? 'Уже есть аккаунт? Войти'
            : 'Нет аккаунта? Зарегистрироваться'}
        </span>
      </form>
    </div>
  );
}
