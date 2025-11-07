'use client';

import React, { type ReactNode } from 'react';

interface FirebaseClientProviderProps {
  children: ReactNode;
}

export function FirebaseClientProvider({ children }: FirebaseClientProviderProps) {
  // Firebase disabled: render children directly
  return <>{children}</>;
}