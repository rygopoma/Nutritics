import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
import Alimentos from '@/components/Alimentos'
import Pacientes from '@/components/Pacientes'
import Platos from '@/components/Platos'
import TipoDeDieta from '@/components/TipoDeDieta'
import ServiceDieta from '@/ServiceDieta'
import Api from '@/components/Api'
import Comensales from '@/components/importarDatos/Comensales'
import PacientesInternos from '@/components/importarDatos/PacientesInternos'
import Almacen from '@/components/importarDatos/Almacen'
import GestionarMenusPacientes from '@/components/GestionarMenus/PacientesInternos'
import GestionarMenusComensales from '@/components/GestionarMenus/Comensales'
import Usuarios from '@/components/Usuarios'
import firebase from 'firebase'

Vue.use(Router)

// export default new Router({
const router = new Router({
  routes: [
    {
    path:'*',
    redirect:'/'
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/alimentos',
      name: 'Alimentos',
      component: Alimentos,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/pacientes',
      name: 'Pacientes',
      component: Pacientes,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/platos',
      name: 'Platos',
      component: Platos,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/tipoDeDieta',
      name: 'TipoDeDieta',
      component: TipoDeDieta,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/serviceDieta',
      name: 'ServiceDieta',
      component: ServiceDieta,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/api',
      name: 'Api',
      component: Api,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/comensales',
      name: 'Comensales',
      component: Comensales,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/pacientesInternos',
      name: 'PacientesInternos',
      component: PacientesInternos,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/almacen',
      name: 'Almacen',
      component: Almacen,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/gestionarMenusPacientes',
      name: 'GestionarMenusPacientes',
      component: GestionarMenusPacientes,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/gestionarMenusComensales',
      name: 'GestionarMenusComensales',
      component: GestionarMenusComensales,
      meta:{
        autentificadoMeta:true
      }
    },
    {
      path: '/usuarios',
      name: 'Usuarios',
      component: Usuarios,
      meta:{
        autentificadoMeta:true
      }
    }
  ]
})

router.beforeEach((to,from,next)=>{
  let usuario =firebase.auth().currentUser;
  let autorizacion =to.matched.some(record=>record.meta.autentificadoMeta);

  if (autorizacion && !usuario) {
    next('/')
  }else if(!autorizacion&&usuario) {
    next();
  }else {
    next();
  }
})

export default router;
