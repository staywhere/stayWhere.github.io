import Vue from 'vue'
import './plugins/axios'
// import Qs from 'qs'
import App from './App.vue'
import router from './router'
import store from './store'
import Cookie from 'vue-cookies'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false
// Vue.prototype.$qs = Qs
Vue.use(ElementUI);
Vue.use(Cookie);

router.beforeEach((to, from, next) => {
  //requireAuth对应上面每个跳转的 meta:{requireAuth:true},
 
  //配置上说明访问该路径时需要检测是否登录状态
 
  if(to.meta.requireAuth) {
    
    // console.log($cookies.get('znmc-operation') == null && !store.state.loginSuccess)
    //sessionStorage可直接使用，无需引入
 
    //在登录页，点击登录按钮后设置sessionStorage.setItem("key","value")
 
    //通过sessionStorage.getItem("account")获取，如果有值则是登录状态,无值则为未登录，自动跳转到登录页
    if(!$cookies.get('znmc-operation')) {
       next('/login');
 
    }else{     
 
      next();
 
     }
 
  }
 
  else{
 
     next();
 
  }
 
 });
 
 

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
