import { connect } from "react-redux";
import SingleResult from "./SingleResult";
import { setPrommotionIdAndView } from "../../../../actions/index";

const mapStateToProps = state => {
  return {
    selectedPromotionId: state.selectedPromotionId,
    view: state.view
  };
};

export const mapDispatchToProps = {
  editBtnClick: setPrommotionIdAndView
};

const VisibleSingleResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleResult);

export default VisibleSingleResult;
