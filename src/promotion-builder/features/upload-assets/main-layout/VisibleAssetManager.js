import { connect } from "react-redux";

import AssetManager from "./AssetManager";

const mapStateToProps = ({ view }) => ({
  view
});

const VisibleAssetManager = connect(mapStateToProps)(AssetManager);

export default VisibleAssetManager;
