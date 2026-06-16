import {UsuarioDTO} from "./tipos";

export function obtenerusuariosPorid (idBuscado : number) : UsuarioDTO{
    const usuariosSimulados : UsuarioDTO= {
        id: idBuscado,
        nombre: "alejandro",
        correo: "alejandro@example.com",
        estaActivo: true, 
};
return usuariosSimulados;
}

export function cambiarEstadoUsuario(usuario : UsuarioDTO) : UsuarioDTO {
    return{
        ...usuario,
        estaActivo: !usuario.estaActivo
    }
}