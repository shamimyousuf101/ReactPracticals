import { connect } from "react-redux";
import SingleResult from "./SingleResult";
import { setPrommotionIdAndView } from "../../../../actions/index";

const mapStateToProps = state => {
  return {
    selectedPromotionId: state.selectedPromotionId,
    view: state.view
  };
};

export const mapDispatchToProps = (dispatch) => ({
  editBtnClick: setPrommotionIdAndView(dispatch)
});

const VisibleSingleResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleResult);

export default VisibleSingleResult;
