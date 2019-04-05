import { connect } from 'react-redux';
import App from './components/App';
import { getCheapAction } from './actions/cheapActions';
import { getBusinessAction } from './actions/businessActions';

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
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
