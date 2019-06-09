import { connect } from 'react-redux';
import HomeComponent from '../component/HomeComponent';
import { loadUsersList } from '../actions';

const mapStateToProps = state => ({
  users: state.users.list,
  meta: state.users.meta,
});

const mapDispatchToProps = dispatch => ({
  loadMore: () => dispatch(loadUsersList()),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
