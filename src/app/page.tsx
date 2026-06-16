"use client";

import { useState, useEffect } from "react";
import { obtenerMenu } from "../service/menuService"; 
import { platoDTO } from "../interface/platoDTO";

export default function Home() {
  //  1. Los Hooks van AQUÍ ADENTRO (Al principio de la función)
  const [platos, setPlatos] = useState<platoDTO[]>([]);
  const [carrito, setCarrito] = useState<number>(0);

  // 2. El useEffect también va aquí adentro
  useEffect(() => {
    const cargarPlatos = async () => {
      try {
        const datos = await obtenerMenu();
        setPlatos(datos); // Guardamos la data real en nuestro estado
      } catch (error) {
        console.error("Error al cargar el menú:", error);
      }
    };

    cargarPlatos();
  }, []);

  //  3. Tus manejadores de eventos (tus "controladores")
  const manejarAgregarAlCarrito = (plato: platoDTO) => {
    setCarrito(carrito + 1);
    console.log(`Plato agregado al carrito: ${plato.nombre} - Precio: $${plato.precio}`);
    alert(`Agregaste ${plato.nombre} al pedido por $${plato.precio.toLocaleString("es-CO")}`);
  };

  //  4. La Vista (El HTML/Tailwind)
  return (
    <main className="p-6 bg-gray-50 min-h-screen text-gray-900">
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h1 className="text-xl font-bold mb-2"> Coder Restaurant</h1>
        <p className="text-sm text-gray-600 mb-4"> Carrito: {carrito} ítems</p>
        
        {/* Renderizamos la lista de platos usando el .map */}
        <div className="space-y-4">
          {platos.map((plato) => (
            <div key={plato.id} className="p-3 border rounded-lg flex justify-between items-center">
              <div>
                <h3 className="font-bold">{plato.nombre}</h3>
                <p className="text-xs text-gray-500">${plato.precio.toLocaleString("es-CO")}</p>
              </div>
              
              <button 
                onClick={() => manejarAgregarAlCarrito(plato)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded text-xs font-semibold transition-colors"
              >
                + Agregar
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}