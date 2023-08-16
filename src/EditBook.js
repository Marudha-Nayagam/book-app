import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export function EditBook() {
  const [book, setBook] = useState(null);

  const { bookid } = useParams();

  useEffect(() => {
    fetch(`${API}/books/${bookid}`,{
      method: "GET",
    })
      .then((res) => res.json())
      .then((bk) => setBook(bk));
  }, []);

  return  book ?  <EditBookForm book={book} /> : "Loading....."
}

function EditBookForm({ book }) {
  const [name, setName] = useState(book.name);
  const [rating, setRating] = useState(book.rating);
  const [poster, setPoster] = useState(book.poster);
  const [summary, setSummary] = useState(book.summary);
  const [trailer, setTrailer] = useState(book.trailer);
  const navigate = useNavigate();
  return (
    <div className="book-form">
      <h1>Form to Edit Book</h1>
      <TextField
        required
        id="outlined-required"
        label="Name"
        value={name}
        onChange={(event) => setName(event.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Poster"
        value={poster}
        onChange={(event) => setPoster(event.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Rating"
        value={rating}
        onChange={(event) => setRating(event.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Summary"
        value={summary}
        onChange={(event) => setSummary(event.target.value)}
      />
      <TextField
        required
        id="outlined-required"
        label="Trailer"
        value={trailer}
        onChange={(event) => setTrailer(event.target.value)}
      />
      <Button
        variant="contained"
        color="success"
        onClick={() => {
          const updateBook = {
            name: name,
            poster: poster,
            rating: rating,
            summary: summary,
            trailer: trailer,
          }; 

          fetch(`${API}/books/${book.id}`, {
            method: "PUT",
            body: JSON.stringify(updateBook),
            headers: {
              "Content-Type": "application/json",
            },
          })
            .then((data) => data.json())
            .then(() => navigate("/books"));

        
        }}
      >
        SAVE
      </Button>
    </div>
  );
}
