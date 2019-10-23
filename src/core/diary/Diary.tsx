import React, { memo } from 'react';

import { Wrapper, Sidebar, Container } from './Diary.styled';

import Notes from './components/Notes';
import Comments from './components/Comments';

const Diary: React.FC = () =>
  <Wrapper>
    <Sidebar.Wrapper>
      <Sidebar.Title>
        Diary
      </Sidebar.Title>
      <Sidebar.Description>
        Write some notes and comment them 
      </Sidebar.Description>
    </Sidebar.Wrapper>
    <Container>
      <Notes />
      <Comments />
    </Container>
  </Wrapper>


export default memo(Diary);