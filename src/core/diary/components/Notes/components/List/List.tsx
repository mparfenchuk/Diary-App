import React from 'react';

import { useDiaryState } from 'app/App.context';

import { List as StyledList, Alert } from 'app/App.styled';

import Note from './components/Note';

const List: React.FC = () => {
  const { notes } = useDiaryState()

  return (
    <StyledList>
      {notes.length === 0 
        && <Alert>There are no notes...</Alert>}
      {notes.map(note => 
        <Note
          key={note.id}
          id={note.id}
          selected={note.selected}
          counter={note.comments.length}
          text={note.text}
        />
      )}
    </StyledList>
  )
}
  

export default List;