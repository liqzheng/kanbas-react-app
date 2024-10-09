import React from "react";
import { BsGripVertical } from "react-icons/bs";
import { FaSearch, FaPlus } from "react-icons/fa";
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "../Modules/GreenCheckmark"; // Adjust the import path as necessary

const Assignments = () => {
  return (
    <div id="wd-assignments" className="container mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <div className="input-group">
          <span className="input-group-text">
            <FaSearch />
          </span>
          <input
            type="text"
            className="form-control me=4 width= 50%"
            placeholder="Search"
            aria-label="Search for Assignment" 
          />
        </div>
        <div>
          <button className="btn btn-primary width =20% me-2">
            <FaPlus /> Group
          </button>
          <button className="btn btn-primary width =30% color = red" >
            <FaPlus /> Assignment
          </button>
        </div>
      </div>

      <div className="wd-title d-flex justify-content-between align-items-center bg-secondary text-white p-3">
        <div className="d-flex align-items-left">
          <BsGripVertical className="me-2 fs-3" />
          <h2>ASSIGNMENTS</h2>
        </div>
        <span className="badge bg-success rouder = 5px" >40% of Total <FaPlus /></span>
      </div>

      <ul className="list-group mt-3">
        <li className="list-group-item p-3 border-start border-3 border-success">
          <h3>A1</h3>
          <div className="mb-2">
            <span>Multiple Modules</span> | <span>Not Available until May 6 at 12:00 AM</span>
          </div>
          <p>
            <span>Due: </span> May 13 at 11:59 PM | <span>100 pts</span>
          </p>
          <div>
            <GreenCheckmark /> <IoEllipsisVertical className="fs-4" />
          </div>
        </li>
        
        <li className="list-group-item p-3 border-start border-3 border-success">
          <h3>A2</h3>
          <div className="mb-2">
            <span>Multiple Modules</span> | <span>Not Available until May 13 at 12:00 AM</span>
          </div>
          <p>
            <span>Due: </span> May 20 at 11:59 PM | <span>100 pts</span>
          </p>
          <div>
            <GreenCheckmark /> <IoEllipsisVertical className="fs-4" />
          </div>
        </li>
        
        {/* Add more assignments as needed */}
      </ul>
    </div>
  );
};

export default Assignments;
