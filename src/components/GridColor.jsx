import { Row } from "react-bootstrap";
import CardColor from "./CardColor";

const GridColor = ({ colors, deleteColor }) => {
  return (
    <Row className="my-3">
      {colors.map((color, index) => (
        <CardColor key={index} color={color} deleteColor={deleteColor} />
      ))}
    </Row>
  );
};

export default GridColor;
