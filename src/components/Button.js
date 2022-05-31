import PropTypes from 'prop-types'

const Button = ({bgColor, color, text, onClick}) => {
    return (
    <button style={{ backgroundColor: bgColor, color: color, fontWeight: 'bold'}} className="btn" onClick={onClick} >{text}
    </button>
    )
}

Button.propTypes = {
    bgColor: PropTypes.string,
    color: PropTypes.string,
    text: PropTypes.string,
    onClick: PropTypes.func
}

Button.defaultProps = {
    bgColor: 'rebeccapurple',
    color: '#ffffff',
    text: 'Add',
}

export default Button