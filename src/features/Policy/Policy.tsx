import styles from "./Policy.module.scss";

export const Policy = () => {
  return (
    <div className={styles.container}>
      <input
        id='checkbox'
        className={styles.checkbox}
        data-key='checkbox'
        type='checkbox'
        required
      />
      <label className={styles.label} htmlFor='checkbox'>
        Подтверждая, вы соглашаетесь с принятой на сайте
        <a
          href='https://drive.google.com/file/d/1oU3TamtASCI3z2CN6RNhO2sCJye0mk8N/view?usp=drive_link'
          target='_blank'
          className={styles.link}
          rel='noopener noreferrer'
        >
          политикой обработки персональных данных и конфиденциальности
        </a>
      </label>
    </div>
  );
};
