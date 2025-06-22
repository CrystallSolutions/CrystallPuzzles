'use client';
'use client';

import { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { Input } from '../Text';
import styles from './index.module.scss';

interface PasswordProps {
  label: string;
  dataKey: string;
}

export function Password({ dataKey, label }: PasswordProps) {
  const [openEye, setOpenEye] = useState(true);

  return (
    <Input
      label={label}
      dataKey={dataKey}
      type={openEye ? 'password' : 'text'}
      type={openEye ? 'password' : 'text'}
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
}
