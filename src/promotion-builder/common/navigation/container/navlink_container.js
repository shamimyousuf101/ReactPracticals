import {connect} from 'react-redux';
import { selectNavLink } from '../actions/actionCreators'

import Nav from '../components/nav/Navigation'

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