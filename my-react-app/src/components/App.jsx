import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNote] = useState([]);

  function Addnote(note) {
    setNote((prevnote) => {
      return [...prevnote, note];
    });
  }
  function DeleteNode(id) {
    setNote((prevnote) => {
      return prevnote.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <Header />
      <CreateArea add={Addnote} />

      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            ondelete={DeleteNode}
          />
        );
      })}

      <Footer />
    </div>
  );
}
export default App;
