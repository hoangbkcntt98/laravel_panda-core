<div class="panda-navbar lightning-box-shadow-bottom">
    <button id="close" class="panda-toogle-sidebar-button" onclick="PANDA.button.closeSidebarButton.toogle()">
        <i class="material-icons" id="panda-toogle-sidebar-button-icon">menu</i>
    </button>
    <div class="panda-logo">
        <img src="assets/images/panda-logo.png" alt="">
    </div>
    @include(view_index('layouts.navbar.searchbar'))
    @include(view_index('layouts.navbar.notification'))
    @include(view_index('layouts.navbar.account'))
</div>
