import Lab1 from "./Lab1";
import Lab2 from "./Lab2";
import {Routes,Route} from "react-router";
import TOC from "./TOC";
export default function Labs() {
  return (
    <div id="wd-labs">
      <h1>Liqiong Zheng</h1>
      <TOC />;
      <h1>Labs</h1>
      <Routes>
        <Route path="/Lab1" element={<Lab1 />}/>
        <Route path="/Lab2" element={<Lab2 />}/>
        <Route path="/Lab3" element={ <h2>Lab 3</h2>}/>
        

       
      </Routes>
      
   

    </div>
);}
