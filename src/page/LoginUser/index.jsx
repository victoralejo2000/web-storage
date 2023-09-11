import React, { useState, useRef } from "react";
import {CreateUser} from "/src/api/ApiUser.jsx";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';


const AuthForm = () => {
  const history = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [newUser, setNewUser] = useState({
    ClientName: "",
    ClientLastName: "",
    ClientEmail: "",
    ClientCelular: "",
    ClientDateBirthday: "",
    ClientGenero: "",
    ClientNumDni: "",
    ClientUserName: "",
    ClientPassword: "",
  });

  const form = useRef();


  const handleInputSign = (event) => {
    const {name, value} = event.target;
    console.log(value);
    setNewUser({
      ...newUser, [name]: value,
    });
  };

  const handleSubmit = async (e) => { 
    e.preventDefault();

    const response = await CreateUser(newUser);
    if(response) {
      alert("usuario creado ok")
      history("/login")

      const serviceId = "service_1o8e94m";
      const templateId = "template_mr4ujte";
      const apikey = "pe0Uovw1Rp7NDnQpi";

      emailjs.sendForm(serviceId, templateId, form.current, apikey)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    }
  }
  const toggleAuthMode = () => {
    setIsLogin((prevState) => !prevState);
  };

 
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-4">
          {isLogin ? "Iniciar sesión" : "Registrarse"}
        </h2>
        <form ref={form} onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" >
              Correo electrónico
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              placeholder="correo@example.com"
              name="ClientEmail"
              value={newUser.ClientEmail}
              onChange={handleInputSign}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Contraseña
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              placeholder="********"
              name="ClientPassword"
              value={newUser.ClientPassword}
              onChange={handleInputSign}              
            />
          </div>
          {/* ... (correo electrónico y contraseña) ... */}
          {!isLogin && (
            <>
             <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Nombre
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Tu nombre"
                  name="ClientName"
                  value={newUser.ClientName}
                  onChange={handleInputSign}                 
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apellido Paterno
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Tu apellido paterno"
                  name="ClientLastName"
                  value={newUser.ClientLastName}
                  onChange={handleInputSign}    
                />
              </div>
              {/* <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Apellido Materno
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Tu apellido materno"
                />
              </div> */}
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Tipo de Documento de Identidad
                </label>
                <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="ClientTipoDni"
                  value={newUser.ClientTipoDni}
                  onChange={handleInputSign} 
                >
                  <option value="">Selecciona un tipo</option>
                  <option value="Dni">DNI</option>
                  <option value="Pasaporte">Pasaporte</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Numero de documento de identidad
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  placeholder="Nunero de Doc."
                  name="ClientNumDni"
                  value={newUser.ClientNumDni}
                  onChange={handleInputSign}   
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Número de Celular
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="tel"
                  placeholder="Tu número de celular"
                  name="ClientCelular"
                  value={newUser.ClientCelular}
                  onChange={handleInputSign}                     
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Fecha de Nacimiento
                </label>
                <input
                  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="date"
                  name="ClientDateBirthday"
                  value={newUser.ClientDateBirthday}
                  onChange={handleInputSign}  
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Género
                </label>
                <select className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="ClientGenero"
                  value={newUser.ClientGenero}
                  onChange={handleInputSign} 
                >
                  <option value="">Selecciona un género</option>
                  <option value="Masculino">Masculino</option>
                  <option value="Femenino">Femenino</option>
                  <option value="Otro">Otro</option>
                </select>
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  Aceptar Términos y Condiciones
                </label>
                <input className="mr-2 leading-tight" type="checkbox" />
              </div> 
            </>
          )}

          <div className="flex items-center justify-between">
            <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"


            >
              {isLogin ? "Iniciar sesión" : "Registrarse"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <button
            className="text-blue-500 hover:underline focus:outline-none"
            onClick={toggleAuthMode}
          >
            {isLogin
              ? "¿Necesitas una cuenta? Regístrate"
              : "¿Ya tienes una cuenta? Inicia sesión"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
