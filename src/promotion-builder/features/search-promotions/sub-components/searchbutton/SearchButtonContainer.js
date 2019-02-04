import { connect } from "react-redux";
import SearchButton from "./SearchButton";
import { searchPromotions } from "../../actions/search_actions";

function mapStateToProps(state) {
  return {

    searchTerm: state.searchTerm,
    searchDisplay: state.searchDisplay
   
  };
}

const mapDispatchToProps = {
  searchPromotions
};

const SearchButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchButton);

export default SearchButtonContainer;
