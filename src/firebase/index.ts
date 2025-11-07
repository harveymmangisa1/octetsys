'use client';

// Firebase disabled currently
/*
import { firebaseConfig } from '@/firebase/config';
import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'

// IMPORTANT: DO NOT MODIFY THIS FUNCTION
export function initializeFirebase() {
  if (!getApps().length) {
    // Important! initializeApp() is called without any arguments because Firebase App Hosting
    // integrates with the initializeApp() function to provide the environment variables needed to
    // populate the FirebaseOptions in production. It is critical that we attempt to call initializeApp()
    // without arguments.
    let firebaseApp;
    try {
      // Attempt to initialize via Firebase App Hosting environment variables
      firebaseApp = initializeApp();
      if (process.env.NODE_ENV !== 'production') {
        // Helpful log to know which init path succeeded in dev
        console.debug('[Firebase] Initialized via App Hosting env vars');
      }
    } catch (e: any) {
      const msg = typeof e?.message === 'string' ? e.message : String(e);
      const expectedEnvError = msg.includes('missing FirebaseOptions') || msg.includes('No Firebase App') || msg.includes('Firebase: No Firebase App');
      if (process.env.NODE_ENV === 'production' && !expectedEnvError) {
        console.error('[Firebase] Unexpected initialization error; falling back to manual config.', e);
      } else if (process.env.NODE_ENV !== 'production') {
        console.debug('[Firebase] Env init failed; falling back to config:', msg);
      }
      firebaseApp = initializeApp(firebaseConfig);
    }

    return getSdks(firebaseApp);
  }

  // If already initialized, return the SDKs with the already initialized App
  return getSdks(getApp());
}

export function getSdks(firebaseApp: FirebaseApp) {
  return {
    firebaseApp,
    auth: getAuth(firebaseApp),
    firestore: getFirestore(firebaseApp)
  };
}
*/
// Export stubs to avoid import errors
export const initializeFirebase = () => ({ firebaseApp: null as any, auth: null as any, firestore: null as any });
export * from './provider';
export * from './client-provider';
export * from './firestore/use-collection';
export * from './firestore/use-doc';
export * from './non-blocking-updates';
export * from './non-blocking-login';
export * from './errors';
export * from './error-emitter';
