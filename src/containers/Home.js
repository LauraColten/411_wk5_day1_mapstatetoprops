import { connect } from 'react-redux';
import Home from '../components/Home';
import { statement } from '@babel/template';


const mapStateToProps = (state) => {
  return {
    cars: state.cars
  }
}

export default connect(mapStateToProps)(Home);