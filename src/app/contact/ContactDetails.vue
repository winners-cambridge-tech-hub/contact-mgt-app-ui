<template>

  <div class="contact-content">

    <div class="contact-content-header">
      <nav class="nav">
        <a href="#contactInformation" class="nav-link active" data-bs-toggle="tab">Contact
          Info<span>rmation</span></a>
        <a href="#contactLogs" class="nav-link" data-bs-toggle="tab"><span>Call &amp; Message </span>Logs</a>
      </nav>
      <a href="" id="contactOptions" class="text-secondary mg-l-auto d-xl-none"><i data-feather="more-horizontal"></i></a>
    </div><!-- contact-content-header -->

    <div class="contact-content-body">
      <div class="tab-content">
        <div id="contactInformation" class="tab-pane show active pd-20 pd-xl-25">
          <div class="d-flex align-items-center justify-content-between mg-b-25">
            <h6 class="mg-b-0">Personal Details</h6>
            <div class="d-flex">
              <a href="#modalEditContact" data-bs-toggle="modal"
                 class="btn btn-sm btn-white d-flex align-items-center mg-r-5"><i data-feather="edit-2"></i><span
                  class="d-none d-sm-inline mg-l-5"> Edit</span></a>
              <a href="#modalDeleteContact" data-bs-toggle="modal"
                 class="btn btn-sm btn-white d-flex align-items-center"><i data-feather="trash"></i><span
                  class="d-none d-sm-inline mg-l-5"> Delete</span></a>
            </div>
          </div>

          <div class="row">
            <div class="col-6 col-sm">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Full Name</label>
              <p class="mg-b-0">{{selected_contact.first_name}} {{selected_contact.middle_name}} {{selected_contact.last_name}}</p>
            </div><!-- col -->
            <div class="col-6 col-sm">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Birthday</label>
              <p class="mg-b-0">{{selected_contact.birthday_month}} {{selected_contact.birthday_day}}</p>
            </div><!-- col -->
            <div class="col-sm mg-t-20 mg-sm-t-0">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Gender</label>
              <p class="mg-b-0"> {{selected_contact.gender}} </p>
            </div><!-- col -->
          </div><!-- row -->

          <h6 class="mg-t-40 mg-b-20">Contact Details</h6>

          <div class="row row-sm">
            <div class="col-6 col-sm-4">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Mobile
                Phone</label>
              <p class="tx-primary tx-rubik mg-b-0">{{selected_contact.phone_number}}</p>
            </div>
            <div class="col-6 col-sm-4">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Email Address</label>
              <p class="tx-primary tx-rubik mg-b-0">{{selected_contact.email}}</p>
            </div>
            <div class="col-6 col-sm-4 mg-t-20 mg-sm-t-0">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Phone</label>
              <p class="tx-primary tx-rubik mg-b-0"> {{selected_contact.phone_number}} </p>
            </div>
            <div class="col-sm-4 mg-t-20 mg-sm-t-30">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Town / City</label>
              <p class="tx-primary mg-b-0">{{ selected_contact.town_city }}</p>
            </div>
            <div class="col-sm-4 mg-t-20 mg-sm-t-30">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">County</label>
              <p class="mg-b-0">{{ selected_contact.county }}</p>
            </div>
            <div class="col-sm-4 mg-t-20 mg-sm-t-30">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Post Code</label>
              <p class="mg-b-0"> {{selected_contact.post_code}} </p>
            </div>
            <div class="col-sm-6 mg-t-20 mg-sm-t-30">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Home
                Address</label>
              <p class="mg-b-0">{{selected_contact.contact_address}}</p>
            </div>
            <div class="col-sm-6 mg-t-20 mg-sm-t-30">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Country</label>
              <p class="mg-b-0"> United Kingdom </p>
            </div>
            <div class="col-sm-6 mg-t-20 mg-sm-t-30">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Service Unit</label>
              <p class="tx-primary mg-b-0"> {{selected_contact.service_unit}}</p>
            </div>
            <div class="col-sm-6 mg-t-20 mg-sm-t-30">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Social
                Profiles</label>
              <nav class="nav nav-social">
                <a href="" class="nav-link"><i data-feather="facebook"></i></a>
                <a href="" class="nav-link"><i data-feather="twitter"></i></a>
                <a href="" class="nav-link"><i data-feather="instagram"></i></a>
                <a href="" class="nav-link"><i data-feather="github"></i></a>
              </nav>
            </div><!-- col -->
            <div class="col-sm mg-t-20 mg-sm-t-30">
              <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10">Our Data Protection Promise</label>
              <p class="tx-13 mg-b-0" style="text-align: justify;">
                As a church and a responsible organisation, we are committed to the requirements of the Data Protection Act as it exists and by extension,
                the General Data Protection Regulation (GDPR) that comes into effect on 25th May 2018 and the Data Protection Act 2018 (UK) as we pursue
                the delivery of the mandate.

                We will retain your information for as long as you continue to worship with us unless you exercise any of your rights. If you do not wish to receive further communication from us, contact us with the details provided or simply unsubscribe from any communication.
                Any concerns, please contact the regulator in your country of residence. However, we would be glad if you would contact us in the first instance to see how we can address your concerns.
                In the United Kingdom, the Information Commission Office is the supervisory body that monitors how we use your information. </p>
            </div>
          </div><!-- row -->
        </div>
        <div id="contactLogs" class="tab-pane pd-20 pd-xl-25">
          <div class="d-flex align-items-center justify-content-between mg-b-30">
            <h6 class="tx-15 mg-b-0">Call &amp; Message Logs</h6>
            <a href="#" class="btn btn-sm btn-white d-flex align-items-center">
              <ion-icon name="time-outline" class="mg-r-5 tx-16 lh--9"></ion-icon>
              Clear History</a>
          </div>
        </div><!-- tab-pane -->
      </div><!-- tab-content -->
    </div><!-- contact-content-body -->

    <div class="contact-content-sidebar">
      <div class="clearfix mg-b-25">
        <div id="contactAvatar" class="pos-relative float-start">
          <div class="avatar avatar-xl"><span class="avatar-initial rounded-circle bg-gray-700 tx-normal">A</span>
          </div>
          <a href="" class="contact-edit-photo" data-bs-toggle="tooltip" title="Upload Photo"><i
              data-feather="edit-2"></i></a>
        </div>
      </div>
      <h5 class="tx-18 tx-xl-20 mg-b-5"> {{selected_contact.first_name}} {{selected_contact.middle_name}} {{selected_contact.last_name}} </h5>
      <p class="tx-13 tx-lg-12 tx-xl-13 tx-color-03 mg-b-20">{{selected_contact.contact_address}}</p>
      <nav class="contact-call-nav mg-b-20">
        <a href="#" class="nav-call" data-bs-toggle="tooltip" title="Make a Phone Call"><i
            data-feather="phone"></i></a>
        <a href="#" class="nav-video" data-bs-toggle="tooltip" title="Make a Video Call"><i data-feather="video"></i></a>
        <a href="#" class="nav-msg" data-bs-toggle="tooltip" title="Send Message"><i
            data-feather="message-square"></i></a>
      </nav><!-- contact-call-nav -->

      <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-10"> Note / Comment </label>
      <p class="tx-13 mg-b-0">{{selected_contact.first_name}} {{selected_contact.middle_name}} {{selected_contact.last_name}} was contacted
        on 4th May 2023, she is doing great, she will require transport support to be in church on Sunday.
      </p>

      <hr class="mg-y-20">

      <label class="tx-10 tx-medium tx-spacing-1 tx-color-03 tx-uppercase tx-sans mg-b-15">Options</label>
      <nav class="nav flex-column contact-content-nav mg-b-25">
        <a href="" class="nav-link"><i data-feather="share"></i> Share this Contact</a>
        <a href="" class="nav-link"><i data-feather="star"></i> Add to Favorites</a>
        <a href="" class="nav-link"><i data-feather="slash"></i> Archive this Contact</a>
      </nav>

    </div><!-- contact-content-sidebar -->
  </div><!-- contact-content -->

</template>

<script>
export default {
  name: "ContactDetails",
  data() {
    return {
      selected_contact: this.$store.state.selected_contact
    }
  },
  methods: {

  }
}
</script>

<style scoped>

</style>
