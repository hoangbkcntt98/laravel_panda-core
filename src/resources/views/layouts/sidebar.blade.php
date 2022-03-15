@php
$menus = config('menu.pc');
@endphp

<button id = "close" class="panda-toogle-sidebar-button" onclick="PANDA.button.closeSidebarButton.toogle()">
    <i class="material-icons" id = "panda-toogle-sidebar-button-icon">chevron_left</i>
</button>

<div class="panda-sidebar">
    <div class="panda-navbar">
        <div class="panda-logo">
            <img src="" alt="">
        </div>
        
    </div>
    @foreach ($menus as $key => $menu)
        <div class="panda-sidebar__items" id = "panda-sidebar-item-{{$key}}" onclick={{ isset($menu['sub_menu']) ? "PANDA.dropdown.dropdownSidebar('".$key."')" : "PANDA.page.redirect('".route($key)."')"}}>
            @include('components.dropdown.sidebar.dropdown_content',['text'=> $menu['index'] ])
            @if ($menu['sub_menu'] ?? false)
                @include('components.dropdown.sidebar.dropdown_icon')
            @endif
        </div>
        @if ($menu['sub_menu'] ?? false)
                <div class="panda-sidebar__sub-items" id = "panda-dropdown-sidebar-sub-item-{{$key}}">
                    @foreach ($menu['sub_menu'] as $key => $value)
                        <div onclick = {{"PANDA.page.redirect('".route($key)."')"}} class="panda-sidebar__sub-items__item">{{ $value }}</div>
                    @endforeach
                </div>
            @endif
    @endforeach
</div>
