<template>
<div class="">
 <h3>EVENT HANDLER</h3>
 <a class="btn" title="Sign Out button" @click="signOut">Sign Out</a>
 {{$store.state}}

</div>
</template>

<script>

import { firebaseApp } from '../firebaseApp'
import { mapActions } from 'vuex'

export default {
    methods:{
      signOut(){
          this.$store.dispatch('signOut')
          firebaseApp.auth().signOut()
      }
    }
}

</script>

<style>

</style>
