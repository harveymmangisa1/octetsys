
'use client';
import { createContext, useContext, useReducer, ReactNode, Dispatch } from 'react';
import type { FlyerState } from '@/types/flyer';
import { GBV_QUOTES } from '../constants/quotes';
import { GRADIENT_THEMES } from '../constants/gradients';

type Action =
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_IMAGE'; payload: { file: File; preview: string } }
  | { type: 'CLEAR_IMAGE' }
  | { type: 'SET_UPLOADING'; payload: boolean }
  | { type: 'SET_QUOTE'; payload: { text: string; author: string; type: 'predefined' | 'custom', selectedIndex?: number } }
  | { type: 'SET_THEME'; payload: { name: string; gradient: string } }
  | { type: 'SET_GENERATING'; payload: boolean }
  | { type: 'RESET_STATE' };


const initialState: FlyerState = {
  step: 1,
  image: {
    file: null,
    preview: null,
    isUploading: false,
  },
  quote: {
    type: 'predefined',
    text: GBV_QUOTES[0].text,
    author: GBV_QUOTES[0].author,
    selectedIndex: 0,
  },
  theme: {
    name: GRADIENT_THEMES[0].name,
    gradient: GRADIENT_THEMES[0].gradient,
  },
  isGenerating: false,
};

function flyerReducer(state: FlyerState, action: Action): FlyerState {
  switch (action.type) {
    case 'SET_STEP':
      return { ...state, step: Math.min(Math.max(action.payload, 1), 4) };
    case 'SET_IMAGE':
      return { ...state, image: { ...state.image, file: action.payload.file, preview: action.payload.preview, isUploading: false }, step: 2 };
    case 'CLEAR_IMAGE':
        return { ...state, image: { file: null, preview: null, isUploading: false}, step: 1 };
    case 'SET_UPLOADING':
        return { ...state, image: {...state.image, isUploading: action.payload }};
    case 'SET_QUOTE':
      return { ...state, quote: action.payload, step: 3 };
    case 'SET_THEME':
      return { ...state, theme: action.payload, step: 4 };
    case 'SET_GENERATING':
      return { ...state, isGenerating: action.payload };
    case 'RESET_STATE':
        return initialState;
    default:
      return state;
  }
}

const FlyerStateContext = createContext<FlyerState | undefined>(undefined);
const FlyerDispatchContext = createContext<Dispatch<Action> | undefined>(undefined);

export function FlyerProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(flyerReducer, initialState);

  return (
    <FlyerStateContext.Provider value={state}>
      <FlyerDispatchContext.Provider value={dispatch}>
        {children}
      </FlyerDispatchContext.Provider>
    </FlyerStateContext.Provider>
  );
}

export function useFlyerState() {
  const context = useContext(FlyerStateContext);
  if (context === undefined) {
    throw new Error('useFlyerState must be used within a FlyerProvider');
  }
  return context;
}

export function useFlyerDispatch() {
  const context = useContext(FlyerDispatchContext);
  if (context === undefined) {
    throw new Error('useFlyerDispatch must be used within a FlyerProvider');
  }
  return context;
}
