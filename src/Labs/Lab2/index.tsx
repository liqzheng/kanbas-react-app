import BackgroundColors from "./BackgroundColors";
import BootstrapForms from "./BootstrapForms";
import BootstrapGrids from "./BootstrapGrids";
import BootstrapLists from "./BootsTrapLists";
import BootstrapNavigation from "./BootStrapNavigation";
import BootstrapTables from "./BootstrapTables";
import Borders from "./Borders";
import Corners from "./Corners";
import Dimensions from "./Dimensions";
import Flex from "./Flex";
import Float from "./Float";
import ForegroundColors from "./ForegroundColors";
import GridLayout from "./GridLayout";
import "./index.css";
import { Routes, Route, Navigate } from "react-router";
import Margins from "./Margins";
import Padding from "./Padding";
import Positions from "./Positions";
import ReactIcons from "./ReactIcons";
import ScreenSizeLable from "./ScreenSizeLable";
import Zindex from "./Zindex";
export default function Lab2() {
    return (



        <div className="container">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <h3>Styling with the STYLE attribute</h3>
            <p  >Style attribute allows configuring look and feel
                right on the element. Although it's very convenient
                it is considered bad practice and you should avoid
                using the style attribute
            </p>




            <div id="wd-css-id-selectors">
                <h3>ID selectors</h3>
                <p id="wd-id-selector-1">
                    Instead of changing the look and feel of all the
                    elements of the same name, e.g., P, we can refer to a specific element by its ID
                </p>
                <p id="wd-id-selector-2">
                    Here's another paragraph using a different ID and a different look and
                    feel
                </p>
            </div>

            <div id="wd-css-class-selectors">
                <h3>Class selectors</h3>
                <p className="wd-class-selector">
                    Instead of using IDs to refer to elements, you can use an element's CLASS attribute
                </p>
                <h4 className="wd-class-selector">
                    This heading has same style as paragraph above
                </h4>
            </div>

            <div id="wd-css-document-structure">
                <div className="wd-selector-1">
                    <h3>Document structure selectors</h3>
                    <div className="wd-selector-2">
                        Selectors can be combined to refer elements in particular
                        places in the document
                        <p className="wd-selector-3">
                            This paragraph's red background is referenced as
                            <br />
                            .selector-2 .selector3<br />
                            meaning the descendant of some ancestor.<br />
                            <span className="wd-selector-4">
                                Whereas this span is a direct child of its parent
                            </span><br />
                            You can combine these relationships to create specific
                            styles depending on the document structure
                        </p>
                    </div>
                </div>
            </div>



            <Routes>

                <Route path="/BackgroudColors" element={<BackgroundColors />} />
                <Route path="/BootstrapForms" element={<BootstrapForms />} />
                <Route path="/BootstrapGrids" element={<BootstrapGrids />} />
                <Route path="/BootstrapLists" element={<BootstrapLists />} />
                <Route path="/BootstrapNavigation" element={<BootstrapNavigation />} />
                <Route path="/BootstrapTables" element={<BootstrapTables />} />
                <Route path="/BootstrapTables" element={<BootstrapTables />} />
                <Route path="/Borders" element={<Borders />} />
                <Route path="/Corners" element={<Corners />} />
                <Route path="/Dimensions" element={<Dimensions />} />
                <Route path="/Flex" element={<Flex />} />
                <Route path="/Float" element={<Float />} />
                <Route path="/ForegroundColors" element={<ForegroundColors />} />
                <Route path="/GridLayout" element={<GridLayout />} />
                <Route path="/Margins" element={<Margins />} />
                <Route path="/Padding" element={<Padding />} />
                <Route path="/Positions" element={<Positions />} />
                <Route path="/ReactIcons" element={<ReactIcons />} />
                <Route path="/ReactIcons" element={<ReactIcons />} />
                <Route path="/ScreenSizeLable" element={<ScreenSizeLable />} />
                <Route path="/Zindex" element={<Zindex />} />
                <Route path="/Inbox" element={<h1>Inbox</h1>} />


            </Routes>



        </div>


    )

}


