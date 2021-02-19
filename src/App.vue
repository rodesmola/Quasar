<template>
  <q-layout view="hHh Lpr lff">
    <q-header elevated class="glossy">
      <q-toolbar>
        <!-- <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu"
          icon="menu"
        /> -->

        <q-toolbar-title>
          i-TRIBOMAT
        </q-toolbar-title>

        <!-- <div>Quasar v{{ $q.version }}</div> -->
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="drawer"
      show-if-above

      :mini="miniState"
      @mouseover="miniState = false"
      @mouseout="miniState = true"

      :width="200"
      :breakpoint="500"
      bordered
      content-class="bg-grey-3"
    >
      <q-scroll-area class="fit">
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
              <q-icon name="person" />
            </q-item-section>

            <q-item-section>
              Private area
            </q-item-section>
          </q-item>


          <q-separator />

  
        </q-list>
      </q-scroll-area>
    </q-drawer>
        
    <q-page-container>
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
  name: 'LayoutDefault',

  components: {
    
  },

  data () {
    return {
     drawer: false,
      miniState: true
    }
  }
}
</script>

<style>
</style>
