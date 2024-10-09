import CoursesNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEdit from "./Assignments";

import { FaAlignJustify } from "react-icons/fa";
import AssignmentEditor from "./Assignments/Editor";
import PeopleTable from "./People";

const Courses=()=> {
  return (
    <div id="wd-courses">
      <h2 className="text-danger">
        <FaAlignJustify className="me-4 fs-4 mb-1" /> Course 1234</h2>
        
      <hr />

      <div className="d-flex">
        <div className="d-none d-md-block">
          <CoursesNavigation />

        </div>
        <div className="flex-fill">
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home />} />
            <Route path="/Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEditor />} />
            <Route path="People" element={<PeopleTable />} />

          </Routes>

        </div>

      </div>
    </div>
  );
}
export default Courses;