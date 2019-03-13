import { connect } from "react-redux";
import AssetManager from "./AssetManager";

const mapStateToProps = state => {
  return {
    view: state.view
  };
};

const VisibleAssetManager = connect(mapStateToProps)(AssetManager);

export default VisibleAssetManager;
