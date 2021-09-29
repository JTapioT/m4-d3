import Card from "react-bootstrap/Card"
import React from "react"

class SingleBook extends React.Component {
  
    state = {
        selected : false,
    }
  
  
    render() {
    return (
      <div className="col-3" style={{ padding: "0.3rem" }} onClick={() => {this.setState({selected: true})}}>
        <Card>
          <Card.Img
            className="img-fluid"
            src={this.props.book.img}
            style={{ height: "300px", Maxwidth: "100%" }}
          />
          <Card.Body className="bg-light" style={{ height: "100px"}}>
            <h6>{this.props.book.title}</h6>
          </Card.Body>
        </Card>
      </div>
    );
  }
};

export default SingleBook;
