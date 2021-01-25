export const viewPassword = (active, password) => {
    if(!active){
        password.current.type = 'text';
        return true;
    }
    else{
        password.current.type = 'password';
        return false;
    }
}