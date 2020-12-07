<template>
  <div class="home">

    <router-link to="/database/hospitals">Hospital Database</router-link>
    <br><br>
    <router-link to="/database/patients">Patient Database</router-link>
    <br><br>
    <router-link to="/database/physicians">Physician Database</router-link>
    <br><br>
    <router-link to="/database/nurses">Nurse Database</router-link>

    <br><br><br><br>

    We ran out of time and weren't able to do all the things we wanted to.

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
