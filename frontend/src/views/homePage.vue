<template>
  <div class="container-fruid">
    <img src="../assets/indexPromote.jpg">
    <div class="mt-5">
      <h1 class="font-weight-bold">ดีแทค เปิดลงทะเบียน รับการฉีดวัคซีนโควิด-19</h1>
    </div>
    <div class="mt-5">
      <h2 class="font-weight-bold">เลือกศูนย์ ฉีดวัคซีน COVID-19</h2>
    </div>
    <div class="vaccineList">
      <div class="innerWrapper">
        <h3 class="font-weight-bold text-primary">กระตุ้นเข็มที่ 3 (12-18ปี)</h3>
            <p class="tCaption fDtac">
              สำหรับคนไทยและต่างชาติ <b class="tBody fDtacB">อายุตั้งแต่ 12-18 ปี</b>
              <br>ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 3
              <br class="d-block d-md-none">ด้วยวัคซีนไฟเซอร์
              <br><b class="tBody fDtacB">โดยได้รับเข็มที่ 2 มาแล้วอย่างน้อย 120 วัน</b>
              <br><b class="tBody fDtacB">เริ่มฉีด 1 - 31 พ.ค. 65</b>
              <br>ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ (สถานีกลางบางซื่อ ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)
          </p>
      </div>
        <div class="button-control mg-t-xlD">
          <router-link to="/register" tag="button" class="btn btn-outline-primary">ลงทะเบียนฉีดวัคซีนเข็มที่ 3 (12-18)</router-link>
        </div>
    </div>
    <div class="vaccineList">
      <div class="innerWrapper">
        <h3 class="font-weight-bold text-warning">กระตุ้นเข็มที่ 3</h3>
            <p class="tCaption fDtac">
              สำหรับคนไทยและต่างชาติ <b class="tBody fDtacB">สำหรับคนไทยและต่างชาติ อายุ 18 ปีขึ้นไป</b>
              <br>ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 3
              <br class="d-block d-md-none">ด้วยวัคซีนไฟเซอร์
              <br><b class="tBody fDtacB">โดยได้รับเข็มที่ 2 มาแล้วอย่างน้อย 120 วัน</b>
              <br><b class="tBody fDtacB">เริ่มฉีด 1 - 31 พ.ค. 65</b>
              <br>ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ (สถานีกลางบางซื่อ ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)
          </p>
      </div>
        <div class="button-control mg-t-xlD">
          <router-link to="/register" tag="button" class="btn btn-outline-primary">ลงทะเบียนฉีดวัคซีนเข็มที่ 3</router-link>
        </div>
    </div>
    <div class="vaccineList">
      <div class="innerWrapper">
        <h3 class="font-weight-bold text-danger">กระตุ้นเข็มที่ 4</h3>
            <p class="tCaption fDtac">
              สำหรับคนไทยและต่างชาติ <b class="tBody fDtacB">สำหรับคนไทยและต่างชาติ อายุ 18 ปีขึ้นไป</b>
              <br>ที่ต้องการฉีดวัคซีนกระตุ้นเข็มที่ 3
              <br class="d-block d-md-none">ด้วยวัคซีนไฟเซอร์
              <br><b class="tBody fDtacB">โดยได้รับเข็มที่ 2 มาแล้วอย่างน้อย 120 วัน</b>
              <br><b class="tBody fDtacB">เริ่มฉีด 1 - 31 พ.ค. 65</b>
              <br>ฉีดที่ ศูนย์ฉีดวัคซีนกลางบางซื่อ (สถานีกลางบางซื่อ ประตู 2 โดยเข้าทาง ถ.กำแพงเพชร)
          </p>
      </div>
        <div class="button-control mg-t-xlD">
          <router-link to="/register" tag="button" class="btn btn-outline-primary">ลงทะเบียนฉีดวัคซีนเข็มที่ 3</router-link>
        </div>
    </div>

    <div class="mt-5">
      <h2 class="font-weight-bold">ตรวจสอบ QR Code</h2>
    </div>

    <div class="my-5">
      <router-link to="/checkQR" tag="button" class="btn btn-primary">ตรวจสอบ</router-link>
    </div>

    <footer>
      <div>
        © 2565 บมจ.โทเทิ่ล แอ็คเซ็ส คอมมูนิเคชั่น<br>
        บริษัทในกลุ่มเทเลนอร์
      </div>
    </footer>

  </div>
</template>

<script>
// const axios = require('axios')

export default {
  name: 'homePage',
  data() {
    return {

    }
  },
  created() {
    document.title = "DTAC"
  }
}
</script>

<style>
.vaccineList{
  text-align: left;
  margin-top: 50px;
  margin-left: 33%;
}
@media only screen and (max-width: 600px) {
  .video-primary-info {
    font-size: 30px;
    margin: 0%;
  }
  .video-secondary-info {
    font-size: 15px;
    margin: 0%;
  }
  .tag {
    font-size: 13px;
  }
}
</style>
