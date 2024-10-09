import Account from "./Account";
import { Routes, Route, Navigate } from "react-router";
import Dashboard from "./Dashboard";
import KanbasNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
const Kanbas=()=> {
    return (
        <div id="wd-kanbas">


            <KanbasNavigation />

            <div className="wd-main-content-offset p-3">

                <Routes>
                    <Route path="/" element={<Navigate to= "Account" />} />
                    <Route path="/Account/*" element={<Account />} />
                    <Route path="/Dashboard" element={<Dashboard />} />
                    <Route path="/Courses/:cid/*" element={<Courses />} />
                
                </Routes>

            </div>




        </div>
    )
}
export default Kanbas;