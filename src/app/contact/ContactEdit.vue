<template>
  <div class="modal fade effect-slide-in-right" id="modalEditContact" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content">
        <div class="modal-body pd-20 pd-sm-30">
          <a href="" type="button" class="close pos-absolute t-20 r-20 text-secondary" data-bs-dismiss="modal"
             aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </a>


          <h5 class="tx-18 tx-sm-20 mg-b-20">Edit Contact</h5>
          <p class="tx-13 tx-color-03 mg-b-30" style="margin-top: -10px;">You can add more information than what you see
            here,</p>

          <div class="d-sm-flex">

            <!--            <div class="mg-sm-r-30">-->
            <!--              <div class="pos-relative d-inline-block mg-b-20">-->
            <!--                <div class="avatar avatar-xxl"><span-->
            <!--                    class="avatar-initial rounded-circle bg-gray-700 tx-normal">A</span></div>-->
            <!--                <a href="" class="contact-edit-photo"><i data-feather="edit-2"></i></a>-->
            <!--              </div>-->
            <!--            </div>-->

            <div class="flex-fill">

              <div class="row no-gutters">
                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Firstname</label>
                    <input v-model="state.first_name" type="text" class="form-control"
                           placeholder="Enter firstname">
                    <label v-if="v$.first_name.$error" class="tx-danger">{{ v$.first_name.$errors[0].$message }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Middlename</label>
                    <input v-model="state.middle_name" type="text" class="form-control"
                           placeholder="Enter middlename">
                    <label v-if="v$.middle_name.$error" class="tx-danger">{{
                        v$.middle_name.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Lastname</label>
                    <input v-model="state.last_name" type="text" class="form-control"
                           placeholder="Enter lastname">
                    <label v-if="v$.last_name.$error" class="tx-danger">{{
                        v$.last_name.$errors[0].$message
                      }}</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Email</label>
                    <input v-model="state.email" type="text" class="form-control"
                           placeholder="Enter email">
                    <label v-if="v$.email.$error" class="tx-danger">{{
                        v$.email.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Phone Number</label>
                    <input v-model="state.phone_number" type="text" class="form-control"
                           placeholder="Enter phone Number">
                    <label v-if="v$.phone_number.$error" class="tx-danger">{{
                        v$.phone_number.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Contact Address</label>
                    <input v-model="state.contact_address" type="text" class="form-control"
                           placeholder="Enter contact Address">
                    <label v-if="v$.contact_address.$error" class="tx-danger">{{
                        v$.contact_address.$errors[0].$message
                      }}</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Marital Status</label>
                    <input v-model="state.marital_status" type="text" class="form-control"
                           placeholder="Enter marital status">
                    <label v-if="v$.marital_status.$error" class="tx-danger">{{
                        v$.marital_status.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Town / City</label>
                    <input v-model="state.town_city" type="text" class="form-control"
                           placeholder="Enter Town / City">
                    <label v-if="v$.town_city.$error" class="tx-danger">{{
                        v$.town_city.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">County</label>
                    <input v-model="state.county" type="text" class="form-control"
                           placeholder="Enter County">
                    <label v-if="v$.county.$error" class="tx-danger">{{
                        v$.county.$errors[0].$message
                      }}</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Post Code</label>
                    <input v-model="state.post_code" type="text" class="form-control"
                           placeholder="Enter Post Code">
                    <label v-if="v$.post_code.$error" class="tx-danger">{{
                        v$.post_code.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Birthday Month</label>
                    <input v-model="state.birthday_month" type="text" class="form-control"
                           placeholder="Enter Birthday Month">
                    <label v-if="v$.birthday_month.$error" class="tx-danger">{{
                        v$.birthday_month.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block"> Birthday Day</label>
                    <input v-model="state.birthday_day" type="text" class="form-control"
                           placeholder="Enter Birthday Day">
                    <label v-if="v$.birthday_day.$error" class="tx-danger">{{
                        v$.birthday_day.$errors[0].$message
                      }}</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Gender</label>
                    <input v-model="state.gender" type="text" class="form-control"
                           placeholder="Enter Gender">
                    <label v-if="v$.gender.$error" class="tx-danger">{{
                        v$.gender.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block"> First Attendance</label>
                    <input v-model="state.first_attendance" type="text" class="form-control"
                           placeholder="Enter first attendance day">
                    <label v-if="v$.first_attendance.$error" class="tx-danger">{{
                        v$.first_attendance.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block"> BFC Status</label>
                    <input v-model="state.bfc_status" type="text" class="form-control"
                           placeholder="Enter ...">
                    <label v-if="v$.bfc_status.$error" class="tx-danger">{{
                        v$.bfc_status.$errors[0].$message
                      }}</label>
                  </div>
                </div>
              </div>

              <div class="row">
                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block">Water Baptism</label>
                    <input v-model="state.water_baptism" type="text" class="form-control"
                           placeholder="Enter Water Baptism">
                    <label v-if="v$.water_baptism.$error" class="tx-danger">{{
                        v$.water_baptism.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block"> Service Unit</label>
                    <input v-model="state.service_unit" type="text" class="form-control"
                           placeholder="Enter ...">
                    <label v-if="v$.service_unit.$error" class="tx-danger">{{
                        v$.service_unit.$errors[0].$message
                      }}</label>
                  </div>
                </div>

                <div class="col-sm">
                  <div class="form-group">
                    <label class="d-block"> WOFBI Status</label>
                    <input v-model="state.wofbi_status" type="text" class="form-control"
                           placeholder="Enter ...">
                    <label v-if="v$.wofbi_status.$error" class="tx-danger">{{
                        v$.wofbi_status.$errors[0].$message
                      }}</label>
                  </div>
                </div>
              </div>

              <div class="row">

              </div>

            </div>
          </div>
          <label v-if="formError" class="tx-danger">{{ formError }}</label>
        </div>


        <div class="modal-footer">
          <div class="wd-100p d-flex flex-column flex-sm-row justify-content-end">
            <button v-on:click="validateContactAndSubmit" type="button"
                    class="btn btn-primary mg-b-5 mg-sm-b-0">Save Changes
            </button>
            <button type="button" ref="closeModalBtn" class="btn btn-secondary mg-sm-l-5" data-bs-dismiss="modal">Cancel</button>
          </div>
        </div><!-- modal-footer -->
      </div><!-- modal-content -->
    </div><!-- modal-dialog -->
  </div><!-- modal -->
</template>

<script>

import {computed, reactive} from "vue";
import {required, email, numeric} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import serviceMixin from "@/mixins/contact-service";

export default {
  name: "ContactEdit",
  mixins: [serviceMixin],
  watch: {
    $store: {
      handler() {
        this.getContactForEdit();
      },
      deep: true,
      immediate: true,
    },
  },
  data() {
    return {
      formError: null
    }
  },
  setup() {
    const state = reactive({
      first_name: "",
      middle_name: "",
      last_name: "",
      email: "",
      phone_number: "",
      contact_address: "",
      marital_status: "",
      town_city: "",
      county: "",
      post_code: "",
      birthday_month: "",
      birthday_day: "",
      gender: "",
      first_attendance: "",
      bfc_status: "",
      water_baptism: "",
      service_unit: "",
      wofbi_status: "",
      id: "",
    })
    const rules = computed(() => {
      return {
        first_name: {required},
        middle_name: {required},
        last_name: {required},
        email: {required, email},
        phone_number: {required, numeric},
        contact_address: {required},
        marital_status: {required},
        town_city: {required},
        county: {required},
        post_code: {required},
        birthday_month: {required, numeric},
        birthday_day: {required, numeric},
        gender: {required},
        first_attendance: {required},
        bfc_status: {required},
        water_baptism: {required},
        service_unit: {required},
        wofbi_status: {required},
      }
    });
    const v$ = useVuelidate(rules, state)
    return {state, v$}
  },
  methods: {
    async validateContactAndSubmit() {
      this.report = "";
      this.v$.$validate();
      if (this.v$.$error) {
        this.formError = "Please Fix the error in the form"
      } else {
        this.formError = null;
        this.$refs.closeModalBtn.click();
        this.report = await this.saveContact(this.state).catch(err => {
          return {
            details: err.response.data.errorMessage,
            failed: true
          };
        });

        await this.getContacts(this.page);
      }
    },
    async getContactForEdit() {
      let contact = this.$store.state.selected_contact;
      this.state.first_name = contact.first_name;
      this.state.middle_name = contact.middle_name;
      this.state.last_name = contact.last_name;
      this.state.email = contact.email;
      this.state.phone_number = contact.phone_number;
      this.state.marital_status = contact.marital_status;
      this.state.town_city = contact.town_city;
      this.state.contact_address = contact.contact_address;
      this.state.county = contact.county;
      this.state.post_code = contact.post_code;
      this.state.birthday_month = contact.birthday_month;
      this.state.birthday_day = contact.birthday_day;
      this.state.gender = contact.gender;
      this.state.first_attendance = contact.first_attendance;
      this.state.bfc_status = contact.bfc_status;
      this.state.water_baptism = contact.water_baptism;
      this.state.service_unit = contact.service_unit;
      this.state.wofbi_status = contact.wofbi_status;
      this.state.id = contact?.id;

    }
  }
}



</script>

<style scoped>
/*.form-control {*/
/*  border: 1.5px solid #000;*/
/*  border-radius: 0;*/
/*  outline: 0;*/
/*  box-shadow: none;*/
/*}*/

.tx-danger {
  font-style: italic;
}

.form-group {
  margin-top: -8px;
}


</style>
