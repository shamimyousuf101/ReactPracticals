import { connect } from "react-redux";
import SearchInput from "./SearchInput";
import { handleInputChange } from "../../actions/actions";

//dispatch actions based on type

function mapStateToProps(state) {
  return {
    searchTerm: state.searchTerm,
    searchDisplay: state.searchDisplay,
    promotionData: state.promotionData
   
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
