import { Link } from "react-router-dom";

function Header() {
    return(
        <>
            <Link to="./" >Home</Link> &nbsp; &nbsp;
            <Link to="./Faculties" >Faculty</Link> &nbsp; &nbsp;
            {/* <Link to="../Faculty/1" >FacultyDetail</Link> */}
        </>
    );
}

export default Header;