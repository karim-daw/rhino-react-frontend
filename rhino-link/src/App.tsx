import React, { useState } from "react";
import "./App.css";

function App() {
  const [sliderValues, setSliderValues] = useState<number[]>([]);
  const [textFields, setTextFields] = useState<string[]>([]);

  const handleSliderChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newValues = [...sliderValues];
      newValues[index] = parseInt(event.target.value, 10);
      setSliderValues(newValues);
    };

  const handleTextFieldChange =
    (index: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
      const newTextFields = [...textFields];
      newTextFields[index] = event.target.value;
      setTextFields(newTextFields);
    };

  const addSlider = () => {
    setSliderValues([...sliderValues, 0]);
  };

  const removeSlider = (index: number) => {
    const newValues = [...sliderValues];
    newValues.splice(index, 1);
    setSliderValues(newValues);
  };

  const addTextField = () => {
    setTextFields([...textFields, ""]);
  };

  const removeTextField = (index: number) => {
    const newValues = [...textFields];
    newValues.splice(index, 1);
    setTextFields(newValues);
  };

  const handleSubmit = () => {
    console.log("Slider Values:", sliderValues);
    console.log("Text Fields:", textFields);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Rhino.Link</h1>

        {sliderValues.map((value, index) => (
          <div key={"slider-" + index}>
            <label>
              Slider {index + 1}: {value}
              <input
                type="range"
                min="0"
                max="100"
                value={value}
                onChange={handleSliderChange(index)}
              />
            </label>
            <button onClick={() => removeSlider(index)}>Remove Slider</button>
          </div>
        ))}

        {textFields.map((value, index) => (
          <div key={"text-" + index}>
            <label>
              Text Field {index + 1}:
              <input
                type="text"
                value={value}
                onChange={handleTextFieldChange(index)}
              />
            </label>
            <button onClick={() => removeTextField(index)}>
              Remove Text Field
            </button>
          </div>
        ))}
        {/* put both buttons side bz side */}
        <div>
          <button onClick={addSlider}>Add Slider</button>
          <button onClick={addTextField}>Add Text Field</button>
        </div>

        <button onClick={handleSubmit}>Submit</button>
      </header>
    </div>
  );
}

export default App;
