<template>

  <Header/>

  <div class="contact-wrapper">

    <ContactNav/>

    <ContactSidebar/>

    <ContactDetails></ContactDetails>


  </div><!-- contact-wrapper -->

  <ContactForm/>

  <ContactEdit/>

  <div class="modal fade effect-scale" id="modalDeleteContact" tabindex="-1" role="dialog" aria-hidden="true">
<!--    <ContactDelete :selected_contact=selected_contact></ContactDelete>-->
  </div>

</template>

<script>

import footerScriptMixin from "@/mixins/footer-script";
import Header from "../components/Header";
import ContactNav from "./ContactNav";
import ContactForm from "./ContactForm";
import ContactEdit from "./ContactEdit";
// import ContactDelete from "./ContactDelete";
import serviceMixin from "@/mixins/contact-service";
import ContactDetails from "./ContactDetails";
import paginationMixin from "@/mixins/data-table";
import ContactSidebar from "./ContactSidebar";

// import barChart from "@/app/charts/barChart";

export default {
  name: "dashboard",
  mixins: [footerScriptMixin, paginationMixin, serviceMixin],
  components: {
    ContactSidebar,
    ContactDetails,
    // ContactDelete,
    ContactEdit,
    ContactForm,
    ContactNav,
    Header
  },
  props: {
    page: {
      type: String
    }
  },
  created() {
    this.footerScript();
    this.contactScript();
  },
watch: {
  page: function () {
    this.$store.commit('updatePage', this.page);
  }
},
}
</script>

<style>
@import '../../assets/css/dashforge.contacts.css';
</style>






