import {  useParams } from "react-router-dom";

export default function EditGenres(){
    const {id}: any = useParams();
    return(
        <>
            <h3>Edit Genres</h3>
             the id is {id}   
        </>
    )
} 