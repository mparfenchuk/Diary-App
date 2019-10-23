import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`

export const Sidebar = {
  Wrapper: styled.div`
    flex: 1;
    padding: 24px;
    background: #2a2f3e;
  `,
  Title: styled.h1`
    text-transform: uppercase;
    color: white;
  `,
  Description: styled.p`
    color: #c9c9c9;
    font-size: 18px;
  `
}

export const Container = styled.div`
  display: flex;
  flex: 4;
  flex-direction: row;
  padding: 12px;
`