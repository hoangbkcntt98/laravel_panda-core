<div class="panda-icon panda-icon-{{ $type ?? 'cycle' }}-{{ $size ?? 41 }}" onclick="PANDA.notification.showNotification(this)">
    @if ($count ?? false)
        <div class="panda-icon-count-{{ $size ?? 41 }} {{ $count >= 100 ? 'panda-icon-count-100' : '' }}">
            {{ $count >= 100 ? '99+' : $count }}
        </div>
    @endif
    <i class=" material-icons md-{{ $mode ?? 'dark' }}">
        {{ $name }}
    </i>
    @include('components.notification.dropdown', [
        'notifications' => [
            'one','two','three','four','five'
        ],
        'icon' => $name,
        'count' => $count
    ])
</div>
