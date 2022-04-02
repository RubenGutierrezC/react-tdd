import { FC } from "react";

interface BookListProps {
  books: { name: string }[];
}

const BookList: FC<BookListProps> = ({ books }) => {
  return (
    <>
      {books.map(({ name }) => (
        <div className="book-item" key={name}>
          <h2 className="title">{name}</h2>
        </div>
      ))}
    </>
  );
};

export default BookList;
