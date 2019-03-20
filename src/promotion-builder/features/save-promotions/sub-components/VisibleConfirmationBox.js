import { connect } from "react-redux";
import ConfirmationBox from "./ConfirmationBox";
import { updateView } from "../../../../actions/index";

const mapStateToProps = state => {
  return {
    view: state.view
  };
};

export const mapDispatchToProps = {
    updateView: updateView
  };

const VisibleConfirmationBox = connect(mapStateToProps, mapDispatchToProps)(ConfirmationBox);

export default VisibleConfirmationBox;
