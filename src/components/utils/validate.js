export const checkValidData =(email,password,name)=>{
    const isEmailValid  =  /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPassWordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    const validName = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name);
    
    if(!isEmailValid) return "Email ID is not valid";
    if(!isPassWordValid) return "Password is not valid";
    if(!validName) return "Name is not valid";
    
    return null;
}