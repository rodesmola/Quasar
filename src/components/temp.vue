<template>
     <q-page class="flex items-start row"> <!-- flex-center -->

        <div class="col-8 offset-2 q-col-gutter-md q-mt-none">                                                          

            <q-intersection once transition="scale" class="example-item col-12">

                <q-card class="q-ma-sm col-8 offset-2 ">              

                    <q-card-section class="flex-center">
                        <div class="row">

                            <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="col-12 row">    
                                
                                <q-toolbar class="text-secondary">      
                                    <q-toolbar-title>
                                        Contact information
                                    </q-toolbar-title>                    
                                </q-toolbar> 

                                <div class="col-xs-8 q-pa-sm">       
                                    <q-input ref="legal_name" v-model="userCredentials.email" filled dense label="Legal name" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">  
                                            <template v-slot:prepend>
                                                <q-icon name="account_balance" />
                                            </template>                                                                              
                                    </q-input>        
                                </div>   

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="short_name" v-model="userCredentials.password" filled dense label="Short name" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="domain" />
                                            </template>                                          
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="department" v-model="userCredentials.password" filled dense label="Department" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="card_travel" />
                                            </template>                                          
                                    </q-input>            
                                </div> 

                                <div class="col-xs-6 q-pa-sm">  
                                    <q-input ref="web" v-model="userCredentials.password" filled dense label="Web" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="language" />
                                            </template>                                           
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="email" v-model="userCredentials.password" filled dense label="Email" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">
                                            <template v-slot:prepend>
                                                <q-icon name="email" />
                                            </template>                                          
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="phone" v-model="userCredentials.password" filled dense label="Phone" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="call" />
                                            </template>                                         
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="fax" v-model="userCredentials.password" filled dense label="Fax" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="print" />
                                            </template>                                        
                                    </q-input>            
                                </div> 

                                <q-toolbar class="text-secondary">      
                                    <q-toolbar-title>
                                        Contact address of the organization
                                    </q-toolbar-title>                    
                                </q-toolbar>                                

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="country" v-model="userCredentials.password" filled dense label="Country" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="flag" />
                                            </template>                                         
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="town" v-model="userCredentials.password" filled dense label="Town" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="location_city" />
                                            </template>                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="post_code" v-model="userCredentials.password" filled dense label="Post code" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="markunread_mailbox" />
                                            </template>                                        
                                    </q-input>            
                                </div> 

                                <div class="col-xs-8 q-pa-sm">  
                                    <q-input ref="street" v-model="userCredentials.password" filled dense label="Street" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="add_road" />
                                            </template>                                         
                                    </q-input>            
                                </div> 

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="location" v-model="userCredentials.password" filled dense label="Location" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="place" />
                                            </template>                                         
                                    </q-input>            
                                </div>

                                <q-toolbar class="text-secondary">      
                                    <q-toolbar-title>
                                        Invoicing address
                                    </q-toolbar-title>                    
                                </q-toolbar>  

                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="inv_country" v-model="userCredentials.password" filled dense label="Invoice country" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="flag" />
                                            </template>                                         
                                    </q-input>            
                                </div>
                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="inv_town" v-model="userCredentials.password" filled dense label="Invoice town" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="location_city" />
                                            </template>                                         
                                    </q-input>            
                                </div>
                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="inv_postCode" v-model="userCredentials.password" filled dense label="Invoice post code" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="markunread_mailbox" />
                                            </template>                                         
                                    </q-input>            
                                </div>
                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="inv_street" v-model="userCredentials.password" filled dense label="Invoice street" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="add_road" />
                                            </template>                                         
                                    </q-input>            
                                </div>
                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="inv_web" v-model="userCredentials.password" filled dense label="Invoice website" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="language" />
                                            </template>                                         
                                    </q-input>            
                                </div>
                                <div class="col-xs-4 q-pa-sm">  
                                    <q-input ref="inv_vat" v-model="userCredentials.password" filled dense label="VAT number" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="gavel" />
                                            </template>                                         
                                    </q-input>            
                                </div>
                                <div class="col-xs-12 q-pa-sm">  
                                    <q-input ref="inv_desc" v-model="userCredentials.password" type="textarea" filled dense label="Invoice terms" lazy-rules
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                            <template v-slot:prepend>
                                                <q-icon name="article" />
                                            </template>                                         
                                    </q-input>            
                                </div> 
                                <q-toolbar class="text-secondary">      
                                    <q-toolbar-title>
                                        Other information
                                    </q-toolbar-title>                    
                                </q-toolbar>  

       

                                <div class=" q-pa-md q-gutter-sm column col-4">
                                    <q-radio dense v-model="sector" val="transport" label="Transport" />
                                    <q-radio dense v-model="sector" val="spurgears" label="Energy" />
                                    <q-radio dense v-model="sector" val="helicalgears" label="Machinery " />
                                    <q-radio dense v-model="sector" val="spurgears" label="Health " />
                                    <q-radio dense v-model="sector" val="spurgears" label="Customer goods " />
                                </div>
                                <div class=" q-pa-md column  q-gutter-sm col-4">
                                    <q-radio dense v-model="sector" val="spurgears" label="Building and infrastructures " />
                                    <q-radio dense v-model="sector" val="spurgears" label=" Mining " />
                                    <q-radio dense v-model="sector" val="spurgears" label="Agriculture, foresty and fishing" />
                                    <q-radio dense v-model="sector" val="sectorother" label="Other" />
                                    <q-input v-if="sector === 'sectorother'" class="q-ml-lg q-mt-none" ref="sectorother" 
                                        dense v-model="others.sectorother" type="text"  label="Other" lazy-rules 
                                        :rules="[ val => val && val.length > 0 || 'Please type something']">                                       
                                    </q-input>
                                </div>
                                      

                                <div align="right" class=" col-10 q-pa-md q-gutter-xs ">                         
                                    <q-btn color="primary" type="submit" label="Login" />                    
                                </div>

                            </form>                     

                        </div>                        

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
        userProfile: {},
        sector: 'transport',
         others: {
            sectorother: '',
        }
    }),
    created(){
        if(this.$store.state.isLogged){
            this.userProfile = this.$store.state.user;
            console.log(this.$store.state.user)
        }
    }
}
</script>
