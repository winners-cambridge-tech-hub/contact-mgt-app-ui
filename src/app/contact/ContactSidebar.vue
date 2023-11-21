<template>

  <div class="contact-sidebar">
    <div class="contact-sidebar-header">
      <i data-feather="search"></i>
      <div class="search-form">
        <input type="search" class="form-control" placeholder="Search contacts">
      </div>
<!--      <a href="#modalNewContact" class="btn btn-xs btn-icon btn-primary" data-bs-toggle="modal">-->
<!--        <span data-bs-toggle="tooltip" title="Add New Contact"><i data-feather="user-plus"></i></span>-->
<!--      </a>-->
      <a href="#offCanvas3" class="off-canvas-menu btn btn-xs btn-icon btn-primary">
        <span data-bs-toggle="tooltip" title="Add New Contact"><i data-feather="user-plus"></i></span>
      </a><!-- contact-add -->

    </div><!-- contact-sidebar-header -->
    <div class="contact-sidebar-body">
      <div class="tab-content">
        <div id="tabContact" class="tab-pane fade active show">
          <div class="pd-y-20 pd-x-10 contact-list">

            <template v-for="(contact, index) in contacts" :key="contact.id" :id="'row-'+contact.id">

              <div class="media pointer-cursor" v-on:click="loadDetails(contact.id)">
                <div class="avatar avatar-sm avatar-online">
                  <span :class="getRandomColor()"> {{ getFirstString(contact.first_name) }}</span>
                </div>

                <div class="media-body mg-l-10">
                  <h6 class="tx-13 mg-b-3"
                      v-if="(contact.first_name + contact.middle_name + contact.last_name).length<24">
                    {{ contact.first_name }} {{ contact.middle_name }} {{ contact.last_name }}
                  </h6>
                  <h6 class="tx-13 mg-b-3" v-else>
                    {{(contact.first_name + ' ' + contact.middle_name + ' ' + contact.last_name).substring(0, 22) + "..."}}
                  </h6>
                  <span class="tx-12"> {{ contact.email }} </span>
                </div><!-- media-body -->
                <nav>
                  <a href=""><i data-feather="star"></i></a>
                  <a href=""><i data-feather="edit-2"></i></a>
                </nav>
              </div>

              <label v-if="index%3===2" id="contactB" class="contact-list-divider"> NEXT </label>
            </template>




                  <ul class="pagination pagination-circle mg-t-30">

                    <li v-if="pagination.currentPage === 1" class="page-item disabled">
                      <a class="page-link page-link-icon"> <i data-feather="chevron-left"></i> </a>
                    </li>

                    <li v-else class="page-item">
                      <router-link to="?page=1" class="page-link page-link-icon"> <i data-feather="chevron-left"></i> </router-link>
                    </li>

                    <li v-for="page in pagination.pageArr" :key="page" class="page-item"
                        :class="{ active: page === pagination.currentPage }">
                      <router-link :to="`?page=${page}`" class="page-link"> {{ page }}</router-link>
                    </li>

                    <li v-if="pagination.currentPage === pagination.totalPages" class="page-item disabled"><a
                        class="page-link"><i data-feather="chevron-right"></i></a></li>

                    <li v-else class="page-item">
                      <router-link :to="`?page=${pagination.totalPages}`" class="page-link"><i data-feather="chevron-right"></i></router-link>
                    </li>

                  </ul><!-- .pagination -->

<!--                <div class="g float-right">-->
<!--                  <div class="pagination-goto d-flex justify-content-center">-->
<!--                    <div>-->
<!--                      <select @change="footerScriptChangeBatchSize($event)" class="form-control select2-no-search">-->
<!--                        <option v-for="pageSize in pagination.pageSizes" :key="pageSize" :value="pageSize"-->
<!--                                :selected="pageSize === pagination.selectedSize">-->
<!--                          {{ pageSize }}-->
<!--                        </option>-->
<!--                      </select>-->
<!--                    </div>-->
<!--                    <div class="mg-l-10"> {{ pagination.report }}</div>-->
<!--                  </div>-->
<!--                </div>-->

          </div><!-- contact-list -->
        </div><!-- tab-pane -->




        <div id="tabPhoneCall" class="tab-pane fade">
          <div class="pd-y-20 pd-x-10 contact-list">
            <label class="contact-list-divider">Recently Contacted</label>
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle"
                                                               alt=""></div>
              <div class="media-body mg-l-10">
                <h6 class="tx-13 mg-b-3">Camille Audrey</h6>
                <span class="tx-12">+1-234-567-890</span>
              </div><!-- media-body -->
              <nav>
                <a href=""><i data-feather="star"></i></a>
                <a href=""><i data-feather="edit-2"></i></a>
              </nav>
            </div><!-- media -->
            <div class="media">
              <div class="avatar avatar-sm avatar-offline"><span
                  class="avatar-initial rounded-circle bg-success">E</span></div>
              <div class="media-body mg-l-10">
                <h6 class="tx-13 mg-b-3">Elvis Vircede</h6>
                <span class="tx-12">+63929-123-4567</span>
              </div><!-- media-body -->
              <nav>
                <a href=""><i data-feather="star"></i></a>
                <a href=""><i data-feather="edit-2"></i></a>
              </nav>
            </div><!-- media -->
          </div><!-- contact-list -->
        </div><!-- tab-pane -->


        <div id="tabFavorites" class="tab-pane fade">
          <div class="pd-y-20 pd-x-10 contact-list">
            <label class="contact-list-divider">My Favorites</label>
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle"
                                                               alt=""></div>
              <div class="media-body mg-l-10">
                <h6 class="tx-13 mg-b-3">Archie Cantones</h6>
                <span class="tx-12">archie@cantones.com</span>
              </div><!-- media-body -->
              <nav>
                <a href=""><i data-feather="star"></i></a>
                <a href=""><i data-feather="edit-2"></i></a>
              </nav>
            </div><!-- media -->
          </div><!-- contact-list -->
        </div><!-- tab-pane -->


        <div id="tabTags" class="tab-pane fade">
          <div class="pd-y-20 pd-x-10 contact-list">
            <label class="contact-list-divider">My Family</label>
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><span
                  class="avatar-initial rounded-circle bg-gray-700">A</span></div>
              <div class="media-body mg-l-10">
                <h6 class="tx-13 mg-b-3">Abigail Johnson</h6>
                <span class="tx-12">+1-234-567-890</span>
              </div><!-- media-body -->
              <nav>
                <a href=""><i data-feather="star"></i></a>
                <a href=""><i data-feather="edit-2"></i></a>
              </nav>
            </div><!-- media -->
            <label class="contact-list-divider">My Officemates</label>
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><span
                  class="avatar-initial rounded-circle bg-gray-700">E</span></div>
              <div class="media-body mg-l-10">
                <h6 class="tx-13 mg-b-3">Elena Salubre</h6>
                <span class="tx-12">e.salubre@myemail.com</span>
              </div><!-- media-body -->
              <nav>
                <a href=""><i data-feather="star"></i></a>
                <a href=""><i data-feather="edit-2"></i></a>
              </nav>
            </div><!-- media -->
          </div><!-- contact-list -->
        </div><!-- tab-pane -->


        <div id="tabExport" class="tab-pane fade">
          <div class="pd-y-25 pd-x-20">
            <h6 class="tx-12 tx-semibold tx-spacing-1 tx-uppercase">Export Contacts</h6>
            <p class="tx-13 tx-color-03 mg-b-20">You can export your contacts and import them into other email
              apps.</p>
            <div class="form-group">
              <label class="tx-13">Which contacts do you want to export?</label>
              <select class="custom-select tx-13">
                <option value="1" selected>All Contacts</option>
                <option value="2">My Favorites</option>
                <option value="3">My Family</option>
                <option value="4">My Friends</option>
                <option value="4">My Officemates</option>
              </select>
            </div><!-- form-group -->
            <button class="btn btn-sm btn-primary">Export</button>
          </div>
        </div><!-- tab-pane -->

      </div><!-- tab-content -->
    </div><!-- contact-sidebar-body -->
  </div><!-- contact-sidebar -->

</template>

<script>

import footerScriptMixin from "@/mixins/footer-script";
import serviceMixin from "@/mixins/contact-service";
import paginationMixin from "@/mixins/data-table";


export default {
  name: "ContactSidebar",
  mixins: [footerScriptMixin, paginationMixin, serviceMixin],
  watch: {
    $store: {
      handler(value, oldValue) {
        this.contacts = this.$store.state.contact_list;
        this.propsPage = this.$store.state.page;
        console.log(value.state);
        console.log(oldValue?.name);
      },
      deep: true,
      immediate: true,
    }
  },
  data() {
    return {
      contacts: [],
      propsPage: 1,
      pagination: {
        totalPages: 0,
        page: 0,
        currentPage: 0,
        report: '',
        pageArr: [],
        pageSizes: [],
        selectedSize: 10
      },
      search: {
        state: '',
        business: ''
      },
      isAdmin: '',
      userDetail: '',
      colors: ['bg-info','bg-primary','bg-indigo','bg-gray-800','bg-black','bg-facebook','bg-pink','bg-teal','bg-twitter','bg-secondary']
    }
  },
  props: {
    page: {
      type: String
    }
  },
  created() {
    this.loadData();
  },
  methods: {
    async loadData() {
      alert(this.page);
      let result = await this.getContacts(this.page);
      if (result.data){
        this.pagination = this.mixinDatatableDefaults(result.data.page);
        this.contacts = this.$store.state.contact_list;
        this.loadDetails(this.contacts[0].id);
      }else {
        this.contacts = [];
        this.pagination = {};
      }
    },

    async loadDetails(personId) {
      this.findContactsById(personId);
    },

    getRandomColor() {
      return `avatar-initial rounded-circle ${this.colors[Math.floor(Math.random() * this.colors.length)]}`;
    },

    alll(x){
      alert(x)

    },

    getFirstString(data) {
      return data.charAt(0).toUpperCase();
    }
  }
}
</script>

<style scoped>
.pointer-cursor { cursor: pointer !important; }
</style>



