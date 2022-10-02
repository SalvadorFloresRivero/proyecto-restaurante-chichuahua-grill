import React from 'react';
import { useState } from 'react';
import { db } from './../firebase';
import { collection, getDocs, addDoc } from 'firebase/firestore/lite';
import swal from 'sweetalert2';

const Contacto = () => {

  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [mensaje, setMensaje] = useState('');
  const [personas, setPersonas] = useState('');
  const [telefono, setTelefono] = useState('');

  /* Obtener información de la DB de Firebase */
  try{
    const getData = async () => {
      const DB = collection(db, "reservaciones");
      const data = await getDocs(DB);
      return data;
    }
    getData();
  } catch(error){
    console.log(error);
  };

  /* Función guardat dato */
  const guardarDato = () => {
    try{
      const datoAGuardar = {nombre, email, mensaje, personas,telefono};
      const DB = collection(db, "reservaciones");
      addDoc(DB, datoAGuardar);
      swal("Mensaje enviado", "Gracias por contactarnos", "sucess");
    } catch(error){
      console.log(error);
    };
  };

  /* Asignación de valores de formularios → useState para que se guarde el valor ingresado en el formulario*/
  const handleNombre = (e) => {
    setNombre(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleMensaje = (e) => {
    setMensaje(e.target.value);
  };
  const handlePersonas = (e) => {
    setMensaje(e.target.value);
  };
  const handleTelefono = (e) => {
    setMensaje(e.target.value);
  };

  /* Función submit */
  const submit = () =>{
    guardarDato();
  };

  return  (
    <div className='cover-contacto'>
      <div className="form-background">
      <form className="cover-form-reservaciones" onSubmit={submit}>
        <div className='form-group'>
          <label htmlFor='nombre'>Nombre completo</label>
          <input type='text' className='form-control' id='nombre' placeholder='Nombre' onChange={handleNombre}/>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Email</label>
          <input type='email' className='form-control' id='email' placeholder='Email' onChange={handleEmail}/>
        </div>
        <div className='form-group'>
          <label htmlFor='mensaje'>Personas</label>
          <input type='number' className='form-control' id='Personas' placeholder='Personas' onChange={handlePersonas}/>
        </div>
        <div className='form-group'>
          <label htmlFor='mensaje'>Teléfono</label>
          <input type='number' className='form-control' id='telefono' placeholder='telefono' onChange={handleTelefono}/>
        </div>
        <div className='form-group'>
          <label htmlFor='mensaje'>Mensaje</label>
          <textarea className='form-control' id='mensaje' rows='3' placeholder='Mensaje' onChange={handleMensaje}></textarea>
        </div>
        <br/>
        <button type='submit' className='btn btn-primary'>Enviar</button>
      </form>
        <div className='contacto-info'>
          <p>Teléfono: (555) 55 55555</p>
          <p>Email: contacto@Chihuahua-grill.com</p>
        </div>
      </div>
    </div>
  )
};

export default Contacto