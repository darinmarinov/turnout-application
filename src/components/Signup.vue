<template>
  <div class="col-sm-6 col-sm-auto justify-content-center">
 <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" v-model="email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
  </div>
  <button type="submit" class="btn btn-primary" @click.prevent='signUp'>Sign Up</button>
 </form>
 <br>
 <br>
 <p>{{error.message}}</p>
 <br>
  <router-link to='/signin'>Already a user? Sign In</router-link>
</div>
</template>

<script>
import { firebaseApp } from '../firebaseApp'
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
  methods:{
      signUp(){
          firebaseApp.auth().createUserWithEmailAndPassword(this.email,this.password)
          .catch(error=>{
              this.error = error
          })
      }
  }
};
</script>