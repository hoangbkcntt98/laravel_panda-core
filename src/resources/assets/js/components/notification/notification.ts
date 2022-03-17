import $ from "jquery";
import { replaceClass, setCssAttributes, switchClass} from '../../utils'
function showNotification(element: HTMLDivElement){
    let dropdown = $(element).children('.panda-notification__container');
    console.log(element)
    $('.panda-icon').removeClass('panda-notification-selected');
    
    if(dropdown.hasClass('panda-show')){
        dropdown.removeClass('panda-show')
        dropdown.addClass('panda-hide')
        $(element).removeClass('panda-notification-selected')
    }else{
        $('.panda-notification__container').removeClass('panda-show');
        $(element).children('.panda-notification__container').addClass('panda-show')
        $(element).addClass('panda-notification-selected')
        
    }
   
}
export default {
    showNotification
}