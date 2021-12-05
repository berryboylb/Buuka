import React from "react";
function MyComponent() {
    let initialState = Array.from({ length: 8 }).map((_, idx) => {
      return { id: idx + 1, clicked: false };
    });
    const [buttons, setButtons] = React.useState(initialState);
    console.log(buttons);
  
    function handleButtonClick(buttonId) {
      const nextState = buttons.map(button => {
        if (button.id !== buttonId) {
          return button;
        }
        return { ...button, clicked: !button.clicked };
      });
      setButtons(nextState);
    }
  
    return (
      <div>
        {buttons.map(button => (
          <button
            key={button.id}
            type="button"
            onClick={() => handleButtonClick(button.id)}
          >
            {button.clicked ? "Clicked" : "Not clicked"}
          </button>
        ))}
      </div>
    );
  }

  export default MyComponent