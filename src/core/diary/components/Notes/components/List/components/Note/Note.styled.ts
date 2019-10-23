import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  padding: 12px 0px;
  cursor: pointer;
`

export const VerticalLine = styled.div`
  width: 4px;
  position: absolute;
  top: 0;
  bottom: 0;
  background: #ff2f5a;
`

export const Text = styled.p`
  width: 100%;
  color: black;
  font-weight: bold;
  margin-right: 8px;
  margin-left: 24px;
`

export const Counter = styled.span`
  background: #27ccc0;
  color: white;
  font-size: 12px;
  font-weight: bold;
  white-space: nowrap;
  padding: 4px 8px;
  margin: 0px 8px;
  border-radius: 16px;
`