import React, { useState } from "react";

export default function Question() {
  const [title, setTitle] = useState("");
  const [points, setPoints] = useState(4);
  const [questionText, setQuestionText] = useState("");
  const [choices, setChoices] = useState([{ id: 1, text: "", correct: false }]);

  const addChoice = () => {
    setChoices([
      ...choices,
      { id: choices.length + 1, text: "", correct: false },
    ]);
  };

  const updateChoice = (id: number, value: string) => {
    setChoices((prev) =>
      prev.map((choice) =>
        choice.id === id ? { ...choice, text: value } : choice
      )
    );
  };

  const markCorrect = (id: number) => {
    setChoices((prev) =>
      prev.map((choice) => ({
        ...choice,
        correct: choice.id === id,
      }))
    );
  };

  const removeChoice = (id: number) => {
    setChoices((prev) => prev.filter((choice) => choice.id !== id));
  };

  const handleSave = () => {
    const payload = {
      title,
      points,
      questionText,
      choices,
    };
    console.log("Saved Question:", payload);
  };

  const handleCancel = () => {
    setTitle("");
    setPoints(4);
    setQuestionText("");
    setChoices([{ id: 1, text: "", correct: false }]);
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

        {/* Question Text (WYSIWYG) */}
        <div style={{ marginBottom: "1.5rem" }}>
          <label htmlFor="questionText" style={{ fontWeight: "bold" }}>Question</label>
          <textarea
            id="questionText"
            style={{ width: "100%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
            rows={3}
            value={questionText}
            onChange={(e) => setQuestionText(e.target.value)}
            placeholder="Enter your question text"
          ></textarea>
        </div>

        {/* Choices Section */}
        <div>
          <label style={{ fontWeight: "bold" }}>Answers</label>
          {choices.map((choice, index) => (
            <div key={choice.id} style={{ display: "flex", alignItems: "center", marginBottom: "10px" }}>
              <input
                type="text"
                style={{ width: "70%", padding: "8px", border: "1px solid #ccc", borderRadius: "4px" }}
                placeholder={`Possible Answer ${index + 1}`}
                value={choice.text}
                onChange={(e) => updateChoice(choice.id, e.target.value)}
              />
              <input
                type="radio"
                name="correctAnswer"
                checked={choice.correct}
                onChange={() => markCorrect(choice.id)}
                style={{ marginLeft: "10px" }}
              />
              <button
                style={{
                  marginLeft: "10px", padding: "5px 10px", border: "none", backgroundColor: "#f44336", color: "white", borderRadius: "4px", cursor: "pointer"
                }}
                onClick={() => removeChoice(choice.id)}
                disabled={choices.length === 1}
              >
                Remove
              </button>
            </div>
          ))}
          <button
            style={{
              display: "block", marginTop: "10px", padding: "8px 15px", border: "none", backgroundColor: "#4caf50", color: "white", borderRadius: "4px", cursor: "pointer"
            }}
            onClick={addChoice}
          >
            + Add Another Answer
          </button>
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
