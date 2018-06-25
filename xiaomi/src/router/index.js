import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import CSS1 from '@/components/CSS1'
import Part1 from '@/components/Part1'
import FormValidate from '@/components/FormValidate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/CSS1',
      name: 'CSS1',
      component: CSS1
    },
    {
      path: '/Part1',
      name: 'Part1',
      component: Part1
    },
    {
      path: '/FormValidate',
      name: 'FormValidate',
      component: FormValidate
    }
  ]
})
