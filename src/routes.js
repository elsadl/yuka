import Home from './components/Home.vue'
import Category from './components/Category/Category.vue'

export default [
    {path: '/', component: Home},
    {path: '/:cat', component: Category},
]