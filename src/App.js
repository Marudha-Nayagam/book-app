import "./App.css";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { Home } from "./Home";
import { BookList } from "./BookList";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import { PageNotFound } from "./PageNotFound";
import { Book } from "./Book";
import BookDetail from "./BookDetail";
import { AddBook } from "./AddBook";
import { EditBook } from "./EditBook";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { API } from "./global";

function App() {
  const [bookList, setBookList] = useState([]);
  useEffect(() => {
    fetch(`${API}/books`).then((res) =>
      res.json().then((bks) => setBookList(bks))
    );
  }, []);
  const navigate = useNavigate();
  const [mode, setMode] = useState("dark");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <AppBar position="static" className="app-bar">
          <Toolbar>
            <Button variant="contained" onClick={() => navigate("/")}>
              HOME
            </Button>

            <Button variant="contained" onClick={() => navigate("/books")}>
              BOOK LIST
            </Button>

            <Button variant="contained" onClick={() => navigate("/books/add")}>
              ADD BOOK
            </Button>

            <Button
              variant="contained"
              sx={{ marginLeft: "auto" }}
              startIcon={
                mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
              }
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "dark" : "light"} MODE
            </Button>
          </Toolbar>
        </AppBar>
        <Routes>
          <Route path="/books" element={<BookList />} />
          <Route path="/books/:bookid" element={<BookDetail />} />
          <Route path="/" element={<Home />} />
          <Route path="/books/add" element={<AddBook />} />
          <Route path="/books/edit/:bookid" element={<EditBook />} />

          <Route path="/404" element={<PageNotFound />} />
          <Route path="/novel" element={<Navigate replace to="/books" />} />
          <Route path="*" element={<Navigate replace to="/404" />} />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
