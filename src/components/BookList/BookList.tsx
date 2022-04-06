import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@mui/material";
import { FC } from "react";
import { Link } from "wouter";

interface BookListProps {
  books?: { name: string; id: number; description?: string }[];
  loading?: boolean;
  error?: boolean;
}

const BookList: FC<BookListProps> = ({ books = [], loading, error }) => {
  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error...</p>;
  }

  return (
    <Box
      data-test="book-list"
      sx={{
        flexGrow: 1,
      }}
    >
      <Grid container spacing={3}>
        {books.map(({ name, description, id }) => (
          <Grid item xs={4} sm={4} className="book-item" key={id}>
            <Card>
              <CardActionArea>
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="h2"
                    className="title"
                    sx={{
                      maxHeight: 30,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {name}
                  </Typography>
                  <Typography
                    gutterBottom
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="description"
                    sx={{
                      maxHeight: 40,
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    {description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Button size="small">
                  <Link href={`/books/${id}`}>View Details</Link>
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default BookList;
