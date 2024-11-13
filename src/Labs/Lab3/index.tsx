import VariablesAndConstants from "./VariablesAndConstants";
import Add from "./Add";
import Square from "./Square";
import Highlight from "./Highlight";
import AddPathParameters from "./AddPathParameters";

import { useSelector } from "react-redux";
export default function Lab3() {
  const { todos } = useSelector((state: any) => state.todosReducer);
    console.log('Hello World!');
    return (
      <div id="wd-lab3">
        <h2>Lab 3</h2>
        <ul className="list-group">
        {todos.map((todo: any) => (
          <li className="list-group-item" key={todo.id}>
            {todo.title}
          </li>
        ))}
      </ul>
      <hr />

        <VariablesAndConstants/>
        <Add a={3} b={4} />
        <h4>Square of 4</h4>
        <AddPathParameters />

      <Square>4</Square>
      <Highlight>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipitratione eaque illo minus cum, saepe totam
        vel nihil repellat nemo explicabo excepturi consectetur. Modi omnis minus sequi maiores, provident voluptates.
     </Highlight>

      <hr />
  </div>
  ); }