<div class="panda-dropdown__wrapper {{ $wrapper_class ?? '' }}">
    <div class="panda-dropdown__toggle {{ $toggle_class ?? '' }}" onclick="PANDA.commonDropdown.dropdown(this)">
        @yield('dropdown-toggle')
    </div>
    <div class="panda-dropdown__container {{ $container_class ?? '' }}">
        @yield('dropdown-content')
    </div>
</div>
