<template>
  <div class="departments">
    <departmentsList/>

  </div>
</template>

<script>
// @ is an alias to /src
import DepartmentsList from '@/components/lists/Departments.vue'

export default {
  name: 'Departments',
  components: {
    DepartmentsList
  }
}
</script>
