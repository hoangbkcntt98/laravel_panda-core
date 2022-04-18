<button class="btn btn-primary" style="max-height:30px" onclick="PANDA.accordion.next(this)">
    <span class="material-icons md-18">more_horiz</span>
</button>
<div class="width-100 panda-center gap-5 panda-panel" style="flex-wrap: wrap">
    <button type="button" class="btn btn-success panda-center ">
        <span class="material-icons md-18">add</span><span>Create</span></button>
    <button type="button" class="btn btn-primary panda-center">
        <span class="material-icons md-18">file_download</span>Export</button>
    <button type="button" class="btn btn-primary panda-center">
        <span class="material-icons md-18">file_upload</span>Import</button>
    <button type="button" class="btn btn-danger panda-center" onclick="PANDA.list.deleteItems()">
        <span class="material-icons md-18">delete</span>Delete</button>
</div>
<br>