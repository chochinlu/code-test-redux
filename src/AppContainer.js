import { connect } from 'react-redux';
import App from './components/App';
import { getCheapAction, addCheapFlightAction } from './actions/cheapActions';
import {
  getBusinessAction,
  addBusinessFlightAction
} from './actions/businessActions';

const mapStateToProps = state => ({
  cheap: state.cheap,
  business: state.business
});

const mapDispatchToProps = dispatch => {
  return {
    handleGetCheap: () => {
      dispatch(getCheapAction());
    },
    handleGetBusiness: () => {
      dispatch(getBusinessAction());
    },
    handleAddCheapFlight: payload => {
      dispatch(addCheapFlightAction(payload));
    },
    handleAddBusinessFlight: payload => {
      dispatch(addBusinessFlightAction(payload));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
