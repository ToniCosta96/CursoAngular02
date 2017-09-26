
import { Vivienda } from './../clases/vivienda';

export class ViviendasComponent{

  viviendas: Vivienda[] = [
    {
      id:1,
      titulo: "Calle madalena, Catarroja.",
      foto: "http://formenterain.com/wp-content/uploads/2017/04/Casa-Casbah-5-300x300.jpg",
      descripcion: "casa de dos plantas en Catarroja",
      alquiler: true,
      precio: 300,
      numeroHabitaciones: 3,
      telefono: "123456789",
      correo: "casasAlquiler@gmail.com",
    },
    {
      id:1,
      titulo: "Piso en Blasco Ibañez, Massanassa.",
      foto: "http://huetearquitectos.com/wp-content/uploads/2017/06/casa-marbella-300x300.jpg",
      descripcion: "casa en la avenida principal Blasco Ibáñez.",
      alquiler: true,
      precio: 325,
      numeroHabitaciones: 3,
      telefono: "123456789",
      correo: "casasAlquiler@gmail.com",
    },
    {
      id:1,
      titulo: "Piso en Plaza Andana, Massanassa",
      foto: "http://formenterain.com/wp-content/uploads/2017/04/Casa-Casbah-14-300x300.jpg",
      descripcion: "casa estrecha de 3 plantas en plaza Andana enfrente del ayuntamiento.",
      alquiler: false,
      precio: 200000,
      numeroHabitaciones: 4,
      telefono: "314159265",
      correo: "casasAlquiler@gmail.com",
    }
  ]
}
