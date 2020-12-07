export default {
  methods: {
    async fetchData(url=false) {
      if (!url) {
        if (this.search.length <= 1 && !('allowEmpty' in this)) {
          this.data = [];
          this._data = JSON.stringify([]);
          this.loaded = false;
          this.query = false;
          return;
        }
      }
      let path = encodeURI(templateString(url || this.path, this));
      let resp = await (
        await fetch(path)
      ).json();
      if (!url) {
        this.query = resp.query;
        this.data = resp.results;
        this._data = JSON.stringify(resp.results);
        this.loaded = true;
        if ('afterFetch' in this) {
          await this.afterFetch();
        }
      } else {
        return resp;
      }
    },
    reset() {
      this.data = JSON.parse(this._data);
    }
  },
  computed: {
    modified() {
      return !(JSON.stringify(this.data) == this._data);
    }
  },
  mounted() {
    this.fetchData();
  }
}
