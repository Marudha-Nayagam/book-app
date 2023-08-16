import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import InfoIcon from "@mui/icons-material/Info";
import { useNavigate } from "react-router-dom";
import Counter from "./Counter";
import DeleteIcon from "@mui/icons-material/Delete";
import { API } from "./global";

export function Book({ book, id, deleteIcon, editButton }) {
  const styles = {
    color: book.rating > 8 ? "green" : "red",
  };

  const [show, setShow] = useState(true);
  const navigate = useNavigate();
  return (
    <div className="book-container">
      <img src={book.poster} alt={book.name} className="book-poster" />
      <div className="book-spec">
        <h2 className="book-name">{book.name} </h2>
        <p className="book-rating" style={styles}>
          {" "}
          ⭐ {book.rating}{" "}
        </p>
      </div>
      <IconButton
        aria-label="delete"
        onClick={() => setShow(!show)}
        color="primary"
      >
        {show ? <ExpandMoreIcon /> : <ExpandLessIcon />}
      </IconButton>
      <IconButton color="primary" onClick={() => navigate("/books/" + id)}>
        <InfoIcon />
      </IconButton>

      {show ? <p className="book-summary">{book.summary} </p> : ""}

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Counter />
        <div>
        {deleteIcon} {editButton}
        </div>

        {/* <IconButton aria-label="delete" color="error" 
        onClick={() => {
         fetch(`${API}/books/${id}`,{
          method: "DELETE",
         })
         .then((data) => data.json())
         .then((bks) => setBookList(bks))
        }}>
          <DeleteIcon />
        </IconButton> */}

      </div>
    </div>
  );
}
