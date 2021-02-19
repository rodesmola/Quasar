import Home from '@/components/Home'
import Private from '@/components/Private'
import Profile from '@/components/Profile'



export default[
    { path: '/', component: Home },
    { path: '/private', component: Private },
    { path: '/profile', component: Profile },
    // { path: '/search', component: Search },
    // { path: '/stories', component: Stories },
    // { path: '/login', component: Login },
    // { path: '/story/:id', name: 'story', component: Story }
]