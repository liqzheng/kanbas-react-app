
import { BsGripVertical } from "react-icons/bs";
import GreenCheckmark from "./GreenCheckmark";
import { useParams } from "react-router";
import * as db from "../../Database";
import { Routes, Route, Navigate } from "react-router";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
const Modules = () => {
  const { cid } = useParams();
  const modules = db.modules;
  return (
    <div>
      <ModulesControls /><br /><br /><br /><br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .filter((module: any) => module.course === cid)
          .map((module: any) => (

            <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
              <div className="wd-title p-3 ps-2 bg-secondary">
                <BsGripVertical className="me-2 fs-3" />
                {module.name}
                <ModulesControls />
              </div>
              {module.lessons && (
                <ul className="wd-lessons list-group rounded-0">
                  {module.lessons.map((lesson: any) => (

                    <li className="wd-lesson list-group-item p-3 ps-1">
                      <BsGripVertical className="me-2 fs-3" />
                      {lesson.name}
                      <LessonControlButtons />
                    </li>))}



                </ul>)}
            </li>))}
      </ul>
      <Routes>
        <Route path="/ModulesControles" element={<ModulesControls />} />

        <Route path="/GreenCheckmark" element={<GreenCheckmark />} />
        <Route path="/LessonControButtons" element={<LessonControlButtons />} />



      </Routes>


    </div>
  )
}

export default Modules;
