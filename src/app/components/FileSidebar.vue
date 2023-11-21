<template>
  <div class="filemgr-sidebar">
    <div class="filemgr-sidebar-header">
      <div class="dropdown dropdown-icon flex-fill">
        <button class="btn btn-xs btn-white w-100" data-bs-toggle="dropdown">New <i data-feather="chevron-down"></i></button>
        <div class="dropdown-menu tx-13">
          <a href="" class="dropdown-item"><i data-feather="folder"></i><span>Folder</span></a>
          <a href="" class="dropdown-item"><i data-feather="file"></i><span>Notes</span></a>
          <div class="dropdown-divider"></div>
          <a href="" class="dropdown-item"><i data-feather="file-text"></i><span>Word Document</span></a>
          <a href="" class="dropdown-item"><i data-feather="file-text"></i><span>Powepoint</span></a>
          <a href="" class="dropdown-item"><i data-feather="file-text"></i><span>Excel Spreadsheet</span></a>
        </div><!-- dropdown-menu -->
      </div><!-- dropdown -->
      <div class="dropdown dropdown-icon flex-fill mg-l-10">
        <button class="btn btn-xs btn-primary w-100" data-bs-toggle="dropdown">Upload <i data-feather="chevron-down"></i></button>
        <div class="dropdown-menu tx-13">
          <a href="" class="dropdown-item"><i data-feather="file"></i><span>File</span></a>
          <a href="" class="dropdown-item"><i data-feather="folder"></i><span>Folder</span></a>
        </div><!-- dropdown-menu -->
      </div><!-- dropdown -->
    </div><!-- filemgr-sidebar-header -->
    <div class="filemgr-sidebar-body">
      <div class="pd-t-20 pd-b-10 pd-x-10">
        <label class="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">My Drive</label>
        <nav class="nav nav-sidebar tx-13">
          <a href="" class="nav-link active"><i data-feather="folder"></i> <span>All Files</span></a>
          <a href="" class="nav-link"><i data-feather="monitor"></i> <span>My Devices</span></a>
          <a href="" class="nav-link"><i data-feather="clock"></i> <span>Recents</span></a>
          <a href="" class="nav-link"><i data-feather="star"></i> <span>Important</span></a>
          <a href="" class="nav-link"><i data-feather="trash"></i> <span>Deleted Files</span></a>
        </nav>
      </div>
      <div class="pd-10">
        <label class="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 pd-l-10">File Library</label>
        <nav class="nav nav-sidebar tx-13">
          <a href="" class="nav-link"><i data-feather="file"></i> <span>Documents</span></a>
          <a href="" class="nav-link"><i data-feather="image"></i> <span>Images</span></a>
          <a href="" class="nav-link"><i data-feather="video"></i> <span>Videos</span></a>
          <a href="" class="nav-link"><i data-feather="music"></i> <span>Audio</span></a>
          <a href="" class="nav-link"><i data-feather="package"></i> <span>Zip Files</span></a>
        </nav>
      </div>
      <div class="pd-y-10 pd-x-20">
        <label class="tx-sans tx-uppercase tx-medium tx-10 tx-spacing-1 tx-color-03 mg-b-15">Storage Status</label>

        <div class="media">
          <i data-feather="database" class="wd-30 ht-30"></i>
          <div class="media-body mg-l-10">
            <div class="tx-12 mg-b-4">10.2GB used of 50GB</div>
            <div class="progress ht-3 mg-b-20">
              <div class="progress-bar wd-15p" role="progressbar" aria-valuenow="15" aria-valuemin="0" aria-valuemax="100"></div>
            </div>
          </div><!-- media-body -->
        </div><!-- media -->
        <p class="tx-12">Get 2TB (2,000GB) of storage now and get 40% off. Offers ends soon. <a href="">Learn more</a></p>
      </div>
    </div><!-- filemgr-sidebar-body -->
  </div><!-- filemgr-sidebar -->
</template>

<script>
export default {
  name: "FileSidebar"
}
</script>

<style scoped>

</style>
