import { connect } from "react-redux";
import Banner from "./Banner";

const mapStateToProps = state => {
  return {
    view: state.view
  };
};

const VisibleBanner = connect(mapStateToProps)(Banner);

export default VisibleBanner;
