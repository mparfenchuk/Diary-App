import React, { memo } from 'react';

import { Divider } from 'app/App.styled';
import { Wrapper, Color, Text } from './Comment.styled';

interface Props {
  text: string;
  color: string;
}

const Comment: React.FC<Props> = ({ text, color }) => 
  <>
    <Divider />
    <Wrapper>
      <Color color={color} />
      <Text>
        {text}
      </Text>
    </Wrapper>
  </>

export default memo(Comment);