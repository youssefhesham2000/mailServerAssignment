import Vue from 'vue'
import Router from 'vue-router'
import email from './components/email'
import compose from './components/compose'

import table from './components/table'
import HelloWorld from './components/HelloWorld'
import Contacts from './components/Contacts'
import EmailModification from'./components/EmailModification'
import folderManipulation from './components/folderManipulation'
Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [

   {
      path: '/table/:name/:userfolder',
      name: 'table',
      component: table,
      props:true
    },
       {
      path: '/try',
      name: 'HelloWorld',
      component: HelloWorld
    },
        {
      path: '/compose',
      name: 'compose',
      component: compose
    },
     {
      path: '/email/:selectedEmail',
      name: 'email',
      component: email,
      props:true
    },
            {
      path: '/contacts',
      name: 'Contacts',
      component: Contacts
    },
               {
      path: '/EmailModification',
      name: 'EmailModification',
      component: EmailModification
    },
       {
      path: '/folders/:name',
      name: 'folderManipulation',
      component: folderManipulation,
      props:true
    }
  ]
})