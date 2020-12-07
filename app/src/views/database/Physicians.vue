<template>
  <div class="physicians">
    <PhysiciansList/>

  </div>
</template>

<script>
// @ is an alias to /src
import PhysiciansList from '@/components/lists/Physicians.vue'

export default {
  name: 'Physicians',
  components: {
    PhysiciansList
  }
}
</script>
