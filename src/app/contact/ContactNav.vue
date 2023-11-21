<template>

  <div class="contact-navleft">
    <nav class="nav flex-column">
      <a href="#tabContact" class="nav-link active" data-bs-toggle="tab">
        <span data-bs-toggle="tooltip" title="All Contacts" data-placement="right"><i data-feather="users"></i></span>
      </a>
      <a href="#tabPhoneCall" class="nav-link" data-bs-toggle="tab">
        <span data-bs-toggle="tooltip" title="Recently Contacted" data-placement="right"><i data-feather="phone-call"></i></span>
      </a>
      <a href="#tabFavorites" class="nav-link" data-bs-toggle="tab">
        <span data-bs-toggle="tooltip" title="Favorites" data-placement="right"><i data-feather="star"></i></span>
      </a>
      <a href="#tabTags" class="nav-link" data-bs-toggle="tab">
        <span data-bs-toggle="tooltip" title="Contact Labels" data-placement="right"><i data-feather="tag"></i></span>
      </a>
      <a href="#tabExport" class="nav-link" data-bs-toggle="tab">
        <span data-bs-toggle="tooltip" title="Export Contacts" data-placement="right"><i data-feather="upload"></i></span>
      </a>
      <a href="" class="nav-link">
        <span data-bs-toggle="tooltip" title="Contact Settings" data-placement="right"><i data-feather="settings"></i></span>
      </a>
    </nav>
  </div><!-- contact-navleft -->

</template>

<script>
export default {
  name: "ContactNav"
}
</script>

<style scoped>

</style>
