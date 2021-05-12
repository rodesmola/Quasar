<template>
  <q-layout view="lHh Lpr lff">
    <q-header elevated>
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          @click="drawer = !drawer"
          aria-label="Menu"
          icon="menu"
        /> -->
        <q-btn
          flat
          dense
          round
          @click="back()"
          aria-label="Menu"
          icon="keyboard_backspace"
        />
        <q-toolbar-title>
            <q-item-label class="text-weight-bold" style="font-size: 12px" v-if="routerWatcher[0]">{{routerWatcher[0].name}}</q-item-label>
            <q-item-label class="text-weight-bold" style="font-size: 10px; color:white" v-if="routerWatcher[1]" caption>{{routerWatcher[1].name}}</q-item-label>
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
        
      </q-toolbar>
    </q-header>

          <q-drawer
        v-model="drawer"
        show-if-above
        :width="250"
        :breakpoint="400"
      >
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple to="/">            
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>

            <q-item-section>
              Home
            </q-item-section>
          </q-item>

          <q-item active clickable v-ripple to="/private">
            <q-item-section avatar>
              <q-icon name="lock" />
            </q-item-section>

            <q-item-section>
              Private area
            </q-item-section>
          </q-item>

          <q-item class="q-ml-sm" dense active clickable v-ripple to="/private/profile">
            <q-item-section avatar>
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>
              Profile
            </q-item-section>
          </q-item>

          <q-item class="q-ml-sm" dense active clickable v-ripple to="/private/service-request">
            <q-item-section avatar>
              <q-icon name="miscellaneous_services" />
            </q-item-section>

            <q-item-section>
              Service request
            </q-item-section>
          </q-item>       

          <q-item class="q-ml-sm" dense active clickable v-ripple to="/private/lab-test">
            <q-item-section avatar>
              <q-icon name="phonelink_setup" />
            </q-item-section>

            <q-item-section>
              Lab Tests
            </q-item-section>
          </q-item> 

          <q-item class="q-ml-sm" dense active clickable v-ripple to="/private/tmp">
            <q-item-section avatar>
              <q-icon name="phonelink_setup" />
            </q-item-section>

            <q-item-section>
              TEMP
            </q-item-section>
          </q-item> 



          <q-item class="q-ml-sm" dense disabled v-ripple >
            <q-item-section avatar>
              <q-icon name="insert_chart" />
            </q-item-section>

            <q-item-section>
              My services
            </q-item-section>
          </q-item>              

          </q-list>
        </q-scroll-area>
 <!-- src="https://cdn.quasar.dev/img/material.png" -->
        <div class="absolute-top" style="height: 140px; background-color: #e7e7e8">
          <div class="row justify-center items-center">
            <!-- <q-avatar size="120px" class="q-mb-sm q-mt-md">
              <img src="./assets/logoTransparent.png">
            </q-avatar> -->

            <img src="./assets/home/smallLogo.png" style="height: 140px;">
            <!-- <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>  -->
          </div>
        </div>
      </q-drawer>
        
    <q-page-container style="background-color: #f3f3f4">
      <router-view/>
    </q-page-container>

    <q-footer>
      <q-toolbar>
        <q-toolbar-title>© 2019 AC2T research GmbH</q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>


export default {
  name: 'App',
  components: {},
  data () {
    return {
      drawer: false,
      miniState: true,
      routerWatcher: {},
    }
  },
  methods:{
    back(){
      this.$router.back();
    }
  },
  watch:{
    $route (to){ //from
      this.routerWatcher = to.matched;
    }
  },
  created(){
    //this.$q.dark.set(true)      
  }
}
</script>

<style>
</style>
