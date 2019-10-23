import React from 'react';

import { useDiaryState } from 'app/App.context';

import { Paper, Title, List, Alert } from 'app/App.styled';

import Comment from './components/Comment';
import Form from './components/Form';

const Comments: React.FC = () => {
  // should use selector and memoization for this 
  const { notes } = useDiaryState()
  const selectedNote = notes.find(note => note.selected);

  return (
    <Paper>
      <Title>
        Comments
      </Title>
      <List inverse={selectedNote && true}>
        {selectedNote 
          ? <>
          {selectedNote.comments.length === 0 
            && <Alert>There are no comments...</Alert>}
          {selectedNote.comments.map(comment => 
            <Comment 
              key={comment.id}
              text={comment.text}
              color={comment.color}
            />
          )}
          </>
          : <Alert>Choose note to add comments...</Alert>}
      </List>
      {selectedNote && <Form />}
    </Paper>
  )
}
  

export default Comments;