import { connect } from "react-redux";
import SavePromotion from "./SavePromotion";

import { addPromotion } from "../../../../actions/index";

const mapStateToProps = state => {
  return {
    view: state.view,
    selectedPromotionId: state.selectedPromotionId,
    promotionData: state.promotionData
  };
};

export const mapDispatchToProps = {
  addPromotion: addPromotion
};

const VisibleSavePromotion = connect(mapStateToProps, mapDispatchToProps)(SavePromotion);

export default VisibleSavePromotion;
