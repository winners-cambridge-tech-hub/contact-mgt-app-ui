<template>
  <div class="modal fade effect-scale" id="modalViewDetails" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body pd-20 pd-sm-30">
          <button type="button" class="btn-close pos-absolute t-15 r-15" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>

          <h5 class="tx-18 tx-sm-20 mg-b-30">View Details</h5>

          <div class="row mg-b-10">
            <div class="col-4">Filename:</div>
            <div class="col-8">Medical Certificate.pdf</div>
          </div><!-- row -->
          <div class="row mg-b-10">
            <div class="col-4">File ype:</div>
            <div class="col-8">PDF File</div>
          </div><!-- row -->
          <div class="row mg-b-10">
            <div class="col-4">File Size:</div>
            <div class="col-8">10.45 KB</div>
          </div><!-- row -->
          <div class="row mg-b-10">
            <div class="col-4">Created:</div>
            <div class="col-8">Monday, July 02, 2018 9:34am</div>
          </div><!-- row -->
          <div class="row mg-b-10">
            <div class="col-4">Modified:</div>
            <div class="col-8">Monday, July 02, 2018 9:34am</div>
          </div><!-- row -->
          <div class="row mg-b-10">
            <div class="col-4">Accessed:</div>
            <div class="col-8">Monday, July 02, 2018 9:34am</div>
          </div><!-- row -->
          <div class="row mg-b-10">
            <div class="col-4">Description:</div>
            <div class="col-8">
              <textarea class="form-control mg-t-5" rows="2" placeholder="Add description"></textarea>
            </div>
          </div><!-- row -->

        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary mg-sm-l-5" data-bs-dismiss="modal">Close</button>
        </div><!-- modal-footer -->
      </div><!-- modal-content -->
    </div><!-- modal-dialog -->
  </div><!-- modal -->

  <div class="modal fade effect-scale" id="modalShare" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body pd-20 pd-sm-30">
          <button type="button" class="btn-close pos-absolute t-15 r-15" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>

          <h5 class="tx-18 tx-sm-20 mg-b-30">Share With Others</h5>

          <div class="mg-t-20">
            <label class="d-block">Other users:</label>
            <input class="form-control" placeholder="Enter names or email addresses">
            <div class="dropdown mg-t-10">
              Rights: <a href="" class="dropdown-link d-inline-flex align-items-center" data-bs-toggle="dropdown">Allow editing <ion-icon name="chevron-down-outline" class="tx-12"></ion-icon></a>
            </div><!-- dropdown -->
            <hr>
            <label class="d-block">More:</label>
            <nav class="nav nav-social">
              <a href="" class="nav-link"><i data-feather="facebook"></i></a>
              <a href="" class="nav-link"><i data-feather="twitter"></i></a>
            </nav>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary">Share</button>
        </div><!-- modal-footer -->
      </div><!-- modal-content -->
    </div><!-- modal-dialog -->
  </div><!-- modal -->

  <div class="modal fade effect-scale" id="modalCopy" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body pd-20 pd-sm-30">
          <button type="button" class="btn-close pos-absolute t-15 r-15" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>

          <h5 class="tx-18 tx-sm-20 mg-b-0">Copy Item to</h5>
          <p class="mg-b-25 tx-color-03">Please select a folder</p>

          <div class="bd bg-ui-01 pd-10">
            <ul class="nav nav-sidebar flex-column tx-13">
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> Downloads</a></li>
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> Personal Stuff</a></li>
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> 3d Objects</a></li>
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> Recordings</a></li>
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> Support</a></li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary mg-sm-r-5" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Copy</button>
        </div><!-- modal-footer -->
      </div><!-- modal-content -->
    </div><!-- modal-dialog -->
  </div><!-- modal -->

  <div class="modal fade effect-scale" id="modalMove" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-body pd-20 pd-sm-30">
          <button type="button" class="btn-close pos-absolute t-15 r-15" data-bs-dismiss="modal" aria-label="Close">
            <span aria-hidden="true"></span>
          </button>

          <h5 class="tx-18 tx-sm-20 mg-b-0">Move Item to</h5>
          <p class="mg-b-25 tx-color-03">Please select a folder</p>

          <div class="bd bg-ui-01 pd-10">
            <ul class="nav nav-sidebar flex-column tx-13">
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> Downloads</a></li>
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> Personal Stuff</a></li>
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> 3d Objects</a></li>
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> Recordings</a></li>
              <li class="nav-item"><a href="" class="nav-link"><i data-feather="folder"></i> Support</a></li>
            </ul>
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary mg-sm-r-5" data-bs-dismiss="modal">Close</button>
          <button type="button" class="btn btn-primary">Move</button>
        </div><!-- modal-footer -->
      </div><!-- modal-content -->
    </div><!-- modal-dialog -->
  </div><!-- modal -->

  <div class="pos-fixed b-10 r-10">
    <div id="toast" class="toast bg-dark bd-0 wd-300" data-delay="3000" role="alert" aria-live="assertive" aria-atomic="true">
      <div class="toast-header bg-transparent bd-white-1 d-flex align-items-center">
        <h6 class="tx-white mg-b-0 mg-r-auto">Downloading</h6>
        <a href="" class="close ml-2 mb-1 tx-normal tx-shadow-none text-white tx-24 lh-1" data-bs-dismiss="toast" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </a>
      </div>
      <div class="toast-body pd-10 tx-white">
        <h6 class="mg-b-0 text-white">Medical_Certificate.pdf</h6>
        <span class="tx-color-03 tx-11">1.2mb of 4.5mb</span>
        <div class="progress ht-5 mg-t-5">
          <div class="progress-bar wd-50p" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
        </div>
      </div>
    </div><!-- toast -->
  </div>
</template>

<script>
export default {
  name: "FileDialogs"
}
</script>

<style scoped>

</style>
