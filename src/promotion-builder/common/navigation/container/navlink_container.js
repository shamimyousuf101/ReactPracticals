import {connect} from 'react-redux';
import { VIEW } from '../actions/actionTypes'
import { selectNavLink } from '../actions/actionCreators'

import Nav from '../components/nav/Navigation'

//dispatch actions based on type

export const menuClickHandler = (event) => (dispatch) => {
      const selectedLink = event.currentTarget.className;

      switch (selectedLink) {
          case 'search__link':
              dispatch(selectNavLink(VIEW.SEARCH));
            break;
  
          case 'upload__link':
              dispatch(selectNavLink(VIEW.ASSETMANAGER));
            break;
  
          case 'config__link':
    
              dispatch(selectNavLink(VIEW.SAVEPROMOTION));
            break;
  
          default:
              dispatch(selectNavLink(VIEW.SEARCH));
      }
  };

function mapStateToProps(state) {
    return {
        view : state.view
    }
}

const mapDispatchToProps = {
    menuClickHandler
}

const NavLinkContainer =  connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);

export default NavLinkContainer;