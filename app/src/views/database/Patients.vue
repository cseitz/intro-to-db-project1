<template>
  <div class="patients">
    <PatientsList/>
    <button v-on:click="register">Register Patient</button>
  </div>
</template>

<script>
// @ is an alias to /src
import PatientsList from '@/components/lists/Patients.vue'

export default {
  name: 'Patients',
  components: {
    PatientsList
  },
  methods: {
    register() {
      this.$router.push({
        name: 'Register Patient',
      })
    }
  },
}
</script>
