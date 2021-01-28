export const validateName = (name) => {
    if (!name) {
        return "Campo vacio"
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(name)) {
        return "Direccion de correo no valida, El correo debe tener la siguiente estructura: ***@***.com"
    }
}

export const validatePassword = (password) => {
    if(password.length > 6){
        return "";
    }
     else if(password.length < 5){
        return "Su contraseña/nombre debe tener como minimo 6 caracteres"
    }
    else if(!password || password.length === 0){
        return "Campo vacio"
    }
}