import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function FacultyDetail() {
    let params = useParams();

    const [faculty, setFaculty] = useState({});

    useEffect(()=> {
        fetch("https://62dbe4c657ac3c3f3c50fcfe.mockapi.io/faculties/" + params.id)
        .then(
            (res) => {
                return res.json();
        })
        .then(
            (res)=> {
                setFaculty(res);
        });
    },[])

    return (
       <>
       <table align="center" class="w-25">

        <tr align="center" >
            <td> </td>
           
            <td>
                <img src={ faculty.FacultyImage } alt="asdf" />
            </td>
        </tr>
        
        <tr align="center">
            <td>Name</td>
            <td> : </td>
            <td><h5>{ faculty.FacultyName }</h5></td>
        </tr>

        <tr align="center">
            <td>Designation</td>
            <td> : </td>
            <td>{ faculty.FacultyDesignation }</td>
        </tr>

        <tr align="center">
            <td>Eduction</td>
            <td> : </td>
            <td>{ faculty.FacultyDesignation }</td>
        </tr>

        <tr align="center">
            <td>Working since</td>
            <td> : </td>
            <td>{ faculty.FacultyWorkingSince }</td>
        </tr>

        <tr align="center">
            <td>Mobile</td>
            <td> : </td>
            <td>{ faculty.FacultyMobileNumber }</td>
        </tr>

       
        <tr align="center">
            <td>Email</td>
            <td> : </td>
            <td>{ faculty.FacultyEmailAddress }</td>
        </tr>

        <tr align="center">
            <td>Seating</td>
            <td> : </td>
            <td>{ faculty.FacultySeating }</td>
        </tr>

        <tr align="center" >
            <td>Profile</td>
            <td> : </td>
            <td>{ faculty.FacultyProfileDescription }</td>
        </tr>

        <tr align="center">
            <td>Specialization</td>
            <td> : </td>
            <td>{ faculty.FacultyAreaSpecialization }</td>
        </tr>

        <tr align="center">
            <td>subjects Taught</td>
            <td> : </td>
            <td>{ faculty.FacultySubjectsTaught }</td>
        </tr>


       <tr align="center"> 
        <td colspan="3" align="center">
            <Link to={"../Faculties"}>
                
            <button type="button" class="btn btn-outline-success">Back</button>
            </Link>
        </td>
       
       </tr>
       </table>


       
       
       </>
    );

}
export default FacultyDetail;