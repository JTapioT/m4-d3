import Badge from "react-bootstrap/Badge";

const MyBadge = (props) => {
  return (
    <div>
      <h1>
        <Badge  style={{backgroundColor:props.color}}>This is a badge</Badge>
      </h1>
    </div>
  );
};

export default MyBadge;
