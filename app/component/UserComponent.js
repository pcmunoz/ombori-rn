import React from 'react';
import styled from 'styled-components'
import { Image, TouchableOpacity } from 'react-native';
import { withNavigation } from 'react-navigation';
import PropTypes from 'prop-types';

const UserContainer = styled.View`
    flex: 1;
    flex-direction: row;
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

const Detail = styled.View`
    flex:1;
    flex-direction: column;
    padding-left: 10;
    justify-content: center;
`;

const Name = styled.Text``;

const User = ({ user, navigation }) => (
  <UserContainer>
    <PictureContainer source={{ uri: user.avatar }} />
    <TouchableOpacity
      onPress={() => navigation.push('Detail', {
        user,
      })}
    >
      <Detail>
        <Name>{user.firstName} {user.lastName}</Name>
      </Detail>
    </TouchableOpacity>
  </UserContainer>
);

User.propTypes = {
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  navigation: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withNavigation(User);
