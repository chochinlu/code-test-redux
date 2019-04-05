import { connect } from 'react-redux';
import App from './components/App';
import { getCheapAction } from './actions/cheapActions';

const mapStateToProps = state => ({
  cheap: state.cheap
});

const mapDispatchToProps = dispatch => {
  return {
    handleGetCheap: () => {
      dispatch(getCheapAction());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
