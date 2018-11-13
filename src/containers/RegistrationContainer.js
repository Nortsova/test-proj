import { connect } from 'react-redux';
import Registration from '../components/Registration';
import { submitRegistrationForm } from '../actions/registration';


const mapStateToProps = ({ data }) => ({ data });

const mapDispatchToProps = {
  onSubmit: submitRegistrationForm,
};

const ListContainer = connect(mapStateToProps, mapDispatchToProps)(Registration);

export default ListContainer;
