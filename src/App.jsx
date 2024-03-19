import { Container } from "react-bootstrap";
import ColorForm from "./components/ColorForm";

function App() {
  return (
    <>
      <Container className="my-5 mainPage">
        <ColorForm></ColorForm>
      </Container>

      <footer className="bg-dark text-light text-center fw-bold py-4">
        Juan Diego Quintana &copy; Todos los derechos reservados
      </footer>
    </>
  );
}

export default App;
