import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false
Vue.prototype.$ret = function(){
	uni.navigateBack({
		delta:1
	})
}
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
