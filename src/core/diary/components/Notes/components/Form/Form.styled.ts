import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  align-items: center;
  margin: 0px 24px;
`

export const Input = styled.input`
  width: 100%;  
  padding: 6px 12px;
  margin-right: 8px;
  font-size: 14px;
  border: 1px solid rgba(0,0,0,0.2);
  border-radius: 2px;
  ::placeholder {
    color: rgba(0,0,0,0.3);
  }
`