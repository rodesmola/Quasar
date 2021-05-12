import Home from '@/components/Home'
import Private from '@/components/Private'
import Profile from '@/components/Profile'
import ServiceRequest from '@/components/ServiceRequest'
import LabTest from '@/components/LabTest'

import Tmp from '@/components/temp'

export default[
    { path: '/', component: Home, name:'Home' },
    { path: '/private', 
        component: Private, 
        name: 'Private area',        
        children: [            
            {
                path: 'profile', 
                component: Profile,
                name: 'Profile' 
            },
            {
                path: 'service-request', 
                component: ServiceRequest,
                name: 'Service request' 
            },    
            {
                path: 'lab-test', 
                component: LabTest,
                name: 'Lab test' 
            },
            {
                path: 'tmp', 
                component: Tmp,
                name: 'Temp' 
            },                     
        ]
    },
   // { path: '/profile', component: Profile, name: 'Profile' },
    // { path: '/search', component: Search },
    // { path: '/stories', component: Stories },
    // { path: '/login', component: Login },
    // { path: '/story/:id', name: 'story', component: Story }
]