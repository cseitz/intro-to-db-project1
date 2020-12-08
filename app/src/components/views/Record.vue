<template>
  <div class="record-view view" style="width: 460px; margin-left: auto; margin-right: auto;">
    <div v-if="loaded" style="float: left;">
      <input v-model="data.entity" style="width: 200px" placeholder="Entity">
      <input v-model="data.title" style="width: 200px" placeholder="Title">


    </div>
  </div>
</template>

<script>
import ViewBase from './';

export default {
  extends: ViewBase,
  name: 'RecordView',
  props: {
    id: String,
  },
  data() {
    return {
      table: 'records',
      path: '/api/db/records/${this.id}.json',
      recordsPath: '/api/db/records/${this.id}/records.json',
      data: {},
      loaded: false,
      query: false,
      physician: false,
      records: [],

      selectingPhysician: false,
      selectingRoom: false,

      confirmingAction: false,
    }
  },
  methods: {
    async getPhysician() {
      if (this.physician) {
        if (this.physician.physician_id === this.data.physician_id) {
          return this.physician;
        }
      };
      if (this.data.physician_id) {
        this.physician = (await this.fetchData(`/api/db/physicians/${this.data.physician_id}.json`)).results;
      } else {
        this.physician = false;
      }
      return this.physician;
    },
    async updateRecord() {
      return await this.saveData();
    },
    async afterFetch() {
      await this.getPhysician();
      this.records = (await this.fetchData(this.recordsPath)).results;
      //console.log(this.physician);
    },
    async afterReset() {
      this.physician = false;
      await this.getPhysician();
    },
    async afterDelete() {
      this.loaded = false;
      this.$router.push({
        name: 'Records',
      })
    },

    selectPhysician() {
      this.selectingPhysician = true;
    },
    setPhysician(e) {
      //console.log('got physician with event', e);
      //console.log(e.dataset.id);
      let physId = e.dataset.id;
      this.selectingPhysician = false;
      if (physId != undefined) {
        this.data.physician_id = physId;
        this.physician = false;
        this.getPhysician();
      }
    },

    deleteRecord() {
      let _this = this;
      this.confirmAction(`Are you sure you want to delete record '${this.data.first_name} ${this.data.last_name}'?`, function() {
        _this.deleteData(true);
      });
    },

    confirmAction(str, cb) {
      let _this = this;
      this.requestedAction = str;
      this.confirmingAction = true;
      this.confirmedAction = function() {
        _this.confirmingAction = false;
        cb(_this);
      };
    },
    canceledAction() {
      this.confirmingAction = false;
      delete this.requestedAction;
      delete this.confirmedAction;
    }
  },
  components: {
    PhysiciansList,

  },
}
</script>


<style scoped lang="scss">
@import './';

</style>
