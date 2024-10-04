const AssignmentEditor=()=> {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
                The assignment is available online Submit a link to the landing page of
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value={100} />
                    </td>
                </tr>


                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-assignmentGroup">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-assignmentGroup">
                            <option value="AssignmentGroup" selected>Assignment Group</option>
                            <option value="Group 2">Group 2</option>
                            <option value="Group 3">Group 3</option>
                            {/* Add more options as needed */}
                        </select>
                    </td>
                </tr>


                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-displayGrade">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-displayGrade">
                            <option value="displayGrade" selected>Percentage</option>
                            <option value="Group 2"> 2</option>
                            <option value="Group 3">3</option>
                            {/* Add more options as needed */}
                        </select>
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submitType">Submission TYpe </label>
                    </td>
                    <td>
                        <select id="wd-submitType">
                            <option value="submitType" selected>Online</option>
                            <option value="submitType"> offline</option>

                            {/* Add more options as needed */}
                        </select>
                    </td>
                </tr>



                <tr>
                    <td align="right" valign="top">
                        <label>Online Entry Options</label>
                    </td>
                    <td>
                        <div>
                            <input type="checkbox" id="test-entry" />
                            <label htmlFor="test-entry">Test Entry</label><br />

                            <input type="checkbox" id="website-url" />
                            <label htmlFor="website-url">Website URL</label><br />

                            <input type="checkbox" id="media-recordings" />
                            <label htmlFor="media-recordings">Media Recordings</label><br />

                            <input type="checkbox" id="student-annotation" />
                            <label htmlFor="student-annotation">Student Annotation</label><br />

                            <input type="checkbox" id="file-uploads" />
                            <label htmlFor="file-uploads">File Uploads</label>
                        </div>
                    </td>
                </tr>

                <td align="right" valign="top">
                    <label htmlFor="wd-assign-to">Assign To</label>
                </td>

                <tr>
                    <td>
                        <input id="wd-assign-to" type="text" value="Everyone" />
                    </td>
                </tr>
               
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="date">Due</label>
                    </td>
                </tr>
                <tr>
                    <td>
                        <input id="date" type="date" value="2024-05-13" />
                    </td>
                </tr>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="datefrom">Available from </label>
                    </td>
                    <td>
                        <input id="datefrom" type="date" value="2024-05-06" />
                    </td>


                    <td align="right" valign="top">
                        <label htmlFor="dateuntil">Until </label>
                    </td>
                    <td>
                        <input id="dateuntil" type="date" value="2024-05-20" />
                    </td>
                </tr>


















            </table>
        </div>
    );
}
export default  AssignmentEditor;
