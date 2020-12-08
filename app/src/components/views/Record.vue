<template>
  <div class="record-view view" style="width: 460px; margin-left: auto; margin-right: auto;">
    <div v-if="loaded && (editing || id == 'create')" class="record-content" style="">
      <!--<input v-model="data.entity" style="width: 200px" placeholder="Entity">
      <input v-model="data.title" style="width: 200px" placeholder="Title">-->

      <span v-if="id != 'create'" v-on:click="toggleEditMode" style="float: right;">Stop Editing</span>

      <span class="field">Title:</span>
      <br>
      <input v-model="data.title" style="width: 370px" placeholder="None">
      <br>
      <span class="field">Entity (Hospital or Individual):</span>
      <br>
      <input v-model="data.entity" style="width: 370px" placeholder="None">
      <br>
      <span class="field">Description:</span>
      <br>
      <input v-model="data.description" style="width: 370px" placeholder="None">

      <span v-if="data.timestamp">{{ (new Date(data.timestamp)).toLocaleString() }}</span>

      <span v-if="id != 'create'">
        <br><br>
        <button v-on:click="deleteRecord">Delete Record</button>
        <br><br>
      </span>

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
      <span v-on:click="toggleEditMode" style="float: right;">Edit</span>
      <h3>{{ data.title }}</h3>
      <h4>{{ data.entity }}</h4>
      <p>{{ data.description }}</p>
      <span v-if="data.timestamp">{{ (new Date(data.timestamp)).toLocaleString() }}</span>
      <br>

      <br><br>
    </div>

    <teleport to="#app" >
        <div class="nestedSelect" v-if="confirmingAction">
          <h3>{{ requestedAction }}</h3>
          <p>This cannot be undone. Are you sure you want to proceed?</p>
          <button v-on:click="confirmedAction">Confirm</button>
          <button v-on:click="canceledAction" style="background-color: transparent;">Cancel</button>
        </div>
    </teleport>

  </div>
</template>

<script>
import ViewBase from './';

export default {
  extends: ViewBase,
  name: 'RecordView',
  props: {
    id: Number,
    'patient': Number,
  },
  data() {
    return {
      table: 'records',
      path: '/api/db/records/${this.id}.json',
      data: {},
      loaded: false,
      query: false,

      confirmingAction: false,

      editing: false,
    }
  },
  methods: {
    async updateRecord() {
      this.data.patient_id = this.data.patient_id || this.patient;
      let resp = await this.saveData();
      try {
        let par = this.$parent;
        let obj = {
          id: resp.results.insertId,
        };
        if (this.id == 'create') {
          this.$parent.loaded = false;
        }
        let resp2 = await this.fetchData(this.path, obj);
        //par.records.unshift(resp2.results);
        //console.log(resp2.results);
        //console.log(par.records);
        //par.$forceUpdate(true);
        let recs = [resp2.results, ...par.records];
        //Vue.set(par, 'records', recs);
        par.records = recs;
        if (this.id == 'create') {
          this.$parent.importingRecord = false;
          this.$parent.loaded = true;

        }

      } catch(e) {
        console.log(e);
      }
      return resp;
    },
    async afterFetch() {
      //console.log(this.physician);
    },
    async afterReset() {

    },
    async afterDelete() {
      let par = this.$parent;
      par.loaded = false;
      await this.$nextTick();
      par.loaded = true;
    },

    deleteRecord() {
      let _this = this;
      this.$parent.confirmAction(`Are you sure you want to delete record '${this.data.title}'?`, function() {
        _this.deleteData(true);
      });
    },

    toggleEditMode() {
      this.editing = !this.editing;
    },

    confirmAction(str, cb) {
      let _this = this;
      this.requestedAction = str;
      this.confirmingAction = true;
      //this.$parent.confirmingAction = true;
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
