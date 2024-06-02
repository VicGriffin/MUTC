import "./header.css";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <div className="header">
                <h1 className="headerName">MUTC CLUB</h1>
                <nav>
                    <ul className="list">
                        <li className="list1">
                            <Link to="/">home</Link>
                        </li>
                        <li className="list1">
                            <Link to="/leadership">leaders</Link>
                        </li>
                        <li className="list1">
                            <Link to="/events">events</Link>
                        </li>
                        <li className="list1">
                            <Link to="/tracks">tracks</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    );
}

export default Header;
