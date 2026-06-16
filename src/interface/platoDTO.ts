export interface platoDTO {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    categoria : "comida" | "bebida" | "postre"; // Esto es un "union type", el valor de categoria solo puede ser uno de esos tres strings
    disponible: boolean;
}