import { Typography } from "@mui/material";

const BookDetail = ({ book }: any) => {
  const getDescriptionFor = (book: any) => book?.description || book?.name;

  return (
    <div className="detail">
      <h2 className="book-title">{book.name}</h2>
      <Typography
        component="p"
        className="book-description"
        sx={{
          whiteSpace: "nowrap",
          maxWidth: "10ch",
          textOverflow: "ellipsis",
          overflow: "hidden",
        }}
      >
        {getDescriptionFor(book)}
      </Typography>
    </div>
  );
};

export default BookDetail;
