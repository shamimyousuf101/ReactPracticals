import { connect } from "react-redux";
import SavePromotion from "./SavePromotion";

const mapStateToProps = state => {
  return {
    view: state.view
  };
};

const VisibleSavePromotion = connect(mapStateToProps)(SavePromotion);

export default VisibleSavePromotion;
