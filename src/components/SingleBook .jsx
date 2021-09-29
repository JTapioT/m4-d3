import Card from "react-bootstrap/Card"

const SingleBook = (props) => {
  return (
    <div className="col-3" style={{ padding: "0.3rem" }}>
      <Card>
        <Card.Img
          className="img-fluid"
          src={props.book.img}
          style={{ height: "300px", Maxwidth: "100%" }}
        />
        <Card.Body className="bg-light" style={{ height: "100px" }}>
          <h6>{props.book.title}</h6>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SingleBook;
