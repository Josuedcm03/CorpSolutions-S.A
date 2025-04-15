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

      //obtener el valor de la cedula sin espacios
      const cedulaVal = cedula.value.trim();

      //expresion regular para validar la cedula
      const regexCedula = /^\d{3}-\d{6}-\d{4}[A-Z]$/;
      //3 digitos, un guion, 6 digitos,
      //un guion, 4 digitos y una letra mayuscula
  
      //validar la cedula
      if (cedulaVal !== "" && !regexCedula.test(cedulaVal)) {
        valido = false;
      }

      if (!valido) return; //si hay campos vacios no se envia el formulario
  
      formulario.reset();
    });
  });