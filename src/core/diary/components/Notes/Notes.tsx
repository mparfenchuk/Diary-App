import React from 'react';

import { Paper, Title } from 'app/App.styled';

import Form from './components/Form';
import List from './components/List';

const Notes: React.FC = () =>
  <Paper>
    <Title>
      Notes
    </Title>
    <Form />
    <List />
  </Paper>

export default Notes;