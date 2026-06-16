// En TS usamos "export" para que este archivo pueda ser importado en otro lado (como "public")
export interface UsuarioDTO {
  id: number;          // En Java: Long o int
  nombre: string;      // En Java: String
  correo: string;
  estaActivo: boolean; // En Java: boolean
  rol?: string;        // El signo "?" significa que este campo es OPCIONAL (puede ser null/undefined)
}