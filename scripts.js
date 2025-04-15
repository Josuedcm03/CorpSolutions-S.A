document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("registroForm");
  
    function mostrarError(campo, mensaje) {
        campo.classList.add("error"); // agregar clase de error al campo
        // crear un elemento div para mostrar el mensaje de error
        const mensajeError = document.createElement("div");
        mensajeError.classList.add("error-message");
        mensajeError.textContent = mensaje;
        //agregar el mensaje como hijo del campo
        campo.parentElement.appendChild(mensajeError);
      }

      function limpiarErrores() {
        //eliminar todos los mensajes de error existentes
        document.querySelectorAll(".error-message").forEach((el) => el.remove());
        //eliminar la clase de error de los campos
        document.querySelectorAll(".error").forEach((el) => el.classList.remove("error"));
      }

    formulario.addEventListener("submit", function (e) {
      e.preventDefault(); // evitar el envio del formulario por defecto
  
      limpiarErrores();
      
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
            mostrarError(campo, "Este campo es obligatorio");
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
        mostrarError(cedula, "Formato inválido. Ej: 999-999999-9999X");
        valido = false;
      }

      if (!valido) return; //si hay campos vacios no se envia el formulario
  
      formulario.reset();
    });
  }); 