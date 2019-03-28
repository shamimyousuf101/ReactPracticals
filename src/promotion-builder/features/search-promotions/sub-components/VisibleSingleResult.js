import { connect } from "react-redux";

import SingleResult from "./SingleResult";
import { setPrommotionId } from "../../../../actions/index";


const mapStateToProps = state => {
  return {
    selectedPromotionId: state.selectedPromotionId,
    view: state.view
  };
};

export const mapDispatchToProps = {
  editBtnClick: setPrommotionId
};

const VisibleSingleResult = connect(
  mapStateToProps,
  mapDispatchToProps
)(SingleResult);

export default VisibleSingleResult;
