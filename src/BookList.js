import { API } from "./global";
import { useEffect, useState } from "react";
import { Book } from "./Book";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useNavigate } from "react-router-dom";

export function BookList() {
  const [bookList, setBookList] = useState([]);
  const navigate = useNavigate()

  const getBooks = () => {
    fetch(`${API}/books`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((bks) => setBookList(bks));
  };

  useEffect(() => getBooks(), []);
  return (
    <div className="book-list">
      {bookList.map((bk, index) => (
        <Book
          book={bk}
          id={bk.id}
          key={bk.id}
          deleteIcon={
            <IconButton
              color="error"
              onClick={() => {
                fetch(`${API}/books/${bk.id}`, {
                  method: "DELETE",
                }).then(() => getBooks());
              }}

              // onClick={() => {
              //   let copyBookList = [...bookList]
              //   console.log(copyBookList)
              //   let removedBook = copyBookList.splice(index,1)
              //   console.log("removed", removedBook)
              //   console.log("index", index)
              // }}
            >
              <DeleteIcon />
            </IconButton>
          }
          editButton={
            <IconButton color="secondary"
            onClick={() =>{
              navigate(`/books/edit/${bk.id}`)
            }}
            >
              <EditIcon />
            </IconButton>
          }
        />
      ))}
    </div>
  );
}
