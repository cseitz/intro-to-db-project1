export default {
  props: {
    selectable: {
      type: Function,
    }
  },
  methods: {
    async fetchData(url=false) {
      if (!url) {
        if (!this.loaded && this.search.length <= 1 && this.$route.query.search) {
          this.search = decodeURIComponent(this.$route.query.search);
        }
        if (this.search.length <= 1 && !('allowEmpty' in this)) {
          if (!this.selectable) {
            this.$router.push({
              query: {
                search: undefined,
              }
            })
          }
          this.data = [];
          this._data = JSON.stringify([]);
          this.loaded = false;
          this.query = false;
          if ('afterFetch' in this) {
            await this.afterFetch();
          }
          return;
        }
      }
      let path = encodeURI(templateString(url || this.path, this));
      let resp = await (
        await fetch(path)
      ).json();
      if (!url) {
        if (!this.selectable) {
          this.$router.push({
            query: {
              search: encodeURIComponent(this.search),
            }
          })
        }
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
    },
    itemSelected(e) {
      if (this.selectable) {
        e.preventDefault();
        let root = false;
        for (let x of e.path) {
          if ('id' in x.dataset) {
            root = x;
            break;
          }
        }
        this.selectable(root || e.target);
      }
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
