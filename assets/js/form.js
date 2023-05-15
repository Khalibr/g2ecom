

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

// ========== EXPRESIONES REGULARES ========== //
const expresiones = {
    usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

// ========== INICIALIZAR CAMPOS !ISEMPTY ========== //
const fields = [
    usuario = false,
    nombre = false,
    password = false,
    correo = false,
    telefono = false
]

// ========== VALIDACION DE FORMULARIO ========== //
const validatorForm = (e) => {
    switch (e.target.name){
        case "name":
            validatorField(expresiones.nombre, e.target, 'name')
        break;
        case "subject":
            validatorField(expresiones.nombre , e.target, 'subject')
        break;
        case "email":
            validatorField(expresiones.correo, e.target, 'email')
        break;
        case "phone":
            validatorField(expresiones.telefono, e.target, 'phone')
        break;
    }
}

// ========== VALIDACION DE CAMPOS ========== //
const validatorField = (expresion, input, field) => {
    if(expresion.test(input.value)){
        document.getElementById(`group__${field}`).classList.remove('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.add('form__group-correct');
        
        document.querySelector(`#group__${field} i`).classList.add('fa-check-circle');
        document.querySelector(`#group__${field} i`).classList.remove('fa-times-circle');

        document.querySelector(`#group__${field} .form__input-error`).classList.remove('form__input-error-active');

        fields[field] = true;
    } else {
        document.getElementById(`group__${field}`).classList.add('form__group-incorrect');
        document.getElementById(`group__${field}`).classList.remove('form__group-correct');
        
        document.querySelector(`#group__${field} i`).classList.add('fa-times-circle');
        document.querySelector(`#group__${field} i`).classList.remove('fa-check-circle');

        document.querySelector(`#group__${field} .form__input-error`).classList.add('form__input-error-active');
    }
}

// ========== EVENTOS ESCUCHA ========== //
inputs.forEach((input) => {
    input.addEventListener('keyup', validatorForm);
    input.addEventListener('blur', validatorForm);
});

// ========== LOGICA BOOLEANA ========== //
form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (fields.name && fields.subject && fields.email && fields.phone){
        
        form.reset();

        document.getElementById('form__msn-submitted').classList.add('form__msn-submitted-active');
            setTimeout(()=> {
            document.getElementById('form__msn-submitted').classList.remove('form__msn-submitted-active');
        }, 3000);

        document.querySelectorAll('.form__group-correct').forEach((icono) => {
            icono.classList.remove('form__group-correct');
        });
    } else {
        document.getElementById('form__msn').classList.add('form__msn-active');
    }
});


