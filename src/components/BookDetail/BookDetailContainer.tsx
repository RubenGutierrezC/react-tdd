import { useRoute } from "wouter";
import BookDetail from "./BookDetail";
import useRemoteService from "../../hooks/useRemoteService";

const BookDetailContainer = () => {
  const [_, params] = useRoute("/books/:id");

  const { data } = useRemoteService(
    `http://localhost:8080/books/${params?.id}`,
    {}
  );

  return <BookDetail book={data} />;
};

export default BookDetailContainer;
