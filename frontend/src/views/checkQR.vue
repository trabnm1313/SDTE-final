<template>
  <div class="container-fruid">
    <div class="container">
      <div class="row upload-form mt-5">
        <div class="col-md-6">        
          <form>
            <div class="form-row">
              <div class="form-group">
                <label for="">Full name</label>
                <input v-model="fullName" type="text" class="form-control" placeholder="Full name">
              </div>
            </div>
            <router-link to="/" tag="button" class="submit-btn btn btn-outline-danger">Back</router-link>&nbsp;&nbsp;
            <button @click="check()" type="button" class="submit-btn btn btn-outline-success">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const axios = require('axios').default

export default {
  name: 'checkQR',
  data() {
    return {
      fullName: ""
    }
  },
  created() {
    document.title = "Register"
  },
  methods: {
    check(){
     axios.get("http://host.docker.internal:3000/read/getOne?name="+this.fullName).then(res => {
       if(res.data != "") alert("คุณได้ลงทะเบียนฉีดวัคซีนเรียบร้อยแล้ว กรุณามาให้ตรงวันนัดหมายก่อนกำหนดเวลา")
       else alert("ไม่มีชื่อในระบบ")
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