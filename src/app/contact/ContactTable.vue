<template>

 <Header/>

  <div class="filemgr-wrapper">

    <FileSidebar/>

    <div class="filemgr-content">

      <div class="filemgr-content-header">
        <i data-feather="search"></i>
        <div class="search-form">
          <input type="search" class="form-control" placeholder="Search for files and folders">
        </div><!-- search-form -->
        <nav class="nav d-none d-sm-flex mg-l-auto">
          <a href="" class="nav-link"><i data-feather="list"></i></a>
          <a href="" class="nav-link"><i data-feather="alert-circle"></i></a>
          <a href="" class="nav-link"><i data-feather="settings"></i></a>
        </nav>
      </div><!-- filemgr-content-header -->


      <div class="filemgr-content-body">
        <div class="pd-20 pd-lg-25 pd-xl-30">
          <h4 class="mg-b-15 mg-lg-b-25">All Files</h4>

          <label class="d-block tx-medium tx-10 tx-uppercase tx-sans tx-spacing-1 tx-color-03 mg-b-15">Recently Accessed Files</label>

          <div class="row row-xs" style="margin-top: -10px;">

            <div href="#offCanvas3" class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
              <div class="card card-file">
                <div class="dropdown-file">
                  <a href="" class="dropdown-link" data-bs-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="#offCanvas3" class="dropdown-item details off-canvas-menu"><i data-feather="info"></i>View Details</a>
                    <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                    <a href="#modalShare" data-bs-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                    <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                    <a href="#modalCopy" data-bs-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                    <a href="#modalMove" data-bs-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                    <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                    <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                  </div>
                </div><!-- dropdown -->
                <div class="card-file-thumb tx-primary">
                  <div class="avatar avatar-xl avatar-online"><img src="http://themepixels.me/demo/dashforge1.1/assets/img/img14.jpg" class="rounded-circle" alt=""></div>
                </div>
                <div class="card-body">
                  <h6><a href="#offCanvas3" class="link-02 off-canvas-menu"> AKinwale Arije Badmus</a></h6>
                  <p>akinwale@zmt.com</p>
                  <span>10.45kb</span>
                </div>
              </div>
            </div><!-- col -->

            <div href="#offCanvas3" class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
              <div class="card card-file">
                <div class="dropdown-file">
                  <a href="" class="dropdown-link" data-bs-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="#offCanvas3" class="dropdown-item details off-canvas-menu"><i data-feather="info"></i>View Details</a>
                    <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                    <a href="#modalShare" data-bs-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                    <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                    <a href="#modalCopy" data-bs-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                    <a href="#modalMove" data-bs-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                    <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                    <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                  </div>
                </div><!-- dropdown -->
                <div class="card-file-thumb tx-primary">
                  <div class="avatar avatar-xl avatar-online"><img src="http://themepixels.me/demo/dashforge1.1/assets/img/img14.jpg" class="rounded-circle" alt=""></div>
                </div>
                <div class="card-body">
                  <h6><a href="#offCanvas3" class="link-02 off-canvas-menu"> AKinwale Arije Badmus</a></h6>
                  <p>akinwale@zmt.com</p>
                  <span>10.45kb</span>
                </div>
              </div>
            </div><!-- col -->

            <div href="#offCanvas3" class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
              <div class="card card-file">
                <div class="dropdown-file">
                  <a href="" class="dropdown-link" data-bs-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="#offCanvas3" class="dropdown-item details off-canvas-menu"><i data-feather="info"></i>View Details</a>
                    <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                    <a href="#modalShare" data-bs-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                    <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                    <a href="#modalCopy" data-bs-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                    <a href="#modalMove" data-bs-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                    <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                    <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                  </div>
                </div><!-- dropdown -->
                <div class="card-file-thumb tx-primary">
                  <div class="avatar avatar-xl avatar-online"><img src="http://themepixels.me/demo/dashforge1.1/assets/img/img14.jpg" class="rounded-circle" alt=""></div>
                </div>
                <div class="card-body">
                  <h6><a href="#offCanvas3" class="link-02 off-canvas-menu"> AKinwale Arije Badmus</a></h6>
                  <p>akinwale@zmt.com</p>
                  <span>10.45kb</span>
                </div>
              </div>
            </div><!-- col -->

            <div href="#offCanvas3" class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
              <div class="card card-file">
                <div class="dropdown-file">
                  <a href="" class="dropdown-link" data-bs-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="#offCanvas3" class="dropdown-item details off-canvas-menu"><i data-feather="info"></i>View Details</a>
                    <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                    <a href="#modalShare" data-bs-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                    <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                    <a href="#modalCopy" data-bs-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                    <a href="#modalMove" data-bs-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                    <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                    <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                  </div>
                </div><!-- dropdown -->
                <div class="card-file-thumb tx-primary">
                  <div class="avatar avatar-xl avatar-online"><img src="http://themepixels.me/demo/dashforge1.1/assets/img/img14.jpg" class="rounded-circle" alt=""></div>
                </div>
                <div class="card-body">
                  <h6><a href="#offCanvas3" class="link-02 off-canvas-menu"> AKinwale Arije Badmus</a></h6>
                  <p>akinwale@zmt.com</p>
                  <span>10.45kb</span>
                </div>
              </div>
            </div><!-- col -->

            <div href="#offCanvas3" class="col-6 col-sm-4 col-md-3 col-xl mg-t-10">
              <div class="card card-file">
                <div class="dropdown-file">
                  <a href="" class="dropdown-link" data-bs-toggle="dropdown"><i data-feather="more-vertical"></i></a>
                  <div class="dropdown-menu dropdown-menu-end">
                    <a href="#offCanvas3" class="dropdown-item details off-canvas-menu"><i data-feather="info"></i>View Details</a>
                    <a href="" class="dropdown-item important"><i data-feather="star"></i>Mark as Important</a>
                    <a href="#modalShare" data-bs-toggle="modal" class="dropdown-item share"><i data-feather="share"></i>Share</a>
                    <a href="" class="dropdown-item download"><i data-feather="download"></i>Download</a>
                    <a href="#modalCopy" data-bs-toggle="modal" class="dropdown-item copy"><i data-feather="copy"></i>Copy to</a>
                    <a href="#modalMove" data-bs-toggle="modal" class="dropdown-item move"><i data-feather="folder"></i>Move to</a>
                    <a href="#" class="dropdown-item rename"><i data-feather="edit"></i>Rename</a>
                    <a href="#" class="dropdown-item delete"><i data-feather="trash"></i>Delete</a>
                  </div>
                </div><!-- dropdown -->
                <div class="card-file-thumb tx-primary">
                  <div class="avatar avatar-xl avatar-online"><img src="http://themepixels.me/demo/dashforge1.1/assets/img/img14.jpg" class="rounded-circle" alt=""></div>
                </div>
                <div class="card-body">
                  <h6><a href="#offCanvas3" class="link-02 off-canvas-menu"> AKinwale Arije Badmus</a></h6>
                  <p>akinwale@zmt.com</p>
                  <span>10.45kb</span>
                </div>
              </div>
            </div><!-- col -->

            <div class="d-none d-xl-block wd-100p ht-10"></div>


          </div><!-- row -->
        </div>
      </div><!-- filemgr-content-body -->
    </div><!-- filemgr-content -->

  </div><!-- filemgr-wrapper -->




  <div id="offCanvas3" class="off-canvas off-canvas-overlay off-canvas-right" style="width:80%">
    <a href="#" class="close"><i data-feather="x"></i></a>

    <div class="pd-25 ht-100p tx-13">
      <h6 class="tx-inverse mg-t-50 mg-b-25">What does royalty free mean?</h6>
      <p class="mg-b-25">Royalty free means you just need to pay for rights to use the item once per end product. You don't need to pay additional or ongoing fees for each person who sees or uses it.</p>
      <a href="" class="btn btn-primary btn-block">Learn More</a>
    </div>
  </div><!-- off-canvas -->






</template>

<script>

import footerScriptMixin from "@/mixins/footer-script";
import Header from "../components/Header";
import FileSidebar from "../components/FileSidebar";

export default {
  name: "ContactTable",
  mixins: [footerScriptMixin],
  components: {FileSidebar, Header},
  created() {
    this.footerScript();
    this.mixinFileTableScript();
  }
}
</script>

<style>
@import '../../assets/css/dashforge.filemgr.css';
</style>
