import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  margin: 0px 24px 24px 24px;
`

export const ColorPicker = styled.div<{ color: string }>`
  min-width: 50px;
  width: 50px;
  height: 50px;
  background: ${props => props.color};
  margin-right: 12px;
  cursor: pointer;
`

export const Textarea = styled.textarea`
  width: 100%;
  height: 80px;
  padding: 6px 12px;
  font-size: 14px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 2px;
  ::placeholder {
    color: rgba(0,0,0,0.3);
  }
`

export const Popover = styled.div`
  position: absolute;
  zIndex: 2
`

export const Cover = styled.div`
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px
`