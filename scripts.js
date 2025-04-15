document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("registroForm");
  
    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // evitar el envio del formulario por defecto
  
      // obtener los valores de los campos del formulario
      const cedula = document.getElementById("cedula");
      const nombres = document.getElementById("nombres");
      const apellidos = document.getElementById("apellidos");
      const departamento = document.getElementById("departamento");
      const motivo = document.getElementById("motivo");
  
      let valido = true;
  
      //recorrer los campos y verificar si están vacios
      [cedula, nombres, apellidos, departamento, motivo].forEach((campo) => {
        if (campo.value.trim() === "") {
          valido = false;
        }
      });
  
      if (!valido) return; //si hay campos vacios no se envia el formulario
  
      formulario.reset();
    });
  });
  