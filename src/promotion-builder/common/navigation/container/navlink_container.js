import {connect} from 'react-redux';
import { changeView } from '../actions/navigation_actions'

import Nav from '../components/nav/Navigation'

function mapStateToProps(state) {
    return {
        view : state.view
    }
}

const mapDispatchToProps = {
    changeView
}

const NavLinkContainer =  connect(
	mapStateToProps,
	mapDispatchToProps
)(Nav);

export default NavLinkContainer;