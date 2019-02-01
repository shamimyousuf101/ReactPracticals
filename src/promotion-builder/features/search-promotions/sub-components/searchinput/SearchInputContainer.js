import { connect } from "react-redux";
import SearchInput from "./SearchInput";
import { handleInputChange } from "./SearchInputAction";

//dispatch actions based on type

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm   
  };
}

const mapDispatchToProps = {
    handleInputChange
};

const SearchInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchInput);

export default SearchInputContainer;
