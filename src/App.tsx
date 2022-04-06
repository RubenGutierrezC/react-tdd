import { Typography } from "@mui/material";
import { Route } from "wouter";
import BookListContainer from "./components/BookList/BookListContainer";
import BookDetailContainer from "./components/BookDetail/BookDetailContainer";

function App() {
  return (
    <>
      <Typography variant="h2" component="h2" data-test="heading">
        Bookish
      </Typography>
      <Route path="/" component={BookListContainer} />
      <Route path="/books/:id" component={BookDetailContainer} />
    </>
  );
}

export default App;
