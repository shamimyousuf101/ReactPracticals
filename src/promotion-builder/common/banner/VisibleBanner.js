import { connect } from "react-redux";

import Banner from "./Banner";

const mapStateToProps = ({ view }) => ({
  view
});

const VisibleBanner = connect(mapStateToProps)(Banner);

export default VisibleBanner;
