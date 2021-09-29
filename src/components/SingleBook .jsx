import Card from "react-bootstrap/Card"
import React from "react"

class SingleBook extends React.Component {
  
    state = {
        selected : false,
        cardBorder : {}
    }
    
    // Managed to get the cards show border when clicked and also make border disappear when clicking on the card again.
    // I still think that logic is somehow failing, I need to double-click for card to change the border.
  
    render() {
    return (
      <div className="col-3" style={{ padding: "0.3rem", cursor: "pointer"}} onClick={() => {
        this.setState({
          selected: this.state.selected ? false : true,
          cardBorder: this.state.selected ? {border: "2px solid black"} : {},
        });
      }}>
          <Card style={this.state.cardBorder}>
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
