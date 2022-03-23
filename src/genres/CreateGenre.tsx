import { Link, useHistory } from "react-router-dom";
import Button from "../utils/Button";

export default function CreateGenres(){

    const history = useHistory();

    return(
        <>
            <h3>Create Genres</h3>
            <Button onClick={()=>{
             //saving data in database 
             history.push('/genres');       
            }}> create Genres</Button>    
        </>
    )
} 