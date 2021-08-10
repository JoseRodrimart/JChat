export interface UserLoginRequest {
    username: string;
    password: string;
}

export interface UserLoginResponse {
    nombre: string;
    mail: string;
    imagen: string;
    roles: string[];
    token: string;
}