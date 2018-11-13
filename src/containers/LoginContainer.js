import { connect } from 'react-redux';
import Login from '../components/Login';
import { submitLoginForm } from '../actions/login';


const mapStateToProps = ({ data }) => ({ data });

const mapDispatchToProps = {
  onSubmit: submitLoginForm,
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export default ListContainer;
