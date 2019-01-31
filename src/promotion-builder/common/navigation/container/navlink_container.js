import {connect} from 'react-redux';
import { VIEW } from '../actions/actionTypes'
import { selectNavLink } from '../actions/actionCreators'

import Nav from '../components/nav/Navigation'

//dispatch actions based on type



function mapStateToProps(state) {
    return {
        view : state.view
    }
}

const mapDispatchToProps = {
    selectNavLink
}

const NavLinkContainer =  connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);

export default NavLinkContainer;