import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";

export function AddBook() {
  
 
  const [name, setName] = useState("");
  const [rating, setRating] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <div className="book-form">
        <h1>Form to Add Book</h1>
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
          onClick={() => {
            const newBook = {
                name: name,
                poster: poster,
                rating: rating,
                summary: summary,
                trailer: trailer,
              };

            fetch(`${API}/books`,{
              method: "POST",
              body: JSON.stringify(newBook),
              headers: {
                "Content-Type": "application/json",
              },
            })
            .then((data) => data.json())
            .then(() => navigate("/books"))
            
      

            // const newBook = {
            //   name: name,
            //   poster: poster,
            //   rating: rating,
            //   summary: summary,
            // };
            // setBookList([...bookList, newBook]);
            // navigate("/books");
          }}
        >
          Add Book
        </Button>
      </div>
    </div>
  );
}
