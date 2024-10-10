const  AssignmentEditor=() =>{
    return (
        <div id="wd-assignments-editor" style={{marginLeft:"2%", marginRight:"2%"}}>
        <label htmlFor="wd-name" >Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML"  className="form-control mb-2"/><br /><br />
            <textarea id="wd-description" className="form-control mb-2">
                The assignment is available onlineLinks to an external site.

                Submit a link to the landing page of your Web application running on Netlify.

                The landing page should include the following:

                Your full name and section
                Links to each of the lab assignments
                Link to the Kanbas application
                Links to all relevant source code repositories
                The Kanbas application should include a link to navigate back to the landing page.
            </textarea>
            <br />
         
                 <div className="d-flex">
                    <div    className="w-50 pe-5">
                         <label className="float-end"htmlFor="wd-points" >Points</label>
                    </div>
                    <div>
                        <input id="wd-points" className="form-control mb-2" value={100} />
                    </div>
                </div>
                <br />
                 <div className="d-flex">

                    <div    className="w-50 pe-5">
                         <label className="float-end"htmlFor="wd-group">Assignment Groups</label>
                    </div>
                    <div>
                        <select className="form-control mb-2"id="wd-group">
                            <option value="ASSIGNMENTS">Assignments</option>
                        </select>
                    </div>
                </div>
                <br />
                 <div className="d-flex">

                    <div    className="w-50 pe-5">
                         <label className="float-end"htmlFor="wd-display-grade-as">Display Grade as</label>
                    </div>
                    <div>
                        <select className="form-control mb-2"id="wd-display-grade-as">
                            <option value="PERCENT">Percentage</option>
                        </select>
                    </div>
                </div>
                <br />


                 <div className="d-flex ps-3 pe-3" >
                 <div className="w-50 pe-5">
                         <label className="float-end" htmlFor="wd-submission-type">Submission Type</label>
                    </div>
                    <div className="w-50 border p-3">
                        <select className="form-control mb-2"id="wd-submission-type">
                            <option value="ONLINE">online</option>
                        </select>
                        <br /><br />
                        <text>Online Entry Options</text><br />
                        <input type="checkbox" className="form-check-input" name="check-genre" id="wd-text-entry" />
                         <label className="float-end"htmlFor="wd-chkbox-comedy">Text Entry</label><br />

                        <input type="checkbox" className="form-check-input" name="check-genre" id="wd-website-url" />
                         <label className="float-end"htmlFor="wd-chkbox-drama">Website URL</label><br />

                        <input type="checkbox" className="form-check-input" name="check-genre" id="wd-media-recordings" />
                         <label className="float-end"htmlFor="wd-chkbox-scifi">Media Recordings</label><br />

                        <input type="checkbox" className="form-check-input" name="check-genre" id="wd-student-annotation" />
                         <label className="float-end"htmlFor="wd-chkbox-fantasy">Student Annotation</label>

                        <input type="checkbox" className="form-check-input" name="check-genre" id="wd-file-upload" />
                         <label className="float-end"htmlFor="wd-chkbox-fantasy">File Uploads</label>

                    </div>

                </div>
                <br />
                 <div className="d-flex">

                    <div    className="w-50 pe-5">
                         <label className="float-end"htmlFor="wd-group">Assignment</label>
                    </div>
                    <div>

                        <text>Assign to</text>
                        <br /><input value="Everyone" id="wd-assign-to" />
                        <br /><br />
                        <text>Due</text>
                        <br /><input type="date"
                            id="wd-due-date"
                            value="2024-05-13" /><br /><br />
                        <table> <tbody>
                             <div><div>Available from</div>
                                <div>Until</div>
                            </div>
                             <div>
                                <div><input type="date"
                            id="wd-available-from"
                            value="2024-05-13" /></div>
                            <div><input type="date"
                            id="wd-available-until"
                            value="2024-05-13" /></div>
                            </div>
                        </tbody>
                        </table>
                    </div>
                </div>
                
     
            <hr/>
            
            <button>Cancel</button> <button>Save</button>
        </div>
    );
}

export default AssignmentEditor;
