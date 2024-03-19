const coloresAPI = import.meta.env.VITE_API_COLORES;

const leerColoresAPI = async () => {
  try {
    const respuesta = await fetch(coloresAPI);
    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    console.log(error);
  }
};

const crearColor = async (datos) => {
  try {
    const respuesta = await fetch(coloresAPI, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(datos),
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

const eliminarColor = async (id) => {
  try {
    const respuesta = await fetch(`${coloresAPI}/${id}`, {
      method: "DELETE",
    });

    return respuesta;
  } catch (error) {
    console.log(error);
  }
};

export { leerColoresAPI, crearColor, eliminarColor };
