import Badge from "react-bootstrap/Badge";

const MyBadge = (props) => {
  return (
    <Badge  style={{backgroundColor:props.color}}>This is a badge</Badge>
  );
};

export default MyBadge;
