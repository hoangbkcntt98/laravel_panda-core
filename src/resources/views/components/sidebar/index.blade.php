<div class="panda-sidebar">
    @php
        $menus = config('menu.pc');
    @endphp
    @foreach ($menus as $menu)
        <div class="panda-sidebar__items">
            @if ($menu['sub_menu'] ?? false)
                {{ $menu['index'] }}
                <button class="material-icons panda-dropdown-button">arrow_right</button>
                <div class="panda-sidebar__sub-items">
                    
                    @foreach ($menu['sub_menu'] as $sub_menu)
                        <div>{{ $sub_menu }}</div>
                    @endforeach
                </div>
            @else
                {{ $menu['index'] }}
            @endif
        </div>
    @endforeach
</div>
