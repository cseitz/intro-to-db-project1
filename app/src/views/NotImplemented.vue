<template>
  <div class="not-implemented">
    <h1>This page has not been implemented</h1>
    <p>We probably ran out of time to add this feature</p>
    <h2>:(</h2>

    <div v-if="$route.params.id">
      <br><br>
      This route apparently has a specified ID, so we'll attempt guess and load data from the API
      <br><br>
      <a v-bind:href="path">{{ path }}</a>
      <br><br>
      {{ data }}
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'NotImplemented',
  data() {
    return {
      path: '',
      data: {},
    }
  },
  components: {

  },
  methods: {
    async fetchData() {
      let portions = this.$route.path.split('/database/')[1].split('/');
      portions = portions.map(o => {
        if (Number(o) == o) {
          return o;
        } else {
          return o + 's';
        }
      })
      let pth = '/api/db/' + portions.join('/') + '.json';
      this.path = pth;
      this.data = await (await fetch(pth)).json();
    }
  },
  mounted() {
    if ('id' in this.$route.params) {
      this.fetchData();
    }
  }
}
</script>
