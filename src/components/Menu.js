import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/about">About</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/articles">Articles</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/">Fieldwork</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/">Events</Link></li>
            </ul>
            <ul className="actions vertical">                
                <li><a href="#contact" className="button special fit" onClick={props.onToggleMenu} >Contact me</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
