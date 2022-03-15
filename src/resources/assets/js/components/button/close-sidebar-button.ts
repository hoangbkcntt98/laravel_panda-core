import $ from "jquery";
import button from ".";
const toogle = (): void => {
   
    let buttonText =  $('#panda-toogle-sidebar-button-icon').text();
    if(buttonText == "chevron_right"){
        $('.panda-sidebar').addClass('panda-sidebar-show').removeClass('panda-sidebar-hide');
        $('#panda-toogle-sidebar-button-icon').text('chevron_left')
        $('.panda-toogle-sidebar-button').addClass('panda-toogle-sidebar-button-show').removeClass('panda-toogle-sidebar-button-hide');
    }else{
        $('.panda-sidebar').addClass('panda-sidebar-hide').removeClass('panda-sidebar-show');
        $('#panda-toogle-sidebar-button-icon').text('chevron_right')
        $('.panda-toogle-sidebar-button').addClass('panda-toogle-sidebar-button-hide').removeClass('panda-toogle-sidebar-button-show');
    }
    
}
export default {toogle};