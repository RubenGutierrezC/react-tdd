import BookList from "./BookList";
import useRemoteService from "../../hooks/useRemoteService";
import { useState, useEffect, ChangeEvent } from "react";
import SearchBox from "../Searchbox/SearchBox";

const BookListContainer = () => {
  const [term, setTerm] = useState("");

  const { data, loading, error, setUrl } = useRemoteService(
    "http://localhost:8080/books",
    []
  );

  useEffect(() => {
    setUrl(`http://localhost:8080/books?q=${term}`);
  }, [term]);

  const onSearch = (e: ChangeEvent<HTMLInputElement>) =>
    setTerm(e.target.value);

  return (
    <>
      <SearchBox term={term} onSearch={onSearch} />

      <BookList books={data} loading={loading} error={error} />
    </>
  );
};

export default BookListContainer;
