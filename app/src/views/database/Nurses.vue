<template>
  <div class="nurses">
    <NursesList/>

  </div>
</template>

<script>
// @ is an alias to /src
import NursesList from '@/components/lists/Nurses.vue'

export default {
  name: 'Nurses',
  components: {
    NursesList
  }
}
</script>
