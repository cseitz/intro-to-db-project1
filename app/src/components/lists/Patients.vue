<template>
  <div class="patients-list list" style="width: 460px; margin-left: auto; margin-right: auto;">
    <div style="">
      Search:<br>
      <input v-model="search" style="width: 400px" v-on:input="runSearch">
      <!-- <button v-on:click="runSearch" style="width: calc(100px - 15px)">Search</button> -->
      <br><br>
      <div v-if="loaded">
        <a v-for="item in data" style="margin-bottom: 10px; text-decoration: none; display: block; color: inherit;"
        v-bind:href="'/database/patient/' + item.patient_id">
          <h3 style="margin-bottom: 0px;;">{{ item.last_name }}, {{ item.first_name }}</h3>
          <p>{{ item.address }}</p>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import ViewBase from './';

export default {
  extends: ViewBase,
  name: 'PatientsList',
  data() {
    return {
      table: 'patients',
      path: '/api/db/patients.json?limit=30&search=${this.search ? "%" + this.search + "%" : ""}',
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
