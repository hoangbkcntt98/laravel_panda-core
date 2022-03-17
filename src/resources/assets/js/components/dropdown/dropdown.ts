import $ from "jquery";
import {setCookie} from '../../utils';
/**
 * Dropdown action in sidebar
 * @param id id of item in sidebar
 */
function dropdownSidebar(id: string) {
    let icon_text = $('#panda-sidebar-item-' + id).children('.panda-dropdown-sidebar-icon').eq(0).children().text()
    let after_icon = ''
    console.log('icontext',icon_text)
    if(icon_text=="chevron_right"){
        after_icon = "expand_more"
    }else{
        after_icon = "chevron_right"
    }
    $('.panda-dropdown-sidebar-icon').children().text("chevron_right")
    $('#panda-sidebar-item-' + id).children('.panda-dropdown-sidebar-icon').eq(0).children().text(after_icon)
    $(`.panda-sidebar__sub-items:not(#panda-dropdown-sidebar-sub-item-${id})`).removeClass('panda-sidebar__sub-items-show')
    $('#panda-dropdown-sidebar-sub-item-' + id).toggleClass('panda-sidebar__sub-items-show')
    setCookie('sidebarActive',id,30);
}
export default {dropdownSidebar};