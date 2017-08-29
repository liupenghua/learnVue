import Vue from 'vue'
import Router from 'vue-router'
import Mainpart from '@/components/main'
import contentpart from '@/components/content'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      components: {
      	 main: Mainpart
      } 
    },{
    	path:'/topic/:id',
    	name:'contentpart',
    	components:{
    		main:contentpart
    	}
    }
  ]
})
