import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  padding: 12px 0px;
`

export const Color = styled.div<{ color: string }>`
  min-width: 50px;
  width: 50px;
  height: 50px;
  background: ${props => props.color};
  margin-right: 12px;
  margin-left: 24px;
`

export const Text = styled.p`
  width: 100%;
  color: black;
  font-size: 14px;
  white-space: pre-wrap;
  margin-right: 24px;
`