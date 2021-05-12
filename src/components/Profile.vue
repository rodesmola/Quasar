<template>

    <q-page class="q-gutter-md q-pt-lg q-pb-md row content-strech justify-center"> <!-- flex-center -->

        <q-card class="col-xl-3 col-lg-4 col-md-5 col-xs-11">              
            <q-intersection once transition="scale">
                <q-toolbar class="text-secondary">      
                    <q-toolbar-title>
                        Contact information
                    </q-toolbar-title>
                    <q-btn class="text-primary" flat round dense icon="settings" @click="isDialog = !isDialog"/>
                </q-toolbar>

                <q-card-section>
                    
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="domain" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>                    
                            <q-item-label>given name</q-item-label>
                            <q-item-label caption>long name</q-item-label>
                        </q-item-section>
                    <!-- </q-item> -->
                    
                    <!-- <q-item> -->
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="card_travel" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>                    
                            <q-item-label caption>Department</q-item-label>
                            <q-item-label>Legal</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="email" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Email</q-item-label>
                            <q-item-label><a href="mailto:webmaster@example.com">mail@mail.net</a></q-item-label>
                        </q-item-section>
                    <!-- </q-item> 
                    <q-item> -->
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="language" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Website</q-item-label>
                            <q-item-label><a href="webmaster@example.com">website.net</a></q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="call" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Phone</q-item-label>
                            <q-item-label>325654785</q-item-label>
                        </q-item-section>
                    <!-- </q-item> 
                    <q-item> -->
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="print" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Fax</q-item-label>
                            <q-item-label>325654785</q-item-label>
                        </q-item-section>
                    </q-item>                                                                            

                </q-card-section>
            </q-intersection> 
        </q-card> 
        <!--CONTACT INFORMATION END-->

        <q-card class="col-xl-3 col-lg-4 col-md-5 col-xs-11">            
            <q-intersection once transition="scale">
                <q-toolbar class="text-secondary">      
                    <q-toolbar-title>
                        Contact address of the organization
                    </q-toolbar-title>
                    <q-btn class="text-primary" flat round dense icon="settings" />
                </q-toolbar>

                <q-card-section>
                    
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="flag" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>                    
                            <q-item-label caption>Country</q-item-label>
                            <q-item-label>Spain</q-item-label>
                        </q-item-section>
                    <!-- </q-item>
                    
                    <q-item> -->
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="location_city" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>                    
                            <q-item-label caption>Town</q-item-label>
                            <q-item-label>3c</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="markunread_mailbox" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Post code</q-item-label>
                            <q-item-label>28045</q-item-label>
                        </q-item-section>
                    <!-- </q-item> 
                    <q-item> -->
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="add_road" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Street</q-item-label>
                            <q-item-label>street</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="place" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Location</q-item-label>
                            <q-item-label>location</q-item-label>
                        </q-item-section>
                    </q-item>                                                                       

                </q-card-section>
            </q-intersection> 
        </q-card> 
        <!--CONTACT ORGANIZATION END-->    
         <q-card class="col-xl-3 col-lg-3 col-md-4 col-xs-11">      
            <q-intersection once transition="scale">
                <q-toolbar class="text-secondary">      
                    <q-toolbar-title>
                        Other information
                    </q-toolbar-title>     
                    <q-btn class="text-primary" flat round dense icon="settings" />             
                </q-toolbar>

                <q-card-section>
                    
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="account_balance" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>                    
                            <q-item-label caption>Legal status</q-item-label>
                            <q-item-label>Public body</q-item-label>
                        </q-item-section>
                    </q-item>

                    <q-item> 
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="precision_manufacturing" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>                    
                            <q-item-label caption>Industrial sector</q-item-label>
                            <q-item-label>Building and infrastructures </q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="explore" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>How did you meet us?</q-item-label>
                            <q-item-label>Congress</q-item-label>
                        </q-item-section>
                   </q-item> 
                                                                                                      

                </q-card-section>
            </q-intersection> 
        </q-card> 
        <!--check box--> 
        <q-card class="col-xl-3 col-lg-4 col-md-6 col-xs-11">         
            <q-intersection once transition="scale">
                <q-toolbar class="text-secondary">      
                    <q-toolbar-title>
                        Invoicing address
                    </q-toolbar-title>
                    <q-btn class="text-primary" flat round dense icon="settings" />
                </q-toolbar>

                <q-card-section>
                    
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="flag" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>                    
                            <q-item-label caption>Invoice country</q-item-label>
                            <q-item-label>Andorra</q-item-label>
                        </q-item-section>
                    <!-- </q-item>
                    
                    <q-item> -->
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="location_city" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>                    
                            <q-item-label caption>Invoice town</q-item-label>
                            <q-item-label>3c</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="markunread_mailbox" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Invoice post code</q-item-label>
                            <q-item-label>28045</q-item-label>
                        </q-item-section>
                    <!-- </q-item> 
                    <q-item> -->
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="add_road" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Invoice street</q-item-label>
                            <q-item-label>street</q-item-label>
                        </q-item-section>
                    </q-item>
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="language" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Invoice website</q-item-label>
                            <q-item-label><a href="webmaster@example.com">website.net</a></q-item-label>
                        </q-item-section>
                    <!-- </q-item>                    
                    <q-item> -->
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="gavel" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>VAT number</q-item-label>
                            <q-item-label>574546543</q-item-label>
                        </q-item-section>
                    </q-item>      
                    <q-item>
                        <q-item-section side>
                            <q-avatar>
                                <q-icon name="article" />
                            </q-avatar>
                        </q-item-section>
                        <q-item-section>        
                            <q-item-label caption>Invoice terms</q-item-label>
                            <q-item-label>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor."</q-item-label>
                        </q-item-section>
                    </q-item>                                                                                     

                </q-card-section>
            </q-intersection> 
        </q-card> 
        <!--INVOICE-->  
        
        <q-card class="col-xl-6 col-lg-7 col-md-10 col-xs-11">             
            <q-intersection once transition="scale">
                <q-toolbar class="text-secondary">      
                    <q-toolbar-title>
                        Contact person
                    </q-toolbar-title>
                    
                </q-toolbar>

                <q-card-section>


                    <q-list>

                        <!-- <q-item>
                            <q-item-section avatar top>
                                <q-avatar icon="person" color="primary" text-color="white" />
                            </q-item-section>

                            <q-item-section >
                                <q-item-label>Jonh Doe</q-item-label>
                                <q-item-label caption>Developer</q-item-label>
                            </q-item-section>
                        </q-item> -->
                        <q-item>
                            <q-item-section avatar>
                                <q-avatar>
                                   <q-icon name="person" color="primary" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>        
                                <q-item-label>Jonh Doe</q-item-label>
                                <q-item-label caption>Developer</q-item-label>
                            </q-item-section>                            
                            <q-item-section side>
                                <q-avatar>
                                    <q-icon name="phone" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>        
                                <q-item-label caption>Phone</q-item-label>
                                <q-item-label>245123688</q-item-label>
                            </q-item-section>

                            <q-item-section side>
                                <q-avatar>
                                    <q-icon name="email" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>        
                                <q-item-label caption>Email</q-item-label>
                                <q-item-label><a href="mailto:webmaster@example.com">mail@mail.net</a></q-item-label>
                            </q-item-section>

                            <q-item-section side>
                                <q-avatar>
                                    <q-icon name="print" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>        
                                <q-item-label caption>Fax</q-item-label>
                                <q-item-label>567321</q-item-label>
                            </q-item-section>                          
                                                     
                        </q-item>
                        <q-separator spaced inset />

                        <q-item>
                            <q-item-section avatar>
                                <q-avatar>
                                   <q-icon name="person" color="primary" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>        
                                <q-item-label>Jonh Doe</q-item-label>
                                <q-item-label caption>Developer</q-item-label>
                            </q-item-section>                            
                            <q-item-section side>
                                <q-avatar>
                                    <q-icon name="phone" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>        
                                <q-item-label caption>Phone</q-item-label>
                                <q-item-label>245123688</q-item-label>
                            </q-item-section>

                            <q-item-section side>
                                <q-avatar>
                                    <q-icon name="email" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>        
                                <q-item-label caption>Email</q-item-label>
                                <q-item-label><a href="mailto:webmaster@example.com">mail@mail.net</a></q-item-label>
                            </q-item-section>

                            <q-item-section side>
                                <q-avatar>
                                    <q-icon name="print" />
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>        
                                <q-item-label caption>Fax</q-item-label>
                                <q-item-label>567321</q-item-label>
                            </q-item-section>
                                                     
                        </q-item>
                                       

                    </q-list>                                                                                                

                </q-card-section>
            </q-intersection> 
        </q-card> 
        <!--CONTACT PERSON--> 

        <q-dialog v-model="isDialog" persistent >
            <q-card style="width: 700px; max-width: 80vw;">
                <q-toolbar class="text-white bg-primary">      
                    <q-toolbar-title>
                        Edit contact information
                    </q-toolbar-title>                    
                </q-toolbar>

                <q-card-section >
                                    
                    <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="q-gutter-md q-pa-md row content-start">         
                        <div class="col-xs-7">       
                                <q-input ref="legal_name" v-model="userCredentials.email" dense filled label="Legal name" lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']">   
                                    <template v-slot:prepend>
                                      <q-icon name="account_balance" />
                                    </template>                                     
                                </q-input>        
                            </div>   

                            <div class="col-xs-4">  
                                <q-input ref="short_name" v-model="userCredentials.password" dense filled label="Short name" lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                                    <template v-slot:prepend>
                                      <q-icon name="domain" />
                                    </template>                                      
                                </q-input>            
                            </div> 

                            <div class="col-xs-7">  
                                <q-input ref="department" v-model="userCredentials.password" dense filled label="Department" lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']">                 
                                    <template v-slot:prepend>
                                      <q-icon name="card_travel" />
                                    </template>                                                             
                                </q-input>            
                            </div> 

                            <div class="col-xs-4">  
                                <q-input ref="web" v-model="userCredentials.password" dense filled label="Web" lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']"> 
                                    <template v-slot:prepend>
                                      <q-icon name="language" />
                                    </template>                                                                             
                                </q-input>            
                            </div> 

                            <div class="col-xs-4">  
                                <q-input ref="email" v-model="userCredentials.password" dense filled label="Email" lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']">    
                                    <template v-slot:prepend>
                                      <q-icon name="email" />
                                    </template>                                                                          
                                </q-input>            
                            </div> 

                            <div class="col-xs-4">  
                                <q-input ref="phone" v-model="userCredentials.password" dense filled label="Phone" lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']">    
                                    <template v-slot:prepend>
                                      <q-icon name="call" />
                                    </template>                                                                          
                                </q-input>            
                            </div> 

                            <div class="col-xs-3">  
                                <q-input ref="fax" v-model="userCredentials.password" dense filled label="Fax" lazy-rules
                                    :rules="[ val => val && val.length > 0 || 'Please type something']">  
                                    <template v-slot:prepend>
                                      <q-icon name="print" />
                                    </template>                                                                            
                                </q-input>            
                            </div>

                    </form>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn  label="Save" glossy color="secondary" v-close-popup >
                        <template v-slot:loading>
                            <q-spinner-hourglass class="on-left" />
                                Loading...
                        </template>
                    </q-btn>
                </q-card-actions>
                
            </q-card>
        </q-dialog>

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
        isDialog: false,
    }),
    methods: {
getUserProfile(){

}
    },
    created(){
        if(this.$store.state.isLogged){
            this.userProfile = this.$store.state.user;
            // console.log(this.$store.state.user)
            // console.log("logged")
            //this.getUserProfile(this.$$store.state.kc)
        }
        //console.log(this.$router.currentRoute)
        this.$eventBus.$emit('is-children');  
    }
}
</script>
