import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Faculties () {

 const [faculties, setFaculties] = useState([]);
    useEffect(
    ()=>{
        fetch("https://62dbe4c657ac3c3f3c50fcfe.mockapi.io/faculties")
        .then((res)=> {
            return res.json();
        })
        .then((res)=> {
            setFaculties(res);
        });
    },[]);

    const formatedFaculty = faculties.map((fac) => {
        return(
            <>
           
    <div class="card col-md-2 m-3 p-1">
            <img src={fac.FacultyImage} class="card-img-top" alt="asdf" />
        <div class="card-body">
            <h5 class="card-title" align="center">{fac.FacultyName}</h5>
            
        <ul class="list-group list-group-flush" align="center">
                <li class="list-group-item text-danger">{fac.FacultyDesignation}</li>
                <li class="list-group-item">{fac.FacultyHighestEducation}</li>
                <li class="list-group-item">Working since {fac.FacultyWorkingSince}</li>
                
        </ul>
            <div class="d-grid gap-2 col-7 mx-auto">

            <Link to={"../faculty/" + fac.id } > 
            <button type="button" class="btn btn-outline-dark mx-auto   text-wrap btn-sm  " >View Profile... </button>
            </Link> 
            </div>
        </div>
    </div>

            
            </>
        )
    })
    return (
    <>
    <div class="row">
        

        {formatedFaculty}

    </div>
        
    
    </>

    );
}
export default Faculties;
