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

      <button v-on:click="selectPhysician">Assign Physician</button>
      <button v-on:click="deletePatient">Delete Patient</button>
      <!--<button v-on:click="selectPhysician">Assign Room</button>-->


      <br><br>
      <button v-bind:disabled="!modified" style="text-align: center;" v-on:click="updatePatient">Save Changes</button>
      <br>
      <div v-if="modified" v-on:click="reset" style="cursor: pointer;">Undo Edits</div>
      <div v-else style="opacity: 0;">No changes made</div>

      <h3>{{ records.length }} Patient Records</h3>
      <button v-on:click="importRecord">Import Record</button>
      <br><br>
      <span>
        <RecordView v-if="importingRecord" id="create" v-bind:patient="data.patient_id"/>
        <RecordView v-for="record in records" v-bind:id="record.record_id" v-bind:patient="data.patient_id"/>
      </span>

      <teleport to="#app" >
          <div class="nestedSelect" v-if="selectingPhysician">
            <PhysiciansList :selectable="setPhysician"/>
          </div>
      </teleport>

      <teleport to="#app" >
          <div class="nestedSelect" v-if="confirmingAction">
            <h3>{{ requestedAction }}</h3>
            <p>This cannot be undone. Are you sure you want to proceed?</p>
            <button v-on:click="confirmedAction">Confirm</button>
            <button v-on:click="canceledAction" style="background-color: transparent;">Cancel</button>
          </div>
      </teleport>

    </div>
  </div>
</template>

<script>
import ViewBase from './';
import PhysiciansList from '@/components/lists/Physicians.vue'
import RecordView from './Record.vue';

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

      selectingPhysician: false,
      selectingRoom: false,

      importingRecord: false,

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
    async updatePatient() {
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
        name: 'Patients',
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

    importRecord() {
      this.importingRecord = !this.importingRecord;
    },

    deletePatient() {
      let _this = this;
      this.confirmAction(`Are you sure you want to delete patient '${this.data.first_name} ${this.data.last_name}'?`, function() {
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
    RecordView,

  },
}
</script>


<style scoped lang="scss">
@import './';

</style>
