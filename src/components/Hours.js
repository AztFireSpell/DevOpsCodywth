// Placeholder to host a component
import React from 'react';

const Hours = () =>{
    const diaActual = new Date().getDay();
    const horarios = {
        0: "abierto hoy de 9 a.m. a 8 p.m.", // Domingo
        1: "abierto hoy de 10 a.m. a 4 p.m.", // Lunes
        2: "abierto hoy de 10 a.m. a 4 p.m.", // Martes
        3: "abierto hoy de 10 a.m. a 4 p.m.", // Miércoles
        4: "abierto hoy de 10 a.m. a 4 p.m.", // Jueves
        5: "abierto hoy de 10 a.m. a 4 p.m.", // Viernes
        6: "abierto hoy de 9 a.m. a 8 p.m."   // Sábado
    };
    
    const horarioHoy = horarios[diaActual];

    return (
    <div className="wooden-sign">
    <h1> Horario del refugio: <p>{horarioHoy}</p> </h1>
    </div>
    )
}

export default Hours;