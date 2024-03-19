import { Form, Button, Card, Container, Row, Col } from "react-bootstrap";
import { leerColoresAPI, crearColor } from "../helpers/queries";
import { useEffect, useState } from "react";
import { PlusCircle } from "react-bootstrap-icons";
import CardColor from "./CardColor";

const ColorForm = () => {
  const [colors, setColors] = useState([]);
  const [color, setColor] = useState({ nombreColor: "", codigoColor: "#000" });

  const consultarColores = async () => {
    try {
      const resultado = await leerColoresAPI();
      setColors(resultado);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    consultarColores();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearColor(color);
      const listaColors = await leerColoresAPI();
      setColors(listaColors);
      setColor({ nombreColor: "", codigoColor: "#000" });
    } catch (error) {
      console.error("Error al agregar el color:", error);
    }
  };

  return (
    <div>
      <Card border="info">
        <Card.Header className="fw-bold">Paleta de colores 🎨​</Card.Header>
        <Card.Body>

            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3 d-sm-flex justify-content-between ">
                <div className="row">
                  <Form.Label>Nombre del color: </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Ej: Azul"
                    className="mx-2"
                    onChange={(e) =>
                      setColor({ ...color, nombreColor: e.target.value })
                    }
                    value={color.nombreColor}
                    required
                  />
                  <Form.Label>Código del color: </Form.Label>
                  <Form.Control
                    type="color"
                    placeholder="Ej: #577A89"
                    className="mx-2"
                    onChange={(e) =>
                      setColor({ ...color, codigoColor: e.target.value })
                    }
                    value={color.codigoColor}
                  />
                </div>

                <Button variant="primary" type="submit">
                  <PlusCircle /> Agregar
                </Button>
              </Form.Group>
            </Form>
        </Card.Body>
      </Card>

      <Container>
        <hr />

        <Row className="mb-4 mt-5 ms-4">
          {colors && colors.length > 0 ? (
            colors.map((color) => (
              <CardColor key={color.id} color={color} setColors={setColors} />
            ))
          ) : (
            <p className="text-center fw-bold">No hay Colores Guardados</p>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default ColorForm;
