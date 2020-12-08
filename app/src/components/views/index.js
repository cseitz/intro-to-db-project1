export default {
  methods: {
    async fetchData(url=false) {
      if (this.id == 'create' && !url) {
        this.query = false;
        this.data = {

        };
        this._data = JSON.stringify(this.data);
        this.loaded = true;
        if ('afterFetch' in this) {
          //await this.afterFetch();
        }
        return;
      }
      let path = templateString(url || this.path, this);
      console.log(path);
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
      if ('afterReset' in this) {
        this.afterReset();
      }
    },
    async saveData(url=false, subject=false) {
      subject = (subject || this);
      let path = templateString(url || this.path, subject || this);
      let original = JSON.parse(subject._data);
      let diff = Object.fromEntries(Object.entries(subject.data).filter(o => {
        return o[1] != original[o[0]];
      }));
      console.log(diff);
      console.log(JSON.stringify(this.data));
      let resp = await (
        await fetch(path, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(diff)
        })
      ).json();
      (subject || this).saveResponse = resp;
      if (resp.results && 'insertId' in resp.results) {
        if (!('id' in this.$route.params)) {
          this.$router.push({
            name: 'Patient',
            params: {
              id: resp.results.insertId,
            }
          })
        }
      }
      await this.fetchData();
      return resp;
    },
    async deleteData(confirmed=false) {
      if (confirmed === true) {
        let path = templateString(this.path, this);
        let resp = await (
          await fetch(path, {
            method: 'DELETE',
          })
        ).json();
        if ('afterDelete' in this) {
          this.afterDelete();
        }
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
