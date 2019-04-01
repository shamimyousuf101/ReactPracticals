import { connect } from "react-redux";

import Search from "./Search";

const mapStateToProps = ({ view }) => ({
  view
});

const VisibleSearch = connect(mapStateToProps)(Search);

export default VisibleSearch;
