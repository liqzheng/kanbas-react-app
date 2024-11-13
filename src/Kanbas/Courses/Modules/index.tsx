import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
//import { RootState } from "../../store"; // Assuming a defined root store type

export default function Modules() {
  const { cid } = useParams<{ cid: string }>();
  const [moduleName, setModuleName] = useState(""); // Temporary name state for adding new module
  const { modules } = useSelector((state: any) => state.modulesReducer);


  const dispatch = useDispatch();

  const handleAddModule = () => {
    if (moduleName.trim()) {
      dispatch(addModule({ name: moduleName, course: cid }));
      setModuleName(""); // Clear the input after adding
    }
  };

  return (
    <div className="wd-modules">
      {/* Module Controls Component */}
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={handleAddModule}
      />

      {/* List of Modules */}
      <ul id="wd-modules" className="list-group rounded-0">
        {modules.map((module: any) => (
          <li key={module._id} className="list-group-item">
            {/* Display or Edit Module Name */}
            {!module.editing ? (
              <span>{module.name}</span>
            ) : (
              <input
                className="form-control w-50 d-inline-block"
                defaultValue={module.name}
                onChange={(e) => 
                  dispatch(updateModule({ ...module, name: e.target.value }))
                }
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    dispatch(updateModule({ ...module, editing: false }));
                  }
                }}
              />
            )}

            {/* Control Buttons */}
            <ModuleControlButtons
              moduleId={module._id}
              deleteModule={() => dispatch(deleteModule(module._id))}
              editModule={() => dispatch(editModule(module._id))}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}






