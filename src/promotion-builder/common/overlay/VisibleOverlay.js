import { connect } from "react-redux";

import Overlay from "./Overlay1";

const mapStateToProps = state => ({
  overlay: state.overlay
});

const VisibleOverlay = connect(mapStateToProps)(Overlay);

export default VisibleOverlay;
