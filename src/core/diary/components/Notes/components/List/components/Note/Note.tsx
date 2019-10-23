import React, { memo } from 'react';

import { useDiaryDispatch } from 'app/App.context';
import { deleteNote, selectNote } from 'app/App.actions';
import { Button, Divider } from 'app/App.styled';
import { Wrapper, VerticalLine, Text, Counter } from './Note.styled';

interface Props {
  id: string;
  selected: boolean;
  counter: number;
  text: string;
}

const Note: React.FC<Props> = ({
  id, selected,
  counter, text
}) => {
  const dispatch = useDiaryDispatch()
  const buttonOnClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.stopPropagation()
    dispatch(deleteNote(id))
  }
  const noteOnClick = () => dispatch(selectNote(id))

  return (
    <>
      <Wrapper onClick={noteOnClick}>
        {selected && <VerticalLine />}
        <Text>
          {text}
          <Counter>
            {counter}
          </Counter>
        </Text>
        <Button delete onClick={buttonOnClick}>
          Delete
        </Button>
      </Wrapper>
      <Divider />
    </>
  )
}

export default memo(Note);