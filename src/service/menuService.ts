import {platoDTO} from "../interface/platoDTO";

let MENU_DATABASE : platoDTO[] = [
    {
    id: 1,
    nombre: "Hamburguesa Coder",
    descripcion: "Doble carne premium, queso cheddar y salsa secreta de TypeScript.",
    precio: 25000,
    disponible: true,
    categoria: "comida"
    },
    {
        id: 2,
    nombre: "Pizza JavaScript",
    descripcion: "Base delgada con pepperoni, champiñones y un toque de picante.",
    precio: 30000,
    disponible: true,
    categoria: "comida"
    },
    {
        id: 3,
    nombre: "Ensalada Reactiva",
    descripcion: "Fresca mezcla de lechugas, aguacate, tomate y aderezo de limón.",
    disponible: true,
    precio: 18000,
    categoria: "comida"
    }
];


    //metodo GET
    const simulacionRetrasoDeRed= () => new Promise(resolve => setTimeout(resolve, 500));

    export async function obtenerMenu () : Promise<platoDTO[]> {
        await simulacionRetrasoDeRed();
        return [...MENU_DATABASE];
    }

    // metodo POST
    export async function crearPlato(nuevoPlato: Omit<platoDTO, "id">) : Promise<platoDTO> {
        await simulacionRetrasoDeRed();
        const platoConid: platoDTO = {
            ...nuevoPlato,
            id: MENU_DATABASE.length > 0 ? Math.max(...MENU_DATABASE.map(p => p.id)) + 1 : 1
        };
        MENU_DATABASE.push(platoConid);
        return platoConid;
    }

    // metodo PUT
    export async function actualizarPlato(id: number, platoActualizado: Omit<platoDTO, "id">) : Promise<platoDTO> {
        await simulacionRetrasoDeRed();
        const indice = MENU_DATABASE.findIndex(p => p.id === id);
        if ( indice === -1) 
            throw new Error("Plato no encontrado");
        
        MENU_DATABASE[indice] = {...platoActualizado, id};
        return MENU_DATABASE[indice];
    }

    // metodo DELETE
    export async function eliminarplato(id: number ) : Promise<boolean> {
        await simulacionRetrasoDeRed();
        const existe = MENU_DATABASE.some(p => p.id === id);
        if (!existe) return false; 
        MENU_DATABASE = MENU_DATABASE.filter(p => p.id !== id);
        return true;
    }