<template>
  <div class="departments-list list" style="width: 460px; margin-left: auto; margin-right: auto;">
    <div style="">
      <h1>Departments:</h1>
      <!--Search:<br>
      <input v-model="search" style="width: 400px" v-on:input="runSearch">-->
      <!-- <button v-on:click="runSearch" style="width: calc(100px - 15px)">Search</button> -->
      <br><br>
      <div v-if="loaded">
        <a v-for="item in data" style="margin-bottom: 30px; text-decoration: none; display: block; color: inherit;"
        v-bind:href="'/database/department/' + item.department_id">
          <h3 style="margin-bottom: 0px;;">{{ item.name }}</h3>

          <p>{{ item.capabilities.split(',').map(o => o.trim()).join(', ') }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ViewBase from './';

export default {
  extends: ViewBase,
  name: 'DepartmentsList',
  data() {
    return {
      table: 'departments',
      path: '/api/db/hospitals/${this.$route.params.hospital_id}/departments.json?limit=30&search=${this.search ? "%" + this.search + "%" : ""}',
      allowEmpty: true,
      data: {},
      loaded: false,
      query: false,
      physician: false,
      search: '',
    }
  },
  methods: {
    runSearch() {
      this.fetchData()
    }
  },
  components: {

  },
}
</script>


<style scoped lang="scss">
@import './';

</style>
