<div class="panda-navbar lightning-box-shadow-bottom">
    <button id="close" class="panda-toogle-sidebar-button" onclick="PANDA.button.closeSidebarButton.toogle()">
        <i class="material-icons" id="panda-toogle-sidebar-button-icon">menu</i>
    </button>
    <div class="panda-logo">
        <img src="" alt="">
    </div>

    <div class="panda-navbar__search-bar">
        <div class="panda-navbar__search-bar__input">
            <input type="text">
            <div class="panda-navbar__search-bar__input__button"><i class="material-icons">search</i></div>
        </div>
    </div>
    <div class="panda-navbar__notification">
        @foreach (['email','notifications','email','light_mode'] as $icon)
        @include('components.icon.icon', [
            'name' => $icon,
            'size' => 43,
            'count' => 123
        ])
        @endforeach
    </div>
    <div class="panda-navbar__account  lightning-main-color-admin">
        <div class="panda-navbar__account__avt">
            <img src="assets/images/panda-avt.jpg" alt="">
        </div>
        <div class="panda-navbar__account__name">
            Admin
        </div>
    </div>
</div>
{{-- <div class="panda-navbar__line lightning-main-color-admin"></div> --}}
