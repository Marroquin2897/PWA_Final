import React, {useState} from 'react';
import {Formulario,Label,Terminos,BotonCentrado,Boton,MensajeExito,MensajeError,Titulo, IconoInicio} from './elementos/Formularios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import Input from './componentes/Input';




const App = () => {
  
  const[nombre,cambiarNombre] = useState({campo:'',valido: null});
  const[apellidos,cambiarApellidos] = useState({campo:'',valido: null});
  const[telefono,cambiarTelefono] = useState({campo:'',valido: null});
  const[direccion,cambiarDireccion] = useState({campo:'',valido: null});
  const[boleta,cambiarBoleta] = useState({campo:'',valido: null});
  const[email,cambiarEmail] = useState({campo:'',valido: null});
  const[usuario,cambiarUsuario] = useState({campo:'',valido: null});
  const[password,cambiarPassword] = useState({campo:'',valido: null});
  const[password2,cambiarPassword2] = useState({campo:'',valido: null});
  const[terminos, cambiarTerminos] = useState(false);
  const[formularioValido, cambiarFormularioValido] = useState(null);

  const expresiones = {
    usuario: /^[a-zA-Z0-9_-]{4,16}$/, // Letras, numeros, guion y guion_bajo
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
    password: /^.{4,12}$/, // 4 a 12 digitos.
    correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    telefono: /^\d{7,14}$/ // 7 a 14 numeros.
  }

  const validarPassword2 = () => {
    if(password.campo.length > 0){
      if(password.campo !== password2.campo){
        cambiarPassword2((prevState) => {
          return {...prevState,valido:'false'}
        });
      } else{
        cambiarPassword2((prevState) => {
          return {...prevState,valido:'true'}
        });
      }
    }
  }

  const onChangeTerminos = (e) => {
    cambiarTerminos(e.target.checked);
  }

  const onSubmit = (e) => {
    e.preventDefault();

    if(nombre.valido === 'true' && 
    apellidos.valido === 'true' &&
    telefono.valido === 'true' &&
    direccion.valido === 'true' &&
    boleta.valido === 'true' &&
    email.valido === 'true' &&
    usuario.valido === 'true' &&
    password.valido === 'true' &&
    password2.valido === 'true' &&
    terminos.valido === 'true'
    ){
      cambiarFormularioValido(true);
    } else {
      cambiarFormularioValido(false);
    }
  }
 
 
  return ( 
    <main>
      <IconoInicio icon={faCircleUser}/>
      <Titulo>Crea Tu Cuenta</Titulo>
      <Formulario action="" onSubmit={onSubmit}>
        <Input
          estado={nombre}
          cambiarEstado={cambiarNombre}
          tipo='text'
          label='Nombre (s)'
          placeholder='Ingresa tu nombre (s)'
          name='nombre'
          leyendaError="Ingrese un nombre "
          expresionRegular={expresiones.nombre}
          />
        <Input
          estado={apellidos}
          cambiarEstado={cambiarApellidos}
          tipo='text'
          label='Apellidos'
          placeholder='Ingresa tus apellidos'
          name='apellidos'
          leyendaError="Ingresa apellido paterno y materno "
          expresionRegular={expresiones.nombre}
          />

         <Input
          estado={telefono}
          cambiarEstado={cambiarTelefono}
          tipo='text'
          label='Telefono'
          placeholder='5554565789' 
          name='telefono'
          leyendaError="10 digitos minimo"
          expresionRegular={expresiones.telefono}
          />
        <Input
          estado={direccion}
          cambiarEstado={cambiarDireccion}
          tipo='text'
          label='Direccion'
          placeholder='Calle, No. Ext e Int, Colonia, CP, Alcaldía/Municipio, Ciudad/Estado '
          name='direccion'
          
          expresionRegular={expresiones.nombre}
          />
         <Input
          estado={boleta}
          cambiarEstado={cambiarBoleta}
          tipo='text'
          label='Boleta'
          placeholder='2013140596 / '
          name='boleta'
          leyendaError="Solo se puede numeros "
          expresionRegular={expresiones.telefono}
          />
        <Label>Escuela</Label>
          
          <select>
          <option value='todas' > Selecciona tu escuelita bonita </option>
          <option value='Cics Santo Tomas' > CICS Unidad Santo Tomás </option>
          <option value='Enba' > ENBA </option>
          <option value='Cics Santo Tomas' > ENCB </option>
          <option value='Cics Santo Tomas' > ENMyH </option>
          <option value='Cics Santo Tomas' > ESCA Unidad Santo Tomás </option>
          <option value='Cics Santo Tomas' > ESCA Unidad Tepepan </option>
          <option value='Cics Santo Tomas' > ESCOM </option>
          <option value='Cics Santo Tomas' > ESE </option>
          <option value='Cics Santo Tomas' > ESEO </option>
          <option value='Cics Santo Tomas' > ESFM </option>
          <option value='Cics Santo Tomas' > ESIME Unidad Zacatenco </option>
          <option value='Cics Santo Tomas' > ESIME Unidad Azcapotzalco </option>
          <option value='Cics Santo Tomas' > ESIME Unidad Culhuacán </option>
          <option value='Cics Santo Tomas' > ESIME Unidad Ticomán </option>
          <option value='Cics Santo Tomas' > ESIQIE </option>
          <option value='Cics Santo Tomas' > ESIT </option>
          <option value='Cics Santo Tomas' > ESIA Unidad Tecamachalco </option>
          <option value='Cics Santo Tomas' > ESIA Unidad Ticomán </option>
          <option value='Cics Santo Tomas' > ESIA Unidad Zacatenco </option>
          <option value='Cics Santo Tomas' > ESM </option>
          <option value='Cics Santo Tomas' > EST </option>
          <option value='Cics Santo Tomas' > UPIBI </option>
          <option value='Cics Santo Tomas' > UPIICSA </option>
          <option value='Cics Santo Tomas' > UPIITA </option>
          <option value='Cics Santo Tomas' > UPIEM </option>
          <option value='Cics Santo Tomas' > CET 1 Walter Cross Buchanan </option>
          <option value='Cics Santo Tomas' >CECyT No. 1 Gonzalo Vázquez Vela </option>
          <option value='Cics Santo Tomas' > CECyT No. 2 Miguel Bernard </option>
          <option value='Cics Santo Tomas' > CECyT No. 3 Estanislao Ramírez Ruiz </option>
          <option value='Cics Santo Tomas' > CECyT No. 4 Lázaro Cárdenas </option>
          <option value='Cics Santo Tomas' > CECyT No. 5 Benito Juárez </option>
          <option value='Cics Santo Tomas' > CECyT No. 6 Miguel Othón de Mendizábal </option>
          <option value='Cics Santo Tomas' > CECyT No. 7 Cuauhtémoc </option>
          <option value='Cics Santo Tomas' > CECyT No. 8 Narciso Bassols </option>
          <option value='Cics Santo Tomas' > CECyT No. 9 Juan de Dios Bátiz </option>
          <option value='Cics Santo Tomas' > CECyT No. 10 Carlos Vallejo Márquez </option>
          <option value='Cics Santo Tomas' > CECyT No. 11 Wilfrido Massieu </option>
          <option value='Cics Santo Tomas' > CECyT No. 12 José María Morelos </option>
          <option value='Cics Santo Tomas' > CECyT No. 13 Ricardo Flores Magón </option>
          <option value='Cics Santo Tomas' > CECyT No. 14 Luis Enrique Erro </option>
          <option value='Cics Santo Tomas' > CECyT No. 15 Diódoro Antúnez Echegaray </option>
          <option value='Cics Santo Tomas' > CECyT No. 19 Leona Vicario </option>
        </select>
     
        
        <Input
          estado={email}
          cambiarEstado={cambiarEmail}
          tipo='text'
          label='Email'
          placeholder='correo@gmail.co, '
          name='email'
          leyendaError="El correo solo puede contener letras, numero y puntos "
          expresionRegular={expresiones.correo}
          />
        <Input
          estado={usuario}
          cambiarEstado={cambiarUsuario}
          tipo='text'
          label='Usuario'
          placeholder='mit27'
          name='usuario'
          leyendaError="El usuario tiene que ser de 4 a 16 dígitos y solo puede contener numeros, letras y guion bajo "
          expresionRegular={expresiones.usuario}
          />
        <Input
          estado={password}
          cambiarEstado={cambiarPassword}
          tipo='password'
          label='Contraseña'
          placeholder=''
          name='password'
          leyendaError="La contraseña tiene que ser de 4 a 12 dígitos "
          expresionRegular={expresiones.password}
          />
        <Input
          estado={password2}
          cambiarEstado={cambiarPassword2}
          tipo='password'
          label='Confirmar Contraseña'
          placeholder=''
          name='password2'
          leyendaError="Ambas contraseñas deben ser iguales "
          funcion={validarPassword2}
          />
    
        <Terminos>
          <Label>
            <input 
            type='checkbox' 
            name="terminos" 
            id='terminos' 
            checked={terminos}
            onChange={onChangeTerminos}
            />
            Acepto los Terminos y Condiciones
          </Label>
        </Terminos>
        {formularioValido === false &&<MensajeError>
          <p>
            <FontAwesomeIcon icon={faExclamationTriangle}/>
            <b>Error:</b> Completa correctamente los campos.
          </p>
        </MensajeError>}

        <BotonCentrado>
          <Boton type=""> Registrar </Boton>
         {formularioValido && <MensajeExito> Te has registrado existosamente</MensajeExito>} 
        </BotonCentrado>
      </Formulario>
    </main>
   );
}

export default App;