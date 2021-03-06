import { connect } from "react-redux";

import SearchForm from "./SearchForm";
import { triggerSearch } from "../../../../actions/index";

const mapStateToProps = ({ searchTerm }) => ({
  searchTerm
});

export const mapDispatchToProps = {
  onChange: triggerSearch
};

const VisibleSearchForm = connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);

export default VisibleSearchForm;
