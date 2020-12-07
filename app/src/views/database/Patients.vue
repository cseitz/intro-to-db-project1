<template>
  <div class="patients">
    <PatientsList/>

  </div>
</template>

<script>
// @ is an alias to /src
import PatientsList from '@/components/lists/Patients.vue'

export default {
  name: 'Patients',
  components: {
    PatientsList
  }
}
</script>
