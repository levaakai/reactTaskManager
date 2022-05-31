import { Link } from "react-router-dom"


const Footer = () => {
    let date = new Date()

    return(
        <footer>
            <p>Copyright &copy; {date.getFullYear()}</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer