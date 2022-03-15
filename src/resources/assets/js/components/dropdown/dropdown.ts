import $ from "jquery";
/**
 * Dropdown action in sidebar
 * @param id id of item in sidebar
 */
function dropdownSidebar(id: string) {
    $('#panda-sidebar-item-' + id).children('.panda-dropdown-sidebar-icon').toggleClass('panda-rotate-90')
    // $('.panda-sidebar__items').removeClass('panda-sidebar__selected')
    // $('#panda-sidebar-item-' + id).toggleClass('panda-sidebar__selected')
    $('#panda-dropdown-sidebar-sub-item-' + id).toggleClass('panda-show')
}
export default {dropdownSidebar};