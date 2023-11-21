<template>

  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h6 class="modal-title">Delete Contact</h6>
        <a href="" class="close text-secondary" data-bs-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </a>
      </div>
      <div class="modal-body">
        <p class="mg-b-0">Do you really want to delete this contact?</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
        <button v-on:click="getContactForDelete()" type="button" class="btn btn-primary" data-bs-dismiss="modal">Continue Delete</button>
      </div>
    </div>
  </div>

</template>

<script>
import serviceMixin from "@/mixins/contact-service";
export default {
  name: "ContactDelete",
  mixins: [serviceMixin],
  props: ['selected_contact'],
  methods: {
    async getContactForDelete() {
      this.deleteContact(this.selected_contact.id)
    }
  }
}
</script>

<style scoped>

</style>
