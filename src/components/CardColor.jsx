import { eliminarColor, leerColoresAPI } from "../helpers/queries.js";
import { Card, Button, Col, Row } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import Swal from "sweetalert2";

const CardColor = ({ color, setColors }) => {
  const borrarColor = () => {
    Swal.fire({
      title: "¿Estás seguro de eliminar el producto?",
      text: "No podrás revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Cancelar",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await eliminarColor(color._id);
        if (respuesta.status === 200) {
          Swal.fire({
            title: "Eliminado",
            text: `Has eliminado el producto: ${color.nombreColor}`,
            icon: "success",
          });
        }

        const listaColors = await leerColoresAPI();
        setColors(listaColors);
      } else {
        Swal.fire({
          title: "Ocurrió un Error",
          text: `El producto ${color.nombreColor} no fue eliminado. Intenta nuevamente.`,
          icon: "error",
        });
      }
    });
  };

  return (
    <Col md={4} lg={3} className="mb-3">
      <Card>
        <div
          className="boxColor w-100"
          style={{ background: color.codigoColor }} // Usar color.codigoColor para el fondo
        ></div>
        <Card.Body className="d-flex justify-content-center">
          <Row className="text-center">
            <Card.Title className="text-uppercase fw-bold ">
              {color.nombreColor}
            </Card.Title>
            <Card.Text>{color.codigoColor}</Card.Text>
            <Button variant="outline-danger" onClick={borrarColor}>
              <XCircle /> Borrar
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardColor;
