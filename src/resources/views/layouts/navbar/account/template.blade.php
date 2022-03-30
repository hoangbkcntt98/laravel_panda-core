<div class="panda-dropdown__wrapper {{ $wrapper_class ?? '' }}">
    <div class="panda-dropdown__toggle {{ $toggle_class ?? '' }}" onclick="PANDA.commonDropdown.dropdown(this)">
        <div class="panda-navbar__account__wrapper">
            <div class="panda-navbar__account__avt">
                <img src="assets/images/panda-avt.jpg" alt="">
            </div>
            <div class="panda-navbar__account__name">
                Admin
            </div>
        </div>
    </div>
    <div class="panda-dropdown__container {{ $container_class ?? '' }}">
        <div class="panda-navbar__account__dropdown__item">Helo</div>
        <div class="panda-navbar__account__dropdown__item"></div>
        <div class="panda-navbar__account__dropdown__item"></div>
        <div class="panda-navbar__account__dropdown__item"></div>
        <div class="panda-navbar__account__dropdown__item"></div>
    </div>
</div>
