import React from 'react';
import styled from 'styled-components';

const EmptyContainer = styled.View`
    flex: 1;
    flex-direction: row;
    height: 100;
    width: 350;
    padding-left: 10;
    justify-content: center;
`;

const Text = styled.Text``;

const Empty = () => (
  <EmptyContainer>
    <Text>Nothing more to load....</Text>
  </EmptyContainer>
);

export default Empty;
