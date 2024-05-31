import "./header.css"
import "./index.css"
function Header() {

    return(
        <div className="header">
            <h1 className="headerName">MUTC CLUB</h1>
            <nav>
            <ul className="list">
                <li className="list1"><a href="#">home</a> </li>
                <li className="list1"><a href="#">leadership</a> </li>
                <li className="list1"><a href="#">tracks</a> </li>
                <li className="list1"><a href="#">events</a> </li>
            </ul>
            
            </nav>
            {/* <hr/> */}
        </div>
        );
    
}

export default Header