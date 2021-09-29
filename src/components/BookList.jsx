import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import SingleBook from "./SingleBook ";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class BookList extends React.Component {
  state = {
    searchValue: '',
    books: this.props.books
  };

  filterBooks(searchValue) {
    let filteredBooks = this.props.books.filter(book => book.title.toLowerCase().includes(searchValue.toLowerCase()))
    console.log(filteredBooks)
    return filteredBooks;
  }
  

  render() {
    return (
      <Container>
        <div>
            <Form
              onSubmit={(event) => {
                event.preventDefault();
                this.setState({
                    searchValue: this.state.searchValue,
                    books: this.filterBooks(this.state.searchValue),
                  });
              }}
            >
              <Form.Group>
                <Form.Label>Search book by title</Form.Label>
                <Form.Control
                  onChange={(event) => {
                    this.setState({
                        searchValue : event.target.value,
                        ...this.state.books,
                    })
                  }}
                  value={this.state.searchValue}
                  type="text"
                  placeholder="Search by book title"
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Search
              </Button>
            </Form>
        </div>

        <Row>
          {this.state.books.map((book) => {
            return <SingleBook book={book} />;
          })}
        </Row>
      </Container>
    );
  }
}

export default BookList;
