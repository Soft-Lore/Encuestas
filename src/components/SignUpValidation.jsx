export const validateUsername = username => {
    if (!username) {
        return "Campo vacio"
    }
}

export const validateEmail = email => {
    if (!email) {
        return "*Campo vacio"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
        return "Direccion de correo no valida, El correo debe tener la siguiente estructura: ***@***.com"
    }
}

export const validatePassword = password => {
    if (!password) {
        return "Campo vacio"
    } else if (password.length < 6) {
        return "Debe tener 6 o mas caracteres"
    } else {
        return ""
    }
}