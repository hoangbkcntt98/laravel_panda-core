import $ from "jquery";
function showNotification(element: HTMLDivElement){
    let dropdown = $(element).next('.panda-notification__container');
    $('.panda-icon').removeClass('panda-notification-selected');
    if(dropdown.hasClass('panda-show')){
        dropdown.removeClass('panda-show')
        dropdown.addClass('panda-hide')
        $(element).removeClass('panda-notification-selected')
    }else{
        $('.panda-notification__container').removeClass('panda-show');
        dropdown.addClass('panda-show')
        $(element).addClass('panda-notification-selected')   
    }  
}
export default {
    showNotification,
}