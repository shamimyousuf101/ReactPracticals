import { connect } from "react-redux";

import PreviewList from "./PreviewList";

const mapStateToProps = ({ promotionData }) => ({

  promotionData
});

const VisiblePreviewList = connect(mapStateToProps)(PreviewList);

export default VisiblePreviewList;
