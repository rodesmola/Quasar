<template>
    <div>
        <router-view></router-view> 

        <q-page v-if="!isChildren" class="q-gutter-md q-pt-lg q-pb-md row content-start justify-center"> <!-- flex-center -->

           
            <q-card class="col-4">
                <q-card-section horizontal>                                
                    <img style="width: 150px" class="col-3" src="../assets/home/img1.png" />
                    <q-card-section>
                        <div class="text-h6 secondary" style="color:#eb8b15; font-weight: bold">My profile</div>
                        In this section the user will be able to complete their profile as well as edit when is needed. The user profile has to be completed to be able to create a service request . 
                    </q-card-section>
                </q-card-section>
                <q-separator />
                <q-card-actions align="right">                       
                    <q-btn color="secondary" to="/private/profile">
                    Edit my profile
                    </q-btn>
                </q-card-actions>
            </q-card>

            <q-card class="col-4">
                <q-card-section horizontal>                                
                    <img style="width: 150px" class="col-3" src="../assets/home/img2.png" />
                    <q-card-section>
                        <div class="text-h6" style="color:#eb8b15; font-weight: bold">Service request</div>
                        Create a new service request, this section provides a form in which the user can specify the service specifications. There are different options for creating a complete request. 
                    </q-card-section>
                </q-card-section>
                <q-separator />
                <q-card-actions align="right">                       
                    <q-btn color="secondary" to="/private/service-request" >
                    Create service request
                    </q-btn>
                </q-card-actions>
            </q-card>

            <q-card class="col-4">
                <q-card-section horizontal>                                
                    <img style="width: 150px" class="col-3" src="../assets/home/img4.png" />
                    <q-card-section>
                        <div class="text-h6" style="color:#eb8b15; font-weight: bold">My services</div>
                        Manage your requests, this section provides all the necessary tools to see, edit and remove all the user reuqest.
                    </q-card-section>
                </q-card-section>
                <q-separator />
                <q-card-actions align="right">                       
                    <q-btn color="secondary" disabled>
                        Manage my services
                    </q-btn>
                </q-card-actions>
            </q-card>

            <q-card class="col-4">
                <q-card-section horizontal>                                
                    <img style="width: 150px" class="col-3" src="../assets/home/img3.png" />
                    <q-card-section>
                        <div class="text-h6" style="color:#eb8b15; font-weight: bold">Lab tests</div>
                        Manage your requests, this section provides all the necessary tools to see, edit and remove all the user reuqest.
                    </q-card-section>
                </q-card-section>
                <q-separator />
                <q-card-actions align="right">                       
                    <q-btn color="secondary" to="/private/lab-test">
                        My Tests
                    </q-btn>
                </q-card-actions>
            </q-card>   


            <q-dialog v-model="loginDialog" persistent >
                <q-card style="width: 700px; max-width: 80vw;">
            
                    <q-card-section class="flex flex-center row">
                        <q-space />
                        <q-btn icon="close" flat round dense to="/"/>
                            <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-sm col-12 row" >         
                                <div class="col-4 offset-4"> 
                                    <img width=200px src="../assets/home/itribomatlogo.svg">              
                                </div>    
                                <div class="col-8 offset-2">       
                                    <q-input ref="email" v-model="userCredentials.email" label="Email" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">
                                        <template v-slot:prepend>
                                            <q-icon name="mail" />
                                        </template>
                                    </q-input>        
                                </div>   
                                <div class="col-8 offset-2">  
                                    <q-input ref="password" v-model="userCredentials.password" type="password" label="Password" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">
                                        <template v-slot:prepend>
                                            <q-icon name="password" />
                                        </template>
                                    </q-input>            
                                </div> 
                                <div align="right" class=" col-10 q-pa-md q-gutter-xs ">                         
                                    <q-btn color="primary" type="submit" label="Login" />                    
                                </div>

                            </form>
                    </q-card-section>
                    
                </q-card>
            </q-dialog>

    </q-page>




    </div>
  
</template>



<script>
//import { Notify } from 'quasar'

export default {
  name: 'Private',
  data: () => ({   
        userCredentials: {
            email: 't1@t1.t1',
            password: 't1'
        },
        loginDialog: true,
        isChildren: false
    }),
    methods: {   

        onSubmit () {
            
            this.$refs.email.validate()
            this.$refs.password.validate()

            if (this.$refs.email.hasError || this.$refs.password.hasError) {
                this.formHasError = true
            }
            else {
                // this.$q.notify({
                //   icon: 'done',
                //   color: 'positive',
                //   message: 'Submitted'
                // })
            
                this.$http.post('http://81.171.6.212/login', this.userCredentials).then(response => {
                    this.$store.state.kc = response.body;
                    this.$store.state.user = this.parseJwt(response.body.access_token);
                    this.$store.state.isLogged =  true;
                    this.loginDialog = false;
                    // this.user.family_name = user.family_name;
                    // this.user.given_name = user.given_name;
                }, response => {
                    console.log(response.status)
                }); 

            }
        },
        logout(){            
            this.$store.state.kc = null;
            this.$store.state.user = null;
            this.$store.state.isLogged = false;
            this.loginDialog = true;
        },
        parseJwt (token) {
            var base64Url = token.split('.')[1];
            var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');

            var jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
                return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
            }).join(''));

            return JSON.parse(jsonPayload);
        },        
    },
    watch:{
        $route (to){ //from
        
            if(to.matched.length == 1){
                this.isChildren = false;    
            }
            // else{
            //     this.isChildren = false;
            // }      
        }
    },
    created(){   
        //console.log(this.$router.currentRoute)    

        if(this.$store.state.isLogged){
            this.loginDialog = false
        }else {
            this.loginDialog = true
        }      
 
        this.$eventBus.$on('is-children', ()  => {
            this.isChildren = true;      
        });

    },
    
};
</script>
<style>
</style>