<template>
     <q-page class="flex items-start row"> <!-- flex-center -->

        <div class="col-4 q-col-gutter-md q-mt-none">                                                          

            <q-intersection once transition="scale" class="example-item col-12">

                <q-card class="q-ma-sm col-8 ">              

                    <q-card-section >
                        

    <q-item>
        <q-item-section side>
           <q-avatar>
                <q-icon name="domain" />
            </q-avatar>
        </q-item-section>
        <q-item-section>                    
            <q-item-label>{{userProfile.short_name}}</q-item-label>
            <q-item-label caption>{{userProfile.legal_name}}</q-item-label>
        </q-item-section>
    </q-item>
    <q-item>
        <q-item-section side>
           <q-avatar>
                <q-icon name="domain" />
            </q-avatar>
        </q-item-section>
        <q-item-section>        
            <q-item-label caption>2 new messages</q-item-label>
            <q-item-label>Mary</q-item-label>
        </q-item-section>
    </q-item> 

                            <!-- <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="col-12 row">         

                                <div class="col-xs-8 q-pa-sm">       
                                    <q-input ref="legal_name" v-model="userCredentials.email" label="Legal name" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>        
                                </div>   

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="short_name" v-model="userCredentials.password" label="Short name" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="department" v-model="userCredentials.password" label="Department" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-6 q-pa-sm">  
                                    <q-input ref="web" v-model="userCredentials.password" label="Web" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="email" v-model="userCredentials.password" label="Email" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="phone" v-model="userCredentials.password" label="Phone" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="fax" v-model="userCredentials.password" label="Fax" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="country" v-model="userCredentials.password" label="Country" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="town" v-model="userCredentials.password" label="Town" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="post_code" v-model="userCredentials.password" label="Post code" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-8 q-pa-sm">  
                                    <q-input ref="street" v-model="userCredentials.password" label="Street" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="location" v-model="userCredentials.password" label="Location" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div>



                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="cp_first_name" v-model="userCredentials.password" label="First name" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div>

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="cp_last_name" v-model="userCredentials.password" label="Last name" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div>

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="cp_position" v-model="userCredentials.password" label="Position" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div>

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="cp_phone" v-model="userCredentials.password" label="Phone" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div>

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="cp_email" v-model="userCredentials.password" label="Email" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div>                    

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="cp_fax" v-model="userCredentials.password" label="Fax" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    </q-input>            
                                </div>                    

                                <div align="right" class=" col-10 q-pa-md q-gutter-xs ">                         
                                    <q-btn color="primary" type="submit" label="Login" />                    
                                </div>

                            </form>                      -->

                                      

                    </q-card-section>
                </q-card>
                
            </q-intersection>



        </div>

        
                    

  </q-page>



</template>

<style>
</style>

<script>
export default {
  name: 'Profile',
  data: () => ({   
        userCredentials: {
            email: '',
            password: ''
        },
        userProfile: {}
    }),
    methods: {
getUserProfile(){

}
    },
    created(){
        if(this.$store.state.isLogged){
            this.userProfile = this.$store.state.user;
            console.log(this.$store.state.user)
            //this.getUserProfile(this.$$store.state.kc)
        }
    }
}
</script>
