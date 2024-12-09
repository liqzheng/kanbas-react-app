import React, { useState } from "react";

export default function FillInTheBlankEditor() {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(4);
  const [questionText, setQuestionText] = useState("");
  const [blanks, setBlanks] = useState([{ id: 1, text: "" }]); // List of possible correct answers for the blank

  // Add a new blank (correct answer option)
  const addBlank = () => {
    setBlanks([
      ...blanks,
      { id: blanks.length + 1, text: "" },
    ]);
  };

  // Update the text of a specific blank
  const updateBlank = (id: number, value: string) => {
    setBlanks((prevBlanks) =>
      prevBlanks.map((blank) =>
        blank.id === id ? { ...blank, text: value } : blank
      )
    );
  };

  // Remove a blank (answer option)
  const removeBlank = (id: number) => {
    setBlanks((prevBlanks) => prevBlanks.filter((blank) => blank.id !== id));
  };

  // Handle save action
  const handleSave = () => {
    const payload = {
      title,
      points,
      questionText,
      blanks, // List of correct answers for the blank
    };
    console.log("Saved Question:", payload);
  };

  // Handle cancel action (reset the editor)
  const handleCancel = () => {
    setTitle("");
    setPoints(4);
    setQuestionText("");
    setBlanks([{ id: 1, text: "" }]);
  };

  return (
    <div
      style={{
        width: "60%",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "8px",
      }}
    >
      <div
        style={{
          backgroundColor: "#fff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        {/* Title Input */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="title" style={{ fontWeight: "bold" }}>
            Title
          </label>
          <input
            type="text"
            id="title"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter question title"
          />
        </div>

        {/* Points Input */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="points" style={{ fontWeight: "bold" }}>
            Points
          </label>
          <input
            type="number"
            id="points"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            value={points}
            onChange={(e) => setPoints(Number(e.target.value))}
            placeholder="Enter points"
          />
        </div>

        {/* Question Text (WYSIWYG) */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="questionText" style={{ fontWeight: "bold" }}>
            Question
          </label>
          <textarea
            id="questionText"
            style={{
              width: "100%",
              padding: "8px",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            rows={3}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter your question text"
          ></textarea>
        </div>

        {/* Blanks Section */}
        <div>
          <label style={{ fontWeight: "bold" }}>Possible Correct Answers</label>
          {blanks.map((blank, index) => (
            <div
              key={blank.id}
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <input
                type="text"
                style={{
                  width: "70%",
                  padding: "8px",
                  border: "1px solid #ccc",
                  borderRadius: "4px",
                }}
                placeholder={`Correct Answer ${index + 1}`}
                value={blank.text}
                onChange={(e) => updateBlank(blank.id, e.target.value)}
              />
              <button
                style={{
                  marginLeft: "10px",
                  padding: "5px 10px",
                  border: "none",
                  backgroundColor: "#f44336",
                  color: "white",
                  borderRadius: "4px",
                  cursor: "pointer",
                }}
                onClick={() => removeBlank(blank.id)}
                disabled={blanks.length === 1}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            style={{
              display: "block",
              marginTop: "10px",
              padding: "8px 15px",
              border: "none",
              backgroundColor: "#4caf50",
              color: "white",
              borderRadius: "4px",
              cursor: "pointer",
            }}
            onClick={addBlank}
          >
            + Add Another Correct Answer
          </button>
        </div>

        {/* Action Buttons */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: "#4caf50",
              color: "white",
            }}
            onClick={handleSave}
          >
            Save/Update Question
          </button>
          <button
            style={{
              padding: "10px 20px",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              backgroundColor: "#ccc",
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
