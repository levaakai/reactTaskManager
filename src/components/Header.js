import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom'
import Button from './Button'

const Header = ({ title, onAdd, showForm }) => {
    return (
        <header className="header">
            <h1>{ title }</h1>
            {
                useLocation().pathname === "/" &&(<Button 
                                                        bgColor={showForm ? 'red': 'rebeccapurple'} 
                                                        text={showForm ? "Close Pane": "Show Pane"} 
                                                        onClick={onAdd} />)
            }
        </header>
    )
}

Header.defaultProps = {
    title: "Task Manager"
}

Header.propTypes = {
    title: PropTypes.string
}
export default Header