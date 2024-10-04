import CoursesNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEdit from "./Assignments";
import PeopleTable from "./People/Table";
import { FaAlignJustify } from "react-icons/fa";

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
            <Route path="Modules" element={<Modules />} />
            <Route path="Assignments" element={<Assignments />} />
            <Route path="Assignments/:aid" element={<AssignmentEdit />} />
            <Route path="People/Table" element={<PeopleTable />} />

          </Routes>

        </div>

      </div>
    </div>
  );
}
export default Courses;