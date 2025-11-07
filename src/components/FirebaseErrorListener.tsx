'use client';

// Firebase temporarily disabled. Listener not active.
import { useState, useEffect } from 'react';
// import { errorEmitter } from '@/firebase/error-emitter';
// import { FirestorePermissionError } from '@/firebase/errors';

/**
 * An invisible component that listens for globally emitted 'permission-error' events.
 * It throws any received error to be caught by Next.js's global-error.tsx.
 */
export function FirebaseErrorListener() {
  // Firebase disabled: no-op
  return null;
}
