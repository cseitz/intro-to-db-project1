<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <PatientView id="1"/>

  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import PatientView from '@/components/views/Patient.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    PatientView
  }
}
</script>
