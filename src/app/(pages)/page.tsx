'use client';

import { useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function MainPage() {
  const { data: session, status } = useSession();
  useEffect(() => {
    console.log(session, status);
  }, []);

  return <div className="">Main</div>;
}
