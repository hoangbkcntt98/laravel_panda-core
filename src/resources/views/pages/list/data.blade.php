@if (count($data) > 0)
    <div class="panda-list__table padding-5">
        <div class="panda-list__table__data is-flex">
            <div class="panda-data">
                <table class="table table-bordered ">
                    @foreach ($data as $item)
                    @endforeach
                    <thead class="thead-light">
                        <tr>
                            <th class="fixed-first-column"> <input type="checkbox" name="item_check_all"
                                    onchange="PANDA.list.checkAll(this)" /></th>
                            @foreach ($columns as $col => $setting)
                                @if ($setting || $setting['show'])
                                    <th>{{ $model::getLocalizationColumn($col) }}</th>
                                @endif
                            @endforeach
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($data as $item)
                            <tr>
                                <td style="width: 12px" class="fixed-first-column"><input class="select-row"
                                        type="checkbox" _id="{{ $item['id'] }}" /></td>
                                @foreach ($columns as $col => $setting)
                                    <td>{{ $item[$col] }}</td>
                                @endforeach

                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
            <div class="panda-option">
                <table class="table table-bordered ">

                    <thead class="thead-light">
                        <tr>
                            <th>&nbsp
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($data as $item)
                            <tr>

                                @if ($options->count() > 0)
                                    <td>
                                        @include('components.table.dropdown')
                                    </td>
                                @endif
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>

        <div class="is-flex">
            @php
                $limit = config('panda.limit_options');
            @endphp
            <div class="panda-list__table__perpage panda-center" style="min-width: 20%">
                <span>Showing &nbsp;</span>
                @include(viewDefault('components.form.select'), [
                    'is_flex' => true,
                    'name' => 'perpage',
                    'data' => $limit_options ?? $limit,
                    'extend_class' => 'panda-center panda-limit',
                    'select_extend_style' => 'height:20px;',
                    'default_val' => request()->get('limit') ?? config('panda.limit'),
                    'onchange' => 'PANDA.list.setLimit(this.value)'
                ])
                <span>&nbsp;<b>/{{ $data->count() }}</b> entries</span>
            </div>
            @include('components.paginator.custom')
        </div>

    </div>
@else
    <div class="no-data">
        {{ trans('common.no-data') }}
    </div>
@endif
