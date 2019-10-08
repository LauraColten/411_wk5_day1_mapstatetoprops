import { connect } from 'react-redux';
import Dashboard from '../components/Dashboard';
import { statement } from '@babel/template';


const mapStateToProps = (state) => {
  return {
    user: state.user,
    cars: state.cars
  }
}

export default connect(mapStateToProps)(Dashboard);