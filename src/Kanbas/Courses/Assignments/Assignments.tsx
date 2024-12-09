import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { deleteAssignment } from "./reducer";
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";

export default function Assignments() {
  const dispatch = useDispatch();
  const assignments = useSelector((state: any) => state.assignments);

  const handleDelete = (id: String) => {
    console.log("ID to delete:", id); // Debugging step
    if (window.confirm("Are you sure you want to delete this assignment?")) {
      dispatch(deleteAssignment(id)); // No need for 'id: String', just pass 'id'
    }
  };

  return (
    <div>
      <h1>Assignments</h1>
      <Link to="Editor" className="btn btn-success">
        + Assignment
      </Link>
      <ul>
        {assignments.map((assignment: { _id: Key | null | undefined; name: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => (
          <li key={assignment._id}>
            <Link to={`Editor/${assignment._id}`}>{assignment.name}</Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
}