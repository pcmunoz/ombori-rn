import React from 'react';
import { FlatList, View } from 'react-native';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import UserComponent from './UserComponent';
import EmptyComponent from './EmptyComponent';

const Container = styled.View`
  flex:1;
`;

const Separator = styled.View`
  height: 0.5;
  backgroundColor: 'rgba(0,0,0,0.4)';
`;

const metaCheck = (meta, loadMore) => {
  if (meta.page + 1 <= meta.totalPages) {
    return loadMore();
  }
  return null;
};

const Home = ({ users, loadMore, meta }) => (
  <Container>
    {console.log(users)}
    {
      users &&
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString() + item.id}
        renderItem={({ item, index }) => <UserComponent user={item} />}
        initialNumToRender={users.length}
        onEndReachedThreshold={0.4}
        onEndReached={() => {
          metaCheck(meta, loadMore);
        }}
        ListFooterComponent={meta.page + 1 > meta.totalPages ? <EmptyComponent /> : <View />}
        ItemSeparatorComponent={() => <Separator />}
      />
    }
  </Container>
);

Home.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  loadMore: PropTypes.func.isRequired,
  meta: PropTypes.shape({
    page: PropTypes.number,
    totalPages: PropTypes.number,
  }).isRequired,
};

export default Home;
