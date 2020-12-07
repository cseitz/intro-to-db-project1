<template>
  <div class="patient">
    <PatientView id="create"/>

  </div>
</template>

<script>
// @ is an alias to /src
import PatientView from '@/components/views/Patient.vue'

export default {
  name: 'Patient',
  components: {
    PatientView
  }
}
</script>
