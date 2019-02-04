import { connect } from "react-redux";
import SearchInput from "./SearchInput";
import { setSearchTerm } from "../../actions/search_actions";

//dispatch actions based on type

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm   
  };
}

const mapDispatchToProps = {
  setSearchTerm
};

const SearchInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);

export default SearchInputContainer;
