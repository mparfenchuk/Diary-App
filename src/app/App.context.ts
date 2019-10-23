import { Dispatch, useContext, createContext } from 'react';

import { State } from './App.interfaces';
import { initialState, Actions } from './App.reducer';

export const DiaryStateContext = createContext<State>(initialState);
export const DiaryDispatchContext = createContext<Dispatch<Actions>>(() => {});

export const useDiaryState = () => useContext(DiaryStateContext);
export const useDiaryDispatch = () => useContext(DiaryDispatchContext);