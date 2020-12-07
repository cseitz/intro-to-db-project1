<template>
  <div class="hospital">
    <h2>Patients:</h2>
    <PatientsList v-bind:hospital_id="$route.params.id"/>

    <h2>Rooms</h2>
    <RoomsList v-bind:hospital_id="$route.params.id"/>

  </div>
</template>

<script>
// @ is an alias to /src
import PatientsList from '@/components/lists/Patients.vue'
import RoomsList from '@/components/lists/Rooms.vue'

export default {
  name: 'Patient',
  components: {
    PatientsList,
    RoomsList
  }
}
</script>
