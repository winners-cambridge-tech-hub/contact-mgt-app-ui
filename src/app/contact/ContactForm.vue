<template>

  <div id="offCanvas3" class="off-canvas off-canvas-overlay off-canvas-right" style="width:80%; overflow-y : scroll;">
    <a href="#" class="close"><i data-feather="x"></i></a>

    <div class="pd-25 ht-100p tx-13">
      <div class="modal-content">
        <div class="modal-body pd-20 pd-sm-30">

          <h5 class="tx-18 tx-sm-20 mg-b-20">Create New Contact</h5>
          <p class="tx-13 tx-color-03 mg-b-30">You can add more information than what you see here, such as address and
            birthday by clicking <span class="tx-color-02">Add More Fields</span> button below to bring up more options.
          </p>

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


            </div>
          </div>
          <label v-if="formError" class="tx-danger">{{ formError }}</label>
        </div>
        <div class="modal-footer">
          <div class="wd-100p d-flex flex-column flex-sm-row justify-content-end">
            <button v-on:click="validateContactAndSubmit" type="button" class="btn btn-primary mg-b-5 mg-sm-b-0">Save
              Contact
            </button>
            <button href="#" class="btn btn-secondary mg-sm-l-5 close" type="button" style="font-size: 14px;">Discard</button>
          </div>
        </div><!-- modal-footer -->
      </div><!-- modal-content -->
    </div>
  </div><!-- off-canvas -->



  <div class="modal fade effect-scale" id="modalNewContact" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-xl modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body pd-20 pd-sm-30">
          <a href="" type="button" class="close pos-absolute t-20 r-20 text-secondary close">
            <span aria-hidden="true">&times;</span>
          </a>

        </div>
      </div>
    </div><!-- modal-dialog -->
  </div><!-- modal -->
</template>


<script>
import {computed, reactive} from "vue";
import {email, numeric, required} from "@vuelidate/validators";
import useVuelidate from "@vuelidate/core";
import serviceMixin from "@/mixins/contact-service";

export default {
  name: "ContactForm",
  mixins: [serviceMixin],
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
      county: "Cambridge",
      post_code: "CB1 5RT",
      birthday_month: "MAY",
      birthday_day: "8",
      gender: "FEMALE",
      first_attendance: "2022-08-22T13:28:42.000Z",
      bfc_status: "NO",
      water_baptism: "NO",
      service_unit: "NO",
      wofbi_status: "NO",
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
        birthday_month: {required},
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
       // this.$refs.closeModalBtn.click();
        this.report = await this.saveContact(this.state).catch(err => {
          return {
            details: err.response.data.errorMessage,
            failed: true
          };
        });
      }
    },

  }
}
</script>

<style scoped>

</style>
