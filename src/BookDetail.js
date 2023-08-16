import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { API } from "./global";
import Button from "@mui/material/Button";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export default function BookDetail() {
  const navigate = useNavigate();
  const { bookid } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    fetch(`${API}/books/${bookid}`)
      .then((res) => res.json())
      .then((bk) => setBook(bk));
  }, []);

  return (
    <div>
      <iframe
        width="100%"
        height="500"
        src={book.trailer}
        title={book.name}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
      <div className="book-detail-container">
        <div className="book-spec">
          <h2 className="book-name">{book.name} </h2>
          <p className="book-rating">⭐ {book.rating}</p>
        </div>
        <p className="book-summary">{book.summary} </p>
        <Button
          variant="outlined"
          startIcon={<ArrowBackIosNewIcon />}
          onClick={() => navigate(-1)}
        >
          BACK
        </Button>
      </div>
    </div>
  );
}
