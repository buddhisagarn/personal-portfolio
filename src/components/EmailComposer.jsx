import { useState, useRef } from "react";

const EmailComposer = () => {
  const [content, setContent] = useState("");
  const editorRef = useRef(null);

  const handleInput = () => {
    setContent(editorRef.current.innerText); // or innerHTML if you need HTML
  };

  return (
    <div>
      <div
        ref={editorRef}
        contentEditable
        onInput={handleInput}
        style={{
          border: "1px solid #ccc",
          borderRadius: "8px",
          minHeight: "150px",
          padding: "10px",
          width: "500px",
          outline: "none",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        }}
        placeholder="Compose your email..."
      ></div>

      <p>Typed content:</p>
      <div
        style={{
          border: "1px solid #eee",
          padding: "10px",
          width: "500px",
          minHeight: "50px",
        }}
      >
        {content}
      </div>
    </div>
  );
};

export default EmailComposer;
