'use client'

import { useEffect, useState } from 'react'

export const ClientOnly = ({
  children,
}: {
  children: React.ReactNode
}): React.ReactNode | null => {
  const [isClient, setClient] = useState(false)

  useEffect(() => {
    setClient(true);
  }, []);

  return isClient ? children : null;
}
