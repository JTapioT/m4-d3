import Alert from "react-bootstrap/Alert"


const WarningSign = (props) => {
  return <Alert variant={"danger"}>{props.alertMessage}</Alert>;
};

export default WarningSign;
