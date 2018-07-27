<template>
  <div class="container" transition="fade" transition-mode="out-in">
  <div class="card">
    <h1 class="title">Login</h1>
    <form>
      <div class="input-container">
       
      <label for="exampleInputEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
      <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
       
      </div>
      <div class="input-container">
        <label for="exampleInputPassword1">Password</label>
        <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
      </div>
      <div class="button-container">  
          <button type="submit" class="btn btn-primary" @click.prevent='signIn'><span>Sign In</span></button>      
      </div>
      <div class="footer"> 
       <p> <router-link to='/signup'>Not a user? Sign Up</router-link></p>
       <p>{{error.message}}</p></div>
       <br>
    </form>
  </div>
  </div>
</template>

<script>
import { firebaseApp } from "../firebaseApp";
export default {
  data() {
    return {
      email: "",
      password: "",
      error: {
        message: ""
      }
    };
  },
  methods: {
    signIn() {
      firebaseApp
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style>

</style>



