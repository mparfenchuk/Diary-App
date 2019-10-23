import styled from 'styled-components';

export const Paper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  margin: 12px;
  box-shadow: 0 0 4px rgba(0,0,0,0.6);
`

export const Title = styled.h1`
  color: black;
  margin: 24px 24px 12px 24px;
`

export const Alert = styled.p`
  color: black;
  margin: 0px 24px;
`

export const Button = styled.button<{ delete?: boolean }>`
  min-width: 92px;
  background: ${props => props.delete ? "white" : "#27ccc0"};
  color: ${props => props.delete ? "#ff2f5a" : "white"};
  font-size: 14px;
  padding: 6px 8px;
  border: ${props => props.delete ? "1px solid #ff2f5a" : "none"};
  border-radius: 2px;
  margin-right: ${props => props.delete ? "24px" : "0px"};
  cursor: pointer;
  box-shadow: 0 2px 0px rgba(0,0,0,0.6);
  transform: translateY(-1px);
  :active {
    box-shadow: 0 0px rgba(0,0,0,0.6);
    transform: translateY(1px);
  }
`

export const List = styled.div<{ inverse?: boolean }>`
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  padding: 12px 0px;
  flex-direction: ${props => props.inverse ? "column-reverse" : ""};
`

export const Divider = styled.hr`
  border: 0.5px solid rgba(0,0,0,0.1);
  margin: 0.5px 24px;
`