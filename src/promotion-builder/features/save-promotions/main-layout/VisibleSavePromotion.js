import { connect } from "react-redux";

import SavePromotion from "./SavePromotion";
import { addPromotion, showOverlay } from "../../../../actions/index";

const mapStateToProps = state => ({
  view: state.view,
  selectedPromotionId: state.selectedPromotionId,
  promotionData: state.promotionData,
  overlay: state.overlay
});

export const mapDispatchToProps = {
  addPromotion: addPromotion,
  showOverlay: showOverlay
};

const VisibleSavePromotion = connect(
  mapStateToProps,
  mapDispatchToProps
)(SavePromotion);

export default VisibleSavePromotion;
