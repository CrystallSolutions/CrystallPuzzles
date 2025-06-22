'use client';

import { signOut, useSession } from 'next-auth/react';
import { useEffect } from 'react';

export default function MainPage() {
  const { data: session, status } = useSession();
  useEffect(() => {
    signOut();
  }, []);

  console.log(session, status);
  return <div className="">Main</div>;
}
