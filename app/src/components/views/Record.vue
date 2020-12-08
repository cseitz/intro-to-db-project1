<template>
  <div class="record-view view" style="width: 460px; margin-left: auto; margin-right: auto;">
    <div v-if="loaded && (editing || id == 'create')" class="record-content" style="">
      <!--<input v-model="data.entity" style="width: 200px" placeholder="Entity">
      <input v-model="data.title" style="width: 200px" placeholder="Title">-->

      <span class="field">Entity (Hospital or Individual):</span>
      <br>
      <input v-model="data.entity" style="width: 370px" placeholder="None">
      <br>
      <span class="field">Title:</span>
      <br>
      <input v-model="data.title" style="width: 370px" placeholder="None">
      <br>
      <span class="field">Description:</span>
      <br>
      <input v-model="data.description" style="width: 370px" placeholder="None">

      <span v-if="data.timestamp">{{ (new Date(data.timestamp)).toLocaleString() }}</span>

      <span v-if="modified">
        <br><br>
        <button v-bind:disabled="!modified" style="text-align: center;" v-on:click="updateRecord">Save Changes</button>
        <br>
        <div v-if="modified" v-on:click="reset" style="cursor: pointer;">Undo Edits</div>
        <div v-else style="opacity: 0;">No changes made</div>
      </span>

      <br>

    </div>
    <div v-else-if="loaded" class="record-content" style="">
      <h3>{{ data.title }}</h3>
      <h4>{{ data.entity }}</h4>
      <p>{{ data.description }}</p>
      <span v-if="data.timestamp">{{ (new Date(data.timestamp)).toLocaleString() }}</span>
      <br>
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
    'patient': Number,
  },
  data() {
    return {
      table: 'records',
      path: '/api/db/records/${this.id}.json',
      data: {},
      loaded: false,
      query: false,
      physician: false,
      records: [],

      selectingPhysician: false,
      selectingRoom: false,

      confirmingAction: false,

      editing: false,
    }
  },
  methods: {
    async updateRecord() {
      this.data.patient_id = this.data.patient_id || this.patient;
      let resp = await this.saveData();
      try {
        if (this.id == 'create') {
          this.$parent.importingRecord = false;
        }
        this.$parent.afterFetch();
      } catch(e) {

      }
      return resp;
    },
    async afterFetch() {
      //console.log(this.physician);
    },
    async afterReset() {

    },
    async afterDelete() {
      this.loaded = false;
      this.$router.push({
        name: 'Records',
      })
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

  },
}
</script>


<style scoped lang="scss">
@import './';

</style>
