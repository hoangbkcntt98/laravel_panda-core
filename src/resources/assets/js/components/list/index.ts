import { sendAjaxRequest } from "../../utils";
import Swal from 'sweetalert2';

function checkAll(element: HTMLInputElement) {

    if (element.checked == false) {
        $('.select-row').prop('checked', false);
    } else {
        $('.select-row').prop('checked', true);
    }
}

function deleteItems() {
    let ids: string[] = [];
    let checkedAll = $('input[name="item_check_all"]:checked')[0];
    let path = window.location.href.split('?')[0]
    if (checkedAll) {
        Swal.fire({
            title: 'Are you sure?',
            html: `<p>You won't be able to revert this!</p><p>ID: ALL</p>`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    },
                    type: 'POST',
                    url: path + '.delete',
                    data: {
                        'delete_all': true,
                    },
                }).then((res: any) => {
                    console.log(res)
                    if (res.status == 200) {
                        location.reload();
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Cannot delete items!',
                        })
                    }
                }).catch((e) => {
                    console.log(e);
                })
            }
        })
    } else {

        $('.select-row:checked').each(function () {
            ids.push($(this).attr('_id'));
        })
        if (ids.length > 0) {
            Swal.fire({
                title: 'Are you sure?',
                html: `<p>You won't be able to revert this!</p><p>IDS: [${ids}] </p>`,
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                cancelButtonText:'<span class="material-icons md-18">close</span>Cancel',
                confirmButtonText: '<span class="material-icons md-18">delete</span>Delete',
                customClass:{
                    confirmButton:'panda-center',
                    cancelButton:'panda-center'
                }
            
            }).then((result) => {
                if (result.isConfirmed) {
                    $.ajax({
                        headers: {
                            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                        },
                        type: 'POST',
                        url: path + '.delete',
                        data: {
                            'ids': ids
                        },
                    }).then((res: any) => {
                        console.log(res)
                        if (res.status == 200) {
                            location.reload();
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: 'Cannot delete items!',
                            })
                        }
                    }).catch((e) => {
                        console.log(e);
                    })
                }
            })
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Nothing for deleting',
                text: 'Please choice the records which you want to delete!',
            })
        }

    }
}

function setLimit(limit: string) {
    console.log(limit);
    const urlParams = new URLSearchParams(window.location.search);
    urlParams.set('limit', limit);
    (<any>window).location.search = urlParams;

}
export default {
    checkAll,
    deleteItems,
    setLimit
}