import { useEffect, useState } from "react";
import { Typography } from "@mui/material";
import BookList from "./components/BookList";
import axios from "axios";

function App() {
  const [books, setBooks] = useState<{ name: string }[]>([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get("http://localhost:8080/books");
      setBooks(res.data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <BookList books={books} />
    </div>
  );
}

export default App;
