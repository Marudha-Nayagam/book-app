import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { API } from "./global";
import { useFormik } from "formik";
import * as yup from "yup";

const formvalidationSchema = yup.object({
  name: yup.string().required("Why not fill the name?"),
  rating: yup
  .number()
  .max(10,"Too much rating")
  .min(1,"Need a hire rating")
  .required("why not fil the rating?"),
  poster: yup.string().min(4).required("why not fill the poster?"),
  summary: yup.string().min(20,"add more... ")
  .required("why not fill the summary"),
  trailer:yup.string().min(4).required("why not fill the trailer"),
})

export function AddBook() {

  const formik = useFormik({
    initialValues: {
      name: "",
      rating:"",
      poster:"",
      summary: "",
      trailer:"",
    },
    validationSchema: formvalidationSchema,
    onSubmit: (newBook) =>{
     createBook(newBook)
    }
  })
  

  const createBook = (newBook) => {
    
    fetch(`${API}/books`,{
      method: "POST",
      body: JSON.stringify(newBook),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((data) => data.json())
    .then(() => navigate("/books"))
    
    console.log("createBook",newBook)
  }
 
  // const [name, setName] = useState("");
  // const [rating, setRating] = useState("");
  // const [poster, setPoster] = useState("");
  // const [summary, setSummary] = useState("");
  // const [trailer, setTrailer] = useState("");

  const navigate = useNavigate();

  return (
    <div>
      <form className="book-form" onSubmit={formik.handleSubmit}>
        <h1>Form to Add Book</h1>
        <TextField
         
          id="name"
          name="name"
          label="Name"
          value={formik.values.name}
          onChange={formik.handleChange}
          // onChange={(event) => setName(event.target.value)}
          onBlur={formik.handleBlur}
        />
        { formik.touched.name && formik.errors.name ? formik.errors.name : "" }
        <TextField
          
          id="poster"
          name="poster"
          label="Poster"
          value={formik.values.poster}
          // onChange={(event) => setPoster(event.target.value)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        { formik.touched.poster && formik.errors.poster ? formik.errors.poster : "" }
        <TextField
         
          id="rating"
          name="rating"
          label="Rating"
          value={formik.values.rating}
          // onChange={(event) => setRating(event.target.value)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        { formik.touched.rating && formik.errors.rating ? formik.errors.rating : "" }
        <TextField
          
          id="summary"
          name="summary"
          label="Summary"
          value={formik.values.summary}
          // onChange={(event) => setSummary(event.target.value)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        { formik.touched.summary && formik.errors.summary ? formik.errors.summary : "" }
        <TextField
         
          id="trailer"
          name="trailer"
          label="Trailer"
          value={formik.values.trailer}
          // onChange={(event) => setTrailer(event.target.value)}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        { formik.touched.trailer && formik.errors.trailer ? formik.errors.trailer : "" }
        <Button
          variant="contained"
          type="submit"

         
        >
          Add Book
        </Button>
      </form>
    </div>
  );
}
