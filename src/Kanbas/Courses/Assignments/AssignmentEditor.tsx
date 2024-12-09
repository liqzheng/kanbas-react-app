import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addAssignment, deleteAssignment } from "./reducer";

export default function AssignmentEditor() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector((state: any) => state.assignments);
  const existingAssignment = assignments.find((a: any) => a._id === id);

  const [assignment, setAssignment] = useState(
    existingAssignment || {
      _id: Math.random().toString(36).substr(2, 9),
      name: "",
      description: "",
      points: "",
      dueDate: "",
      availableFrom: "",
      availableUntil: "",
    }
  );

  const handleSave = () => {
    if (assignment.name.trim() === "") {
      alert("Name is required!"); // Simple validation
      return;
    }

    if (existingAssignment) {
      dispatch(deleteAssignment(assignment));
    } else {
      dispatch(addAssignment(assignment));
    }
    navigate(".."); // Navigate back to Assignments screen
  };

  return (
    <div>
      <h1>{existingAssignment ? "Edit" : "Create"} Assignment</h1>
      <form>
        <label>Name:</label>
        <input
          type="text"
          value={assignment.name}
          onChange={(e) => setAssignment({ ...assignment, name: e.target.value })}
          placeholder="Name"
        />
        <label>Description:</label>
        <textarea
          value={assignment.description}
          onChange={(e) => setAssignment({ ...assignment, description: e.target.value })}
          placeholder="Description"
        />
        <label>Points:</label>
        <input
          type="number"
          value={assignment.points}
          onChange={(e) => setAssignment({ ...assignment, points: e.target.value })}
          placeholder="Points"
        />
        <label>Due Date:</label>
        <input
          type="date"
          value={assignment.dueDate}
          onChange={(e) => setAssignment({ ...assignment, dueDate: e.target.value })}
        />
        <label>Available From:</label>
        <input
          type="date"
          value={assignment.availableFrom}
          onChange={(e) => setAssignment({ ...assignment, availableFrom: e.target.value })}
        />
        <label>Available Until:</label>
        <input
          type="date"
          value={assignment.availableUntil}
          onChange={(e) => setAssignment({ ...assignment, availableUntil: e.target.value })}
        />
        <div>
          <button type="button" onClick={handleSave} className="btn btn-primary">
            Save
          </button>
          <button
            type="button"
            onClick={() => navigate("..")}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
