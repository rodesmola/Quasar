<template>

    <q-page class="q-gutter-md q-pt-lg q-pb-md row content-start justify-center items-center"> <!-- flex-center -->

        <q-card class="col-10 row">              
            <!-- <q-intersection once transition="scale" class="col-12 row"> -->


            <q-stepper v-model="step" ref="stepper" animated active-color="#eb8b15" class="col-12">

                <q-step :name="1" prefix="1" title="Test"> 
                  
                    <q-toolbar class="text-secondary">      
                        <q-toolbar-title>
                            Test type
                        </q-toolbar-title>                    
                    </q-toolbar>
                    <div class="row q-pa-md">
                        <div class="col-xs-6 row q-pa-sm">
                            <div class="col-xs-12 q-mb-md">
                                <q-input filled v-model="step1Data.testId" dense disable label="Test ID" />
                            </div>  
                            <div class="col-xs-12 q-mb-md">
                                <q-input filled v-model="step1Data.status" dense disable label="Status" />
                            </div> 
                            <div class="col-xs-12">
                                <q-input filled v-model="step1Data.dueDate" dense label="Due date" />
                            </div>                      
                        </div>
                        
                        <div class="col-xs-6 q-pa-sm">
                            <div class="col-xs-12 q-mb-md">
                                <q-select filled v-model="step1Data.st1Opt1Selected" dense :options="step1Data.opt1" label="Tribometer to use" />
                            </div> 
                            <div class="col-xs-12 q-mb-md">
                                <q-select filled v-model="step1Data.st1Opt2Selected" dense :options="step1Data.opt2" label="Tribometer conf" />
                            </div>
                            <div class="col-xs-12">
                                <q-select filled v-model="step1Data.st1Opt3Selected" dense :options="step1Data.opt3" label="Asigned operator" />
                            </div> 
                        </div>

                        <div class="col-xs-12 q-pa-sm">
                            <div class="col-xs-12">
                                <q-input filled v-model="step1Data.description" type="textarea" label="Description" />
                            </div> 
                        </div>
                    </div>

                </q-step>
                <q-step :name="2" prefix="2" title="Samples">
                    <q-toolbar class="text-secondary">      
                        <q-toolbar-title>
                            Samples
                        </q-toolbar-title>                    
                    </q-toolbar>
                    <div class="row q-pa-md">     
                        
                        <div class="col-xs-6 q-pa-sm">
                            <div class="col-xs-12 q-mb-md">
                                <q-select filled v-model="step2Data.st2Opt1Selected" dense :options="step2Data.opt1" label="Sample to use" />
                            </div> 
                            <div class="col-xs-12 q-mb-md">
                                <q-select filled v-model="step2Data.st2Opt2Selected" dense :options="step2Data.opt2" label="Counterbody to use" />
                            </div>
                            <div class="col-xs-12">
                                <q-select filled v-model="step2Data.st2Opt3Selected" dense :options="step2Data.opt3" label="Interbody to use" />
                            </div> 
                        </div>
                        <div class="col-xs-6 q-pa-sm">
                            <div class="col-xs-12 q-mb-md">
                                <q-select filled v-model="step2Data.st2Opt4Selected" dense v-if="step2Data.st2Opt1Selected === 'Choose existing one'" 
                                :options="step1Data.opt4" label="Sample" />
                            </div> 
                            <div class="col-xs-12 q-mb-md">
                                <q-select filled v-model="step2Data.st2Opt5Selected" dense v-if="step2Data.st2Opt2Selected === 'Choose existing one'" 
                                :options="step1Data.opt5" label="Counterbody" />
                            </div>
                            <div class="col-xs-12">
                                <q-select filled v-model="step2Data.st2Opt6Selected" dense v-if="step2Data.st2Opt3Selected === 'Choose existing one'"
                                :options="step1Data.opt6" label="Interbody" />
                            </div> 
                        </div>
                        
                    </div>
                </q-step>
                <q-step :name="3" prefix="3" title="Steps">
                    <q-toolbar class="text-secondary">      
                        <q-toolbar-title>
                            Steps
                        </q-toolbar-title>                    
                    </q-toolbar>
                    <div class="row q-pa-md">     
                        
                        <div class="col-xs-6 q-pa-sm">
                            <div class="col-xs-12 q-mb-md">
                                <q-select filled v-model="step3Data.st3Opt1Selected" dense :options="step3Data.opt1" label="Add configuration" />
                            </div> 
                
                        </div>
                        <div class="col-xs-6 q-pa-sm ">
                            <div class="col-xs-12 q-mb-md ">
                                <q-btn color="primary" icon="add" outline dense class="full-width q-mt-sm" label="Add empty step" />
                            </div> 
    
                        </div>

                        <!-- <div class="col-xs-12 q-pa-sm" v-if="step3Data.st3Opt1Selected"> -->
                        <div class="col-xs-12 q-pa-sm">
                            <q-card>
                                <q-tabs dense align="left" v-model="tab" inline-label class="bg-primary text-white shadow-2">
                                    <q-tab name="first" label="1" />
                                    <q-tab v-for="index in 6" :key="index" :name="index+1"  :label="index+1" />
                                <!-- <q-tab name="add" icon="add" label="" /> -->
                                </q-tabs>
                                <q-separator />   
                                <q-tab-panels v-model="tab" animated>
                                    <q-tab-panel name="first">
                                    
                                        <div class="row q-pa-md">

                                            <div class="col-xs-12 q-pa-sm">
                                                <div class="col-xs-12">
                                                    <q-input filled v-model="step3Data.description" dense type="textarea" label="Description" />
                                                </div> 
                                            </div>
                                            <div class="col-xs-6 q-pa-sm">
                                                <div class="col-xs-12 q-mb-md">
                                                    <span class="q-mb-md text-secondary" style="font-weight: bold; font-size: 16px">
                                                        Parameter
                                                    </span>
                                                </div> 
                                                <div class="col-xs-12 q-mb-md">
                                                    <q-select filled v-model="step3Data.st3Opt2Selected" dense :options="step3Data.opt2" />
                                                </div> 
                                                <div class="col-xs-12 q-mb-md">
                                                    <q-select filled v-model="step3Data.st3Opt3Selected" dense :options="step3Data.opt3" />
                                                </div>
                                                <div class="col-xs-12">
                                                    <q-select filled v-model="step3Data.st3Opt4Selected" dense :options="step3Data.opt4"  />
                                                </div> 
                                            </div>
                                            <div class="col-xs-6 q-pa-sm">
                                                <div class="col-xs-12 q-mb-md">
                                                    <span class="q-mb-md text-secondary" style="font-weight: bold; font-size: 16px">
                                                        Value
                                                    </span>
                                                </div>                                                
                                                <div class="col-xs-12 q-mb-md">
                                                    <q-input filled  v-model="step3Data.text1" dense>
                                                        <template v-slot:after>
                                                            <q-btn round dense flat icon="close" />
                                                        </template>
                                                    </q-input>
                                                </div> 
                                                <div class="col-xs-12 q-mb-md">
                                                    <q-input filled  v-model="step3Data.text2" dense>
                                                        <template v-slot:after>
                                                            <q-btn round dense flat icon="close" />
                                                        </template>
                                                    </q-input>
                                                </div> 
                                                <q-input filled v-model="step3Data.text3" dense>
                                                    <template v-slot:after>
                                                        <q-btn round dense flat icon="close" />
                                                    </template>
                                                </q-input>                            

                                            </div>
                        
                                        </div>
                
                                    </q-tab-panel>
                                </q-tab-panels>
                            </q-card>
                        </div>
                        
                    </div>
                </q-step>
        <q-step :name="4" prefix="4" title="Resume">
            step4
        </q-step>

        <template v-slot:navigation>
            <q-stepper-navigation class="q-gutter-sm" align="right">          
                <q-btn v-if="step > 1" flat color="secondary" @click="$refs.stepper.previous()" label="Previous" class="q-ml-sm" />
                <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Next'" />
            </q-stepper-navigation>
        </template>
    </q-stepper>



                
            <!-- </q-intersection>  -->
        </q-card> 

  </q-page>


</template>

<style>
</style>

<script>

export default {
    name: 'LabTest',
    data: () => ({   
        step: 1,
        step1Data: {
            testId: 'WEB_DEMO_TRIB_1',
            status: 'Requested',
            dueDate: '',
            description: '',
            opt1: ['ACT2_SRV3', 'TEK_2_DISK', 'TEK_SRV3', 'TESSA'],
            opt2: ['ACT2_SRV3_Conf_1', 'TEK_2_DISK_Conf_1', 'TEK_SRV3_Conf_1', 'TESSA1'],
            opt3: [],
            st1Opt1Selected: '',
            st1Opt2Selected: '',
            st1Opt3Selected: '',
        },        
        step2Data: {
            opt1: ['Choose existing one', '100CrBall_10mm', '100CrBall_20mm', '100CrDisc_7.8mm'],
            opt2: ['Choose existing one', '100CrBall_10mm', '100CrBall_20mm', '100CrDisc_7.8mm'],
            opt3: ['None/Dry', 'Choose existing one', 'Optimol_Oil_V90', 'Optimol_Oil_V92'],
            opt4: [],
            opt5: [],
            opt6: [],
            st2Opt1Selected: '',
            st2Opt2Selected: '',
            st2Opt3Selected: '',
            st2Opt4Selected: '',
            st2Opt5Selected: '',
            st2Opt6Selected: '',
        },
        step3Data: {
            opt1: ['Round Robin Test (SRV)', 'Single Test Run (SRV)'],  
            opt2: ['ACT2_SRV3_Conf_1', 'TEK_2_DISK_Conf_1', 'TEK_SRV3_Conf_1', 'TESSA1'],
            opt3: ['None/Dry', 'Choose existing one', 'Optimol_Oil_V90', 'Optimol_Oil_V92'],
            opt4: ['None/Dry', 'Choose existing one', 'Optimol_Oil_V90', 'Optimol_Oil_V92'],
            st3Opt1Selected: '',
            st3Opt2Selected: 'Configured Ambient Temperature (ºC)',  
            st3Opt3Selected: 'Configured frequency (Hz)',
            st3Opt4Selected: 'Expected test results',   
            description: 'Sample preparation. Ensure that the test load unit is in the release position (refer to your operating manual for details). Place 0.3 mL of the lubricating oil to be tested on the cleaned disk. Then install the disk (place on the block). Tighten the fastening screw until resistance just begins. Place the cleaned ball, using the tweezers, in the disassembled, cleaned, and dried ball holder. Tighten the fastening screw until resistance just begins. Install the ball holder and test ball in the test chamber',
            text1: '7200',
            text2: 'reciprocating',
            text3: '80.0'
        },        
        tab: "first",
    }),
    methods: {
        
    },   
    created(){
        this.$eventBus.$emit('is-children');              
    }
}
</script>
