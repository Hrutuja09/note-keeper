import React, { useState } from "react";

function CreateArea(props) {
  const [change, setChange] = useState({
    title: "",
    content: "",
  });

  function HandleClick(event) {
    props.add(change);
    setChange({
      title: "",
      content: "",
    });
    event.preventDefault();
  }
  function handleChange(event) {
    const { name, value } = event.target;

    setChange((prevnote) => {
      return { ...prevnote, [name]: value };
    });
  }
  return (
    <div className="note1">
      <form>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={change.title}
        ></input>
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note"
          value={change.content}
        ></textarea>
        <button onClick={HandleClick}>Add</button>
      </form>
    </div>
  );
}
export default CreateArea;
