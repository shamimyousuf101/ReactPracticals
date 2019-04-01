import { connect } from "react-redux";

import Navigation from "./Navigation";
import { updateView, resetPrommotionId } from "../../../actions";

const mapStateToProps = ({ view, selectedPromotionId }) => ({
  view,
  selectedPromotionId
});

export const mapDispatchToProps = {
  updateView,
  resetPrommotionId
};

const VisibleNavigation = connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);

export default VisibleNavigation;
