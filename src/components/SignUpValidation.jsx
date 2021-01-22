export default function validateInfo(values) {
    let errors = {}

    // username
    if (!values.username.trim()) {
        errors.username = "*Campo vacio"
    }

    //email
    if (!values.email) {
        errors.email = "*Campo vacio"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "*Direccion de correo no valida"
    }

    if (!values.password) {
        errors.password = "*Campo vacio"
    } else if (values.password.length < 6) {
        errors.password = "*Debe tener 6 o mas caracteres"
    }

    if (!values.confPassword) {
        errors.confPassword = "*Campo vacio"
    } else if (values.confPassword !== values.password) {
        errors.confPassword = "*Las contraseñas no coinsiden"
    }

    return errors
}