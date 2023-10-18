import React, { useState } from 'react'
import './Previewer.css'
export default function Preview() {
    const [inputText, setInputText] = useState('');
  const [previewText, setPreviewText] = useState('');

  const handleInputChange = (e) => {
    const text = e.target.value;
    setInputText(text);
    setPreviewText(removeSpecialCharacters(text));
  };

  const removeSpecialCharacters = (text) => {
    return text.replace(/[^a-zA-Z0-9\s]/g, ''); // Remove special characters
  };
  return <>
  <div className="markdown-previewer">
      <div className="input-container">
        <h2>Markdown Input</h2>
        <textarea
          value={inputText}
          onChange={handleInputChange}
          placeholder="Enter your text..."
        />
      </div>
      <div className="preview-container">
        <h2>Preview</h2>
        <div className="preview" dangerouslySetInnerHTML={{ __html: previewText }} />
      </div>
    </div>
  </>
}
