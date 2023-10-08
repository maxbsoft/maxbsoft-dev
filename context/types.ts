import { ReactNode } from 'react';

export interface AppState {
  blurredBg: boolean;
}

export type AppAction = {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload?: any;
};

export interface AppProviderProps {
  children?: ReactNode;
}
