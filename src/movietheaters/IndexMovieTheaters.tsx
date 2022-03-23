import { Link } from "react-router-dom";

export default function IndexMoviesTheater() {
  return (
    <>
      <h3>Movie Theater</h3>
      <Link className="btn btn-primary" to="/movietheater/create">Create Movie Theater</Link>
      <Link className="btn btn-primary" to="/movietheater/edit">Edit Movie Theater </Link>
    </>
  );
}
