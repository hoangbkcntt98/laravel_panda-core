import $ from "jquery";
function dropdownClickButton(){
    $('.panda-dropdown-button').on('click',function(){
        this.classList.toggle('panda-rotate-90')
        $('.panda-sidebar__sub-items').toggleClass('panda-show')
    })
}
export default dropdownClickButton;