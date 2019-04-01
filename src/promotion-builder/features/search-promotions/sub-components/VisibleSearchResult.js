import { connect } from "react-redux";

import SearchResult from "./SearchResult";

const mapStateToProps = ({ searchTerm, promotionData }) => ({
  searchTerm,
  promotionData
});

const VisibleSearchResult = connect(mapStateToProps)(SearchResult);

export default VisibleSearchResult;
