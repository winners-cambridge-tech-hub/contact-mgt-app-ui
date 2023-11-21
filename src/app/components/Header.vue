<template>

  <header class="navbar navbar-header navbar-header-fixed">
    <a href="" id="mainMenuOpen" class="burger-menu"><i data-feather="menu"></i></a>
    <a href="" id="contactContentHide" class="burger-menu d-none"><i data-feather="arrow-left"></i></a>
    <div class="navbar-brand">
      <a href="../../index.html" class="df-logo">har<span>vest</span></a>
    </div><!-- navbar-brand -->
    <div id="navbarMenu" class="navbar-menu-wrapper">
      <div class="navbar-menu-header">
        <a href="" class="df-logo">wci-<span>cambridge</span></a>
        <a id="mainMenuClose" href=""><i data-feather="x"></i></a>
      </div><!-- navbar-menu-header -->
      <ul class="nav navbar-menu">
        <li class="nav-label pd-l-20 pd-lg-l-25 d-lg-none">Main Navigation</li>
        <li class="nav-item with-sub active">
          <a href="" class="nav-link"><i data-feather="package"></i> Adress Book</a>
          <ul class="navbar-menu-sub">
            <li class="nav-sub-item"><a href="" class="nav-sub-link"><i data-feather="calendar"></i>Contacts</a></li>
            <li class="nav-sub-item"><a href="" class="nav-sub-link"><i data-feather="message-square"></i>Flow</a></li>
            <li class="nav-sub-item"><a href="" class="nav-sub-link"><i data-feather="users"></i>Tags</a></li>
            <li class="nav-sub-item"><a href="" class="nav-sub-link"><i data-feather="file-text"></i>Key dates</a></li>
            <li class="nav-sub-item"><a href="" class="nav-sub-link"><i data-feather="mail"></i>Communication</a></li>
            <li class="nav-sub-item"><a href="" class="nav-sub-link"><i data-feather="mail"></i>Reports</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link"><i data-feather="pie-chart"></i> Children</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link"><i data-feather="pie-chart"></i> Attendance</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link"><i data-feather="pie-chart"></i> Calendar</a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link"><i data-feather="pie-chart"></i> Small Groups </a>
        </li>
        <li class="nav-item">
          <a href="" class="nav-link"><i data-feather="pie-chart"></i> Rota</a>
        </li>
      </ul>
    </div><!-- navbar-menu-wrapper -->
    <div class="navbar-right">
      <div class="dropdown dropdown-message">
        <a href="" class="dropdown-link new-indicator" data-bs-toggle="dropdown">
          <i data-feather="message-square"></i>
          <span>5</span>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
          <div class="dropdown-header">New Messages</div>
          <a href="" class="dropdown-item">
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle" alt=""></div>
              <div class="media-body mg-l-15">
                <strong>Socrates Itumay</strong>
                <p>nam libero tempore cum so...</p>
                <span>Mar 15 12:32pm</span>
              </div><!-- media-body -->
            </div><!-- media -->
          </a>
          <a href="" class="dropdown-item">
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle" alt=""></div>
              <div class="media-body mg-l-15">
                <strong>Joyce Chua</strong>
                <p>on the other hand we denounce...</p>
                <span>Mar 13 04:16am</span>
              </div><!-- media-body -->
            </div><!-- media -->
          </a>
          <a href="" class="dropdown-item">
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle" alt=""></div>
              <div class="media-body mg-l-15">
                <strong>Althea Cabardo</strong>
                <p>is there anyone who loves...</p>
                <span>Mar 13 02:56am</span>
              </div><!-- media-body -->
            </div><!-- media -->
          </a>
          <a href="" class="dropdown-item">
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle" alt=""></div>
              <div class="media-body mg-l-15">
                <strong>Adrian Monino</strong>
                <p>duis aute irure dolor in repre...</p>
                <span>Mar 12 10:40pm</span>
              </div><!-- media-body -->
            </div><!-- media -->
          </a>
          <div class="dropdown-footer"><a href="">View all Messages</a></div>
        </div><!-- dropdown-menu -->
      </div><!-- dropdown -->
      <div class="dropdown dropdown-notification">
        <a href="" class="dropdown-link new-indicator" data-bs-toggle="dropdown">
          <i data-feather="bell"></i>
          <span>2</span>
        </a>
        <div class="dropdown-menu dropdown-menu-end">
          <div class="dropdown-header">Notifications</div>
          <a href="" class="dropdown-item">
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle" alt=""></div>
              <div class="media-body mg-l-15">
                <p>Congratulate <strong>Socrates Itumay</strong> for work anniversaries</p>
                <span>Mar 15 12:32pm</span>
              </div><!-- media-body -->
            </div><!-- media -->
          </a>
          <a href="" class="dropdown-item">
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle" alt=""></div>
              <div class="media-body mg-l-15">
                <p><strong>Joyce Chua</strong> just created a new blog post</p>
                <span>Mar 13 04:16am</span>
              </div><!-- media-body -->
            </div><!-- media -->
          </a>
          <a href="" class="dropdown-item">
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle" alt=""></div>
              <div class="media-body mg-l-15">
                <p><strong>Althea Cabardo</strong> just created a new blog post</p>
                <span>Mar 13 02:56am</span>
              </div><!-- media-body -->
            </div><!-- media -->
          </a>
          <a href="" class="dropdown-item">
            <div class="media">
              <div class="avatar avatar-sm avatar-online"><img src="https://placehold.co/500" class="rounded-circle" alt=""></div>
              <div class="media-body mg-l-15">
                <p><strong>Adrian Monino</strong> added new comment on your photo</p>
                <span>Mar 12 10:40pm</span>
              </div><!-- media-body -->
            </div><!-- media -->
          </a>
          <div class="dropdown-footer"><a href="">View all Notifications</a></div>
        </div><!-- dropdown-menu -->
      </div><!-- dropdown -->
      <div class="dropdown dropdown-profile">
        <a href="" class="dropdown-link" data-bs-toggle="dropdown" data-display="static">
          <div class="avatar avatar-sm"><img src="https://avatars.githubusercontent.com/u/4556236?v=47" class="rounded-circle" alt=""></div>
        </a><!-- dropdown-link -->
        <div class="dropdown-menu dropdown-menu-end tx-13">
          <div class="avatar avatar-lg mg-b-15"><img src="https://avatars.githubusercontent.com/u/4556236?v=4" class="rounded-circle" alt=""></div>
          <h6 class="tx-semibold mg-b-5">Katherine Pechon</h6>
          <p class="mg-b-25 tx-12 tx-color-03">Administrator</p>

          <a href="" class="dropdown-item"><i data-feather="edit-3"></i> Edit Profile</a>
          <a href="page-profile-view.html" class="dropdown-item"><i data-feather="user"></i> View Profile</a>
          <div class="dropdown-divider"></div>
          <a href="page-help-center.html" class="dropdown-item"><i data-feather="help-circle"></i> Help Center</a>
          <a href="" class="dropdown-item"><i data-feather="life-buoy"></i> Forum</a>
          <a href="" class="dropdown-item"><i data-feather="settings"></i>Account Settings</a>
          <a href="" class="dropdown-item"><i data-feather="settings"></i>Privacy Settings</a>
          <a href="page-signin.html" class="dropdown-item"><i data-feather="log-out"></i>Sign Out</a>
        </div><!-- dropdown-menu -->
      </div><!-- dropdown -->
    </div><!-- navbar-right -->
  </header><!-- navbar -->

</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
