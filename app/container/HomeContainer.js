import { connect } from 'react-redux';
import HomeComponent from '../component/HomeComponent';
import { loadUser } from '../actions';

const mapStateToProps = state => ({
  users: state.users.list,
});

const mapDispatchToProps = dispatch => ({
  loadUser: () => dispatch(loadUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeComponent);
