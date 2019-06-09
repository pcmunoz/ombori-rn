import React from 'react';
import styled from 'styled-components'
import { Image } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

const UserContainer = styled.View`
    flex: 1;
    flex-direction: column;
    height: 100;
    width: 350;
    padding-left: 10;
    padding-top: 10;
    padding-bottom: 10;
`;

const PictureContainer = styled(Image)`
    width: 90;
    height: 90;
    border-radius: ${90 / 2};
`;

const Name = styled.Text``;

const Email = styled.Text``;

const Detail = ({ navigation }) => {
  const user = navigation.getParam('user');
  return (
    <UserContainer>
      <PictureContainer source={{ uri: user.avatar }} />
      <Name>{user.firstName} {user.lastName}</Name>
      <Email>{user.email}</Email>
    </UserContainer>
  );
};

Detail.propTypes = {
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(Detail);
