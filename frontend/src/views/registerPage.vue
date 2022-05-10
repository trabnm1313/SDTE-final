<template>
  <div class="container-fruid">
    <div class="container">
      <div class="row upload-form mt-5">
        <div class="col-md-6">        
          <form>
            <div class="form-row">
              <div class="form-group">
                <label for="">Fullname</label>
                <input v-model="fullName" type="text" class="form-control" placeholder="Full name">
              </div>
              <div class="form-group">
                <label for="">Age</label>
                <input v-model="age" type="text" class="form-control" placeholder="Age">
              </div>
              <div class="form-group">
                <label for="">Telephone</label>
                <input v-model="telephone" type="text" class="form-control" placeholder="Telephone">
              </div>
              <div class="form-group">
                <label>Address</label>
                <input v-model="address" type="text" class="form-control" placeholder="Adress">
              </div>
            </div>
            <router-link to="/" tag="button" class="submit-btn btn btn-outline-danger">Back</router-link>&nbsp;&nbsp;
            <button @click="register()" type="button" class="submit-btn btn btn-outline-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default

export default {
  name: 'registerPage',
  data() {
    return {
      fullName: "",
      age: "",
      telephone: "",
      address: ""
    }
  },
  created() {
    document.title = "Register"
  },
  methods: {
    register(){
      axios.post("http://host.docker.internal:3000/create/createOne", { fullname: this.fullName, age: this.age, telephone: this.telephone, address: this.address }, { headers: { "Content-Type": "application/json" } }).then(res => {
        alert("Register Successfully!")
        this.$router.push("/")
        console.log(res)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>

<style>
html {
  height: 100%;
}
.invalid-input {
  font-size: 13px;
  color: #ff4d4f;
  padding: 1% 0 0 1%;
}
.is-invalid {
  border: #ff4d4f;
}
.upload-form {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  height: 70vh;
  box-shadow: 0px 0px 8px lightblue ;
}
.upload-form label {
  margin: 1% 0;
  font-size: 20px;
}
.form-group {
  margin: 1% 0%;
}
.submit-btn {
  margin: 1% 0 1% 0;
}
.upload-status {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.error {
  color: #ff4d4f;
}
.success {
  color: #52c41a;
}
.uploading {
  color: #1890ff;
}
</style>