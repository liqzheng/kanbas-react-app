import { BsGripVertical } from "react-icons/bs";
//import AssignmentControls from "./AssignmentControls";
import { RiArrowDropDownFill } from "react-icons/ri";
//import AssignmentControlButtons from "./AssignmentControlButtons";
import { IoEllipsisVertical } from "react-icons/io5";
import { assignments } from "../../Database";
import { useParams, Link } from "react-router-dom";
import React from "react";
const Assignments = () => {


  const { cid } = useParams();
  const assignment = assignments.filter(
    (assignment) => assignment._id === cid
  );

  return (
    <div id="wd-assignments">

      <input id="wd-search-assignment"
        placeholder="Search for Assignments" />
      <button id="wd-add-assignment-group">+ Group</button>
      <button id="wd-add-assignment">+ Assignment</button>
      <div className="wd-assignment-title list-group-item p-0 mb-5 fs-5 border-gray">
        <div className="wd-assignment-title p-3 ps-2 bg-secondary">
          <BsGripVertical className="me-1 fs-3" />
          <RiArrowDropDownFill className="me-2 fs-1" type="button" />
          ASSIGNMENTS
          <IoEllipsisVertical className="float-end fs-3" />
          <button className="float-end" style={{ border: "none", background: "none", outline: "none" }}>+</button>
          <span className="float-end" style={{ marginRight: "20px" }}><button style={{ borderRadius: "10px" }}>40% of Total</button></span>
        </div>

      </div>
      

        {assignments.map((assignment) => (
          <ul className="wd-assignment-list list-group rounded-0">

          <li key={assignment._id} className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">

            <div style={{ marginLeft: "75px" }}>
              <Link
                to={`/Kanbas/Courses/${cid}/Assignments/${assignment}`}
                className="wd-assignment-link text-black"

                style={{ textDecoration: "none" }}>
                <strong>{assignment.title}</strong>
              </Link>
              <br />
              <span><a className="wd-modules-list-link text-danger"
                href="https://www.google.com" style={{ textDecoration: "none" }}>Multiple Modules</a> | <strong>Not available until</strong> May 6 at 12:00 am | </span>
              <br />
              <span>
                <strong>Due</strong> May 13 at 11:59 pm | 100 pts
              </span>
            </div>
          </li>

      <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">

        <a className="wd-assignment-link text-black"
          href="#/Kanbas/Courses/1234/Assignments/123"
          style={{ textDecoration: "none" }}> <strong>{assignment.title}</strong>
        </a><p>Multiple Modules | <strong>Not Available until</strong> May 13 at 12:00 am | <strong>Due</strong> May 20 at 11:59pm | 100pts</p>
      </li>
      <li className="wd-assignment-list-item list-group-item p-3 ps-1 wd-lesson">

        <a className="wd-assignment-link text-black"
          href="#/Kanbas/Courses/1234/Assignments/123"
          style={{ textDecoration: "none" }}> <strong>{assignment.title}</strong>
        </a><p>Multiple Modules | <strong>Not Available until</strong> May 13 at 12:00 am | <strong>Due</strong> May 20 at 11:59pm | 100pts</p>
      </li>


    </ul>
  ))}；
  </div>
  );
}
export default Assignments;