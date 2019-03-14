import { connect } from "react-redux";
import SearchResult from "./SearchResult";

const mapStateToProps = state => {
  return {
    searchTerm: state.searchTerm,
    promotionData: state.promotionData
  };
};

const VisibleSearchResult = connect(mapStateToProps)(SearchResult);

export default VisibleSearchResult;
