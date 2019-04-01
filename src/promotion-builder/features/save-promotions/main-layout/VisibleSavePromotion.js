import { connect } from "react-redux";

import SavePromotion from "./SavePromotion";
import { addPromotion, showOverlay } from "../../../../actions/index";

const mapStateToProps = ({
  view,
  selectedPromotionId,
  promotionData,
  overlay
}) => ({
  view,
  selectedPromotionId,
  promotionData,
  overlay
});

export const mapDispatchToProps = {
  addPromotion,
  showOverlay
};

const VisibleSavePromotion = connect(
  mapStateToProps,
  mapDispatchToProps
)(SavePromotion);

export default VisibleSavePromotion;
