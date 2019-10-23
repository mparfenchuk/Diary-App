import React, { useState } from 'react';

import { useDiaryDispatch } from 'app/App.context';
import { addNewNote } from 'app/App.actions';
import { newNote } from 'utils/newNote';

import { Button } from 'app/App.styled';
import { FormGroup, Input } from './Form.styled';

const Form: React.FC = () => {
  const dispatch = useDiaryDispatch()
  const [inputValue, setInputValue] = useState<string>('')
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)
  const onClick = () => {
    const note = newNote(inputValue)
    dispatch(addNewNote(note))
    setInputValue('')
  }

  return (
    <FormGroup>
      <Input 
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type your note here..." 
      />
      <Button onClick={onClick}>
        Add new
      </Button>
    </FormGroup>
  )
}

export default Form;