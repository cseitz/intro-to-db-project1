<template>
  <div class="hospitals">
    <hospitalsList/>

  </div>
</template>

<script>
// @ is an alias to /src
import HospitalsList from '@/components/lists/Hospitals.vue'

export default {
  name: 'Hospitals',
  components: {
    HospitalsList
  }
}
</script>
