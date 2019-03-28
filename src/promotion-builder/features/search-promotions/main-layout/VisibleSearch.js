import { connect } from "react-redux";

import Search from "./Search";

const mapStateToProps = state => ({
  view: state.view
});

const VisibleSearch = connect(mapStateToProps)(Search);

export default VisibleSearch;
