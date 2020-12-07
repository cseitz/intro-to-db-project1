<template>
  <div class="patient-view view" style="width: 460px; margin-left: auto; margin-right: auto;">
    <div v-if="loaded" style="float: left;">
      <input v-model="data.first_name" style="width: 200px" placeholder="First Name">
      <input v-model="data.last_name" style="width: 200px" placeholder="First Name">
      <br>
      <input v-model="data.address" style="width: 430px" placeholder="Address">
      <br>
      <br>
      <span class="field">Medication:</span>
      <br>
      <input v-model="data.medication" style="width: 430px" placeholder="None">
      <br>
      <span class="field">Conditions:</span>
      <br>
      <input v-model="data.conditions" style="width: 430px" placeholder="None">

      <br><br>

      <div v-if="data.physician_id && physician">
        Physician:
        <a v-bind:href="'/physician/' + data.physician_id">Dr. {{ physician.first_name }} {{ physician.last_name }}</a>
      </div>

      <br><br>

      <button>Assign Physician</button>
      <button>Assign Room</button>

      <input v-model="data.physician_id">


      <br><br>
      <button v-bind:disabled="!modified" style="text-align: center;" v-on:click="updatePatient">Save Changes</button>
      <br>
      <div v-if="modified" v-on:click="reset" style="cursor: pointer;">Undo Edits</div>
      <div v-else style="opacity: 0;">No changes made</div>

      <h3>{{ records.length }} Patient Records</h3>
      <button>Import Record</button>
      <br><br>
      {{ records }}

    </div>
  </div>
</template>

<script>
import ViewBase from './';

export default {
  extends: ViewBase,
  name: 'PatientView',
  props: {
    id: String,
  },
  data() {
    return {
      table: 'patients',
      path: '/api/db/patients/${this.id}.json',
      recordsPath: '/api/db/patients/${this.id}/records.json',
      data: {},
      loaded: false,
      query: false,
      physician: false,
      records: [],
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
    async updatePatient() {
      return await this.saveData();
    },
    async afterFetch() {
      await this.getPhysician();
      this.records = (await this.fetchData(this.recordsPath)).results;
      //console.log(this.physician);
    }
  },
  components: {

  },
}
</script>


<style scoped lang="scss">
@import './';

</style>
