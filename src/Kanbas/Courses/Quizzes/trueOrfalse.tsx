import React, { useState } from "react";

// Optionally import a WYSIWYG editor library like React Quill (you can replace with any WYSIWYG editor you prefer).
// import ReactQuill from 'react-quill'; 
// import 'react-quill/dist/quill.snow.css'; 

export default function TrueFalseQuestionEditor() {
  // State variables
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(4);
  const [questionText, setQuestionText] = useState("");
  const [isTrue, setIsTrue] = useState(true); // true for "True", false for "False"

  // Handle Save
  const handleSave = () => {
    // Check for validation
    if (!title || points <= 0 || !questionText) {
      alert("Please fill out all required fields.");
      return;
    }

    const payload = {
      title,
      points,
      questionText,
      correctAnswer: isTrue ? "True" : "False",
    };

    console.log("Saved Question:", payload);
    // You can replace the above log with an API call to save the question to a server.
  };

  // Handle Cancel (reset form)
  const handleCancel = () => {
    setTitle("");
    setPoints(4);
    setQuestionText("");
    setIsTrue(true);
  };

  return (
    <div style={{ width: "60%", margin: "0 auto", padding: "20px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
      <div style={{ backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)" }}>
        
        {/* Title */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="title" style={{ fontWeight: "bold" }}>Title</label>
          <input
            type="text"
            id="title"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter question title"
          />
        </div>

        {/* Points */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="points" style={{ fontWeight: "bold" }}>Points</label>
          <input
            type="number"
            id="points"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            placeholder="Enter points"
          />
        </div>

        {/* Question Text (WYSIWYG or Text Area) */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="questionText" style={{ fontWeight: "bold" }}>Question</label>
          {/* Using a simple textarea here for demonstration. */}
          {/* If you want a WYSIWYG editor, replace this with React Quill or any editor of your choice */}
          <textarea
            id="questionText"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            rows={3}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter your question text"
          ></textarea>
        </div>

        {/* Correct Answer Section */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label style={{ fontWeight: "bold" }}>Correct Answer</label>
          <div style={{ display: "flex", gap: "1rem" }}>
            <label>
              <input
                type="radio"
                name="correctAnswer"
                checked={isTrue}
                onChange={() => setIsTrue(true)}
              />
              True
            </label>
            <label>
              <input
                type="radio"
                name="correctAnswer"
                checked={!isTrue}
                onChange={() => setIsTrue(false)}
              />
              False
            </label>
          </div>
        </div>

        {/* Action Buttons */}
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
          <button
            style={{
              padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", backgroundColor: "#4caf50", color: "white"
            }}
            onClick={handleSave}
          >
            Save/Update Question
          </button>
          <button
            style={{
              padding: "10px 20px", border: "none", borderRadius: "4px", cursor: "pointer", backgroundColor: "#ccc"
            }}
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
