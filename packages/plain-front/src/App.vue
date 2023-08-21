<template>
  <v-app>
    <v-container>
      <!-- <v-navigation-drawer v-model="sidebar" app>
        <v-list>
          <v-list-tile
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path">
            <v-list-tile-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>{{ item.title }}</v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer> -->
  
      <v-toolbar app class="bg-surface">
        <v-toolbar-side-icon @click="sidebar = !sidebar">
          <v-img :src="baseURL + 'logo.svg'"  width="50px" />
        </v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link to="/" style="cursor: pointer" class="d-flex text-black">
            <h2>{{ appTitle }}</h2>
          </router-link>
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            flat
            v-for="item in menuItems"
            :key="item.title"
            :to="item.path">
            {{ item.title }}
          </v-btn>
        </v-toolbar-items>
      </v-toolbar>
      
      <v-content>
        <router-view></router-view>
      </v-content>
      <v-footer>
        <v-row justify="center" no-gutters>
          <v-col class="text-center" cols="12">
            {{ new Date().getFullYear() }} — <strong>Plain Page </strong>
          </v-col>
        </v-row>
      </v-footer>
    </v-container>
    
  </v-app>

</template>

<script setup lang="ts">
import { ref } from "vue";

export interface MenuItem {
  title: string; 
  path: string; 
  icon?: string;
}
const appTitle = "Plain Page"
const baseURL = import.meta.env.BASE_URL;
const sidebar = ref(false);
const menuItems: MenuItem[] = 
[
  { title: 'Home', path: '/' },
  { title: 'About', path: '/about' },
  { title: 'Sign Up', path: '/signup' },
  { title: 'Sign In', path: '/signin' }
]

</script>

<style scoped>
  .v-toolbar-title {
    line-height: inherit !important;
  }
  .v-footer{
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
  }
</style>