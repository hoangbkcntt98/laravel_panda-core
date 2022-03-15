import $ from "jquery";
import {setCookie} from '../../utils';
/**
 * Dropdown action in sidebar
 * @param id id of item in sidebar
 */
function dropdownSidebar(id: string) {
    console.log(`.panda-sidebar__sub-items:not(#panda-sidebar-item-${id})`)
    let icon_text = $('#panda-sidebar-item-' + id).children('.panda-dropdown-sidebar-icon').eq(0).children().text()
    $('#panda-sidebar-item-' + id).children('.panda-dropdown-sidebar-icon').eq(0).children().text(icon_text=="chevron_right"?'expand_more':'chevron_right')
    $(`.panda-sidebar__items:not(#panda-sidebar-item-${id})`).removeClass('panda-dropdown-selected')
    $('#panda-sidebar-item-' + id).toggleClass('panda-dropdown-selected')
    $(`.panda-sidebar__sub-items:not(#panda-dropdown-sidebar-sub-item-${id})`).removeClass('panda-sidebar__sub-items-show')
    $('#panda-dropdown-sidebar-sub-item-' + id).toggleClass('panda-sidebar__sub-items-show')
    setCookie('sidebarActive',id,30);
}
export default {dropdownSidebar};