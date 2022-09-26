import React, {useEffect, useState} from 'react'
import {db} from "./../firebase"
import { collection, getDocs } from "firebase/firestore";
import { async } from '@firebase/util';

const TablaReservaciones = () => {

    const [reservaciones, setReservaciones]=useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        const obtenerReservaciones =async () => {
            const reservacionesCollection = collection(db, "reservaciones")
            console.log(reservacionesCollection)
            const reservacionesSnapshot = getDocs(reservacionesCollection)
            const reservacionesLista = (await reservacionesSnapshot).docs.map( doc => doc.data())
            setReservaciones(reservacionesLista)
        }
        obtenerReservaciones()
    },[])
  return (
    <>
    <table>
        <thead>
            <th>Nombre</th>
            <th>Personas</th>
            <th>Email</th>
            <th>Telefono</th>
        </thead>
        <tbody>
            {reservaciones.map((reservacion,index) => (
                <tr key={(index)}>
                    <td>{reservaciones.nombre}</td>
                    <td>{reservaciones.personas}</td>
                    <td>{reservaciones.nombre}</td>
                </tr>
            ))}
        </tbody>
    </table>
    </>
  )
}

export default TablaReservaciones