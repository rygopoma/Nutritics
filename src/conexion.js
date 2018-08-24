// Conexion con la base de datos de firebase
import {initializeApp} from 'firebase';
import firebase from 'firebase';

const app = initializeApp({
  apiKey: "AIzaSyBGHuuQpcj-FqDmZ8Eh_sDOq08o9ile5po",
 authDomain: "nutriticss.firebaseapp.com",
 databaseURL: "https://nutriticss.firebaseio.com",
 projectId: "nutriticss",
 storageBucket: "nutriticss.appspot.com",
 messagingSenderId: "625707988983"
});

export const db = app.database();
export const auth = app.auth();
export const proveedor = new firebase.auth.GoogleAuthProvider();



export const alimentosRef=db.ref('alimentos');
export const alimentoFechaRef=db.ref('alimentoFecha');
export const tipoDeDietaRef=db.ref('tipoDeDieta');
export const alimentoPlatoRef=db.ref('alimentoPlato');
export const platoRef=db.ref('plato');
export const pacientesRef=db.ref('pacientes');
export const pacienteFechaRef=db.ref('pacienteFecha');
export const comensalesRef=db.ref('comensales');
export const comensalFechaRef=db.ref('comensalFecha');
export const pacientePlatoRef=db.ref('pacientePlato');
export const comensalPlatoRef=db.ref('comensalPlato');
export const usuariosRef=db.ref('usuarios');
