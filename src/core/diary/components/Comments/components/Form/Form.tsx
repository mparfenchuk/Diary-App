import React, { useState, memo } from 'react';
import { TwitterPicker, ColorResult } from 'react-color';

import { useDiaryDispatch } from 'app/App.context';
import { addComment } from 'app/App.actions';
import { newComment } from 'utils/newComment';

import { FormGroup, ColorPicker, Textarea, Popover, Cover } from './Form.styled';

const Form: React.FC = () => {
  const dispatch = useDiaryDispatch()
  const [textValue, setTextValue] = useState<string>('')
  const [displayColorPicker, setDisplayColorPicker] = useState<boolean>(false)
  const [color, setColor] = useState<string>('#e5e5e5')

  const openColorPicker = () => setDisplayColorPicker(true)
  const closeColorPicker = () => setDisplayColorPicker(false)
  const changeColor = (colorResult: ColorResult) => setColor(colorResult.hex)

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => setTextValue(e.target.value)
  const addNewComment = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if(e.ctrlKey && e.charCode === 13){
      const comment = newComment(color, textValue);
      dispatch(addComment(comment))
      setTextValue('')
      setColor('#e5e5e5')
    }
  }

  return (
    <FormGroup>
      <ColorPicker 
        color={color} 
        onClick={openColorPicker} 
      />
      {displayColorPicker && <Popover>
        <Cover onClick={closeColorPicker} />
        <TwitterPicker 
          triangle="hide"
          color={color} 
          onChange={changeColor} 
        />
      </Popover>}
      <Textarea 
        value={textValue}
        onChange={handleTextChange}
        onKeyPress={addNewComment}
        placeholder="Write something and pick up your mood color" 
      />
    </FormGroup>
  )
}

export default memo(Form);