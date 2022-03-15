@php
    $menus = config('menu.pc');
@endphp

<button id="close" class="panda-toogle-sidebar-button" onclick="PANDA.button.closeSidebarButton.toogle()">
    <i class="material-icons" id="panda-toogle-sidebar-button-icon">chevron_left</i>
</button>

<div class="panda-sidebar">
    <div class="panda-logo">
        <img src="" alt="">
    </div>
    @include(view_index('components.input'),['type'=>'hidden','id' => "selected_item"])
    @foreach ($menus as $key => $menu)
        @php
            $has_submenu = isset($menu['sub_menu']);
            $current_route = Route::currentRouteName();
            $keys = $has_submenu?array_keys($menu['sub_menu']):[];
            $contain_curr_route = in_array($current_route,$keys);
            $selected = ($key == $current_route);
            $child_selected = ($has_submenu&&$contain_curr_route);
        @endphp
        <div class="panda-sidebar__items {{$selected?'panda-dropdown-selected':''}}" id="panda-sidebar-item-{{ $key }}"
            onclick={{ isset($menu['sub_menu'])? "PANDA.dropdown.dropdownSidebar('" . $key . "')": "PANDA.page.redirect('" . route($key) . "')" }}>
            @include('components.dropdown.sidebar.dropdown_content', [
                'text' => $menu['index'],
                'icon' => $menu['icon'] ?? false,
            ])
            @if ($menu['sub_menu'] ?? false)
                @include('components.dropdown.sidebar.dropdown_icon')
            @endif
        </div>
        @if ($menu['sub_menu'] ?? false)
            <div class="panda-sidebar__sub-items {{$child_selected?"panda-sidebar__sub-items-show":""}}" id="panda-dropdown-sidebar-sub-item-{{ $key }}">
                @foreach ($menu['sub_menu'] as $key => $value)
                    <div onclick={{ "PANDA.page.redirect('" . route($key) . "')" }}
                        class="panda-sidebar__sub-items__item {{$key == Route::currentRouteName()?"panda-dropdown-selected":""}}">
                        {{ $value }}</div>
                @endforeach
            </div>
        @endif
    @endforeach
</div>
