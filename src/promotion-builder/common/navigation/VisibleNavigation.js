import { connect } from "react-redux";

import Navigation from "./Navigation";
import { updateView, resetPrommotionId } from "../../../actions";


const mapStateToProps = state => ({
  view: state.view,
  selectedPromotionId: state.selectedPromotionId
});

export const mapDispatchToProps = {
  updateView: updateView,
  resetPrommotionId: resetPrommotionId
};

const VisibleNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default VisibleNavigation;
