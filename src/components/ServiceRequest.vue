<template>

    <q-page class="q-gutter-md q-pt-lg q-pb-md row content-start justify-center items-center"> <!-- flex-center -->

        <q-card class="col-10">              
            <q-intersection once transition="scale">
                <q-toolbar class="text-secondary">      
                    <q-toolbar-title>
                     <span style="font-size: 24px"> New Service Request</span>
                    </q-toolbar-title>                    
                </q-toolbar>

                <form @submit.prevent.stop="onSubmit" @reset.prevent.stop="onReset" class="col-12 row">         

                    <div class="col-xs-12 q-pa-md">       
                        <q-input ref="sr_description" filled v-model="serviceRequest.sr_description" label="Brief description of the service request" 
                            type="textarea" lazy-rules :rules="[ val => val && val.length > 0 || 'Please type something']">                                        
                        </q-input>        
                    </div>   

                               
                    <div class="col-xs-12 ">
                        <q-toolbar class="text-secondary">      
                            <q-toolbar-title>
                                Nature of the request service
                            </q-toolbar-title>                    
                        </q-toolbar>
                        <div class=" column q-pa-md q-gutter-sm">                            
                            <q-radio dense v-model="serviceNature" val="dds" label="Data driven services" />
                            <q-radio dense v-model="serviceNature" val="stc" label="Standarised tribological characterisation services (experimental)" />
                            <q-radio dense v-model="serviceNature" val="vw" label="Virtual workrooms and up-scaling services (modelling)" />
                            <q-radio dense v-model="serviceNature" val="cs" label="Complementary services" />
                        </div>
                    </div>                                             

                    <div class="content-start justify-center row col-4" v-if="serviceNature === 'stc'">

                        <div class="col-12  row">
                            <q-toolbar class="text-secondary">      
                                <q-toolbar-title>
                                    Mechanical Components
                                </q-toolbar-title>                    
                            </q-toolbar>
                            <div class=" column q-pa-md q-gutter-sm col-5">
                                <!-- <img src="../assets/service_request/gear.png" spinner-color="white" style="height: 40px; max-width: 50px"/></div> -->
                                <q-radio dense v-model="serviceRequest.sr_mechanicalComponent" val="gears" label="Gears" />
                                <q-radio dense v-model="serviceRequest.sr_mechanicalComponent" val="ballbearing" label="Ball bearing" />
                                <q-radio dense v-model="serviceRequest.sr_mechanicalComponent" val="rollerbearing" label="Roller bearing" />
                                <q-radio dense v-model="serviceRequest.sr_mechanicalComponent" val="plainbearing" label="Plain bearing" />
                                <q-radio dense v-model="serviceRequest.sr_mechanicalComponent" val="pistoncylinderliner" label="Piston-Cylinder liner" />
                            </div>
                            <div class=" column q-pa-md q-gutter-sm col-4">
                                <q-radio dense v-model="serviceRequest.sr_mechanicalComponent" val="camshaftfollowers" label="Camshaft/Followers" />
                                <q-radio dense v-model="serviceRequest.sr_mechanicalComponent" val="seals" label="Seals" />
                                <q-radio dense v-model="serviceRequest.sr_mechanicalComponent" val="surfacefloor" label="Surface/Floor" />
                                <q-radio dense v-model="serviceRequest.sr_mechanicalComponent" val="mcother" label="Other" />

                                <q-input v-if="serviceRequest.sr_mechanicalComponent === 'mcother'" class="q-ml-lg q-mt-none" ref="mcother" 
                                    dense v-model="others.mcother" type="text" label="Other" lazy-rules 
                                    :rules="[ val => val && val.length > 0 || 'Please type something']">                                                                           
                                </q-input>        

                            </div>

                        </div>
                    </div>
                    <div class="content-start justify-center row col-2" v-if="serviceRequest.sr_mechanicalComponent === 'gears' && serviceNature === 'stc'">
                        <div class="col-12 row">
                            <q-toolbar class="text-secondary">      
                                <q-toolbar-title>
                                    Gears
                                </q-toolbar-title>                    
                            </q-toolbar>
                            <div class=" q-pa-md q-gutter-sm column col-12">
                                <q-radio dense v-model="serviceRequest.gears" val="twindisc" label="Twin disc" />
                                <q-radio dense v-model="serviceRequest.gears" val="spurgears" label="Spur gears (FZG)" />
                                <q-radio dense v-model="serviceRequest.gears" val="helicalgears" label="Helical gears" />
                                <q-radio dense v-model="serviceRequest.gears" val="gearsother" label="Other" />
                                <q-input v-if="serviceRequest.gears === 'gearsother'" class="q-ml-lg q-mt-none" ref="gearsother" 
                                    dense v-model="others.gearsother" type="text"  label="Other" lazy-rules 
                                    :rules="[ val => val && val.length > 0 || 'Please type something']">                                       
                                </q-input>
                            </div>
                        </div>
                    </div>   
                    <div class="content-start justify-center row col-4" v-if="serviceNature === 'stc'">

                        <div class="col-12 row">
                            <q-toolbar class="text-secondary">      
                                <q-toolbar-title>
                                    Lubricants
                                </q-toolbar-title>                    
                            </q-toolbar>
                            <div class=" q-pa-md q-gutter-sm column col-5">
                                <q-radio dense v-model="serviceRequest.sr_lubricant" val="mineraloil" label="Mineral oil" />
                                <q-radio dense v-model="serviceRequest.sr_lubricant" val="biolubricant" label="Bio lubricant" />
                                <q-radio dense v-model="serviceRequest.sr_lubricant" val="greases" label="Greases" />
                            </div>
                            <div class="q-pa-md q-gutter-sm column col-4">
                                <q-radio dense v-model="serviceRequest.sr_lubricant" val="syntheticoil" label="Synthetic oil " />
                                <q-radio dense v-model="serviceRequest.sr_lubricant" val="solidlubricant" label="Solid lubricant " />
                                <q-radio dense v-model="serviceRequest.sr_lubricant" val="lubricantother" label="Other" />
                                <q-input v-if="serviceRequest.sr_lubricant === 'lubricantother'" class="q-ml-lg q-mt-none" ref="lubricantother" 
                                    dense v-model="others.lubricantother" type="text" label="Other" lazy-rules 
                                    :rules="[ val => val && val.length > 0 || 'Please type something']">                                       
                                </q-input>    
                            </div>
                        </div>
                    </div>
                    

                    <div align="right" class=" col-12 q-pa-md q-gutter-xs">   
                        <q-separator spaced  />     
                        <q-btn color="secondary" to="/private" flat label="Cancel" />                 
                        <q-btn color="primary" type="submit" label="Submit" />                    
                    </div>

                </form>   
            </q-intersection> 
        </q-card> 

  </q-page>


</template>

<style>
</style>

<script>

export default {
    name: 'Profile',
    data: () => ({   
        serviceRequest: {
            "customer_id": "ATOS",
            "sr_description": '',
            "sr_mechanicalComponent": 'gears',
            "sr_lubricant": 'mineraloil',
            "sr_lubricantProperties": 'none',
            "gears": 'twindisc'
        },      
        serviceNature: 'dds',
        others: {
            mcother: '',
            lubricantother: '',
            gearsother: ''
        }
    }),
    methods: {
        onSubmit(){   
  
            this.$q.notify({
                  icon: 'done',
                  color: 'positive',
                  message: 'Submitted'
                })
          
            this.$refs.sr_description.validate()            

            if (this.$refs.sr_description.hasError) {
                this.sr_description = true
            }
            else {
                // this.$q.notify({
                //   icon: 'done',
                //   color: 'positive',
                //   message: 'Submitted'
                // })
            
                // this.$http.post('http://81.171.6.212/login', this.userCredentials).then(response => {
                //     this.$store.state.kc = response.body;
                //     this.$store.state.user = this.parseJwt(response.body.access_token);
                //     this.$store.state.isLogged =  true;
                //     this.loginDialog = false;
                //     // this.user.family_name = user.family_name;
                //     // this.user.given_name = user.given_name;
                // }, response => {
                //     console.log(response.status)
                // }); 

            }        
        },
        resetOptions(){
            console.log("as")
        }
    },   
    created(){
        this.$eventBus.$emit('is-children');         
    }
}
</script>
