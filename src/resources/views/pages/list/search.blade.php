<div class="panda-container">
    <form class="panda-section panda-search lightning-box-shadow-all">
        <div class="panda-row">
            {{-- query --}}
            @include('pages.list.query')
            @include('pages.list.search_extend')
        </div>
        <div class="row panda-center">
            <button class="btn btn-primary panda-center"><span class="material-icons md-18">search</span>Search</button>
        </div>
    </form>
</div>
