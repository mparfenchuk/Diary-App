import React, { useReducer } from 'react';

import { DiaryStateContext, DiaryDispatchContext } from './App.context';
import { initialState, reducer } from './App.reducer';

import GlobalStyle from './theme/GlobalStyle';
import Diary from 'core/diary';

const App: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <DiaryStateContext.Provider value={state}>
      <DiaryDispatchContext.Provider value={dispatch}>
        <GlobalStyle />
        <Diary />
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  )
}

export default App;
