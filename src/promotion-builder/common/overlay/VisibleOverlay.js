import { connect } from "react-redux";

import Overlay from "./Overlay1";
import { showOverlay } from "../../../actions/index";

const mapStateToProps = state => ({
  overlay: state.overlay
});

export const mapDispatchToProps = {
  showOverlay: showOverlay
};
const VisibleOverlay = connect(
  mapStateToProps,
  mapDispatchToProps
)(Overlay);

export default VisibleOverlay;
