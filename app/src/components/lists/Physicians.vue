<template>
  <div class="physicians-list list" style="width: 460px; margin-left: auto; margin-right: auto;">
    <div style="">
      {{ search.length >= 1 ? 'Showing' : 'Search' }} <span v-if="count >= 0"> {{ count }} Physicians</span><br>
      <input v-model="search" style="width: 400px" v-on:input="runSearch">
      <!-- <button v-on:click="runSearch" style="width: calc(100px - 15px)">Search</button> -->
      <br><br>
      <div v-if="loaded">
        <a v-for="item in data" style="margin-bottom: 10px; text-decoration: none; display: block; color: inherit;"
        v-bind:href="'/database/physician/' + item.physician_id">
          <h3 style="margin-bottom: 0px;">Dr. {{ item.last_name }}, {{ item.first_name }}</h3>
          <p>{{ item.education }}</p>
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
  name: 'PhysiciansList',
  data() {
    return {
      table: 'physicians',
      path: '/api/db/physicians.json?limit=30&search=${this.search ? "%" + this.search + "%" : ""}',
      data: {},
      count: 0,
      loaded: false,
      query: false,
      physician: false,
      search: '',
    }
  },
  methods: {
    runSearch() {
      this.fetchData()
    },
    async afterFetch() {
      this.count = (await this.fetchData(this.path + '&count=true')).results[0]['COUNT(*)'];

    }
  },
  components: {

  },
  mounted() {
    this.afterFetch();
  }
}
</script>


<style scoped lang="scss">
@import './';

</style>
