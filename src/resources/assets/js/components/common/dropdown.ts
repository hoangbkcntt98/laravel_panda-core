import $ from 'jquery';
function dropdown(element: HTMLElement) {
    event.stopPropagation();
    let divClick = $(element);
    let divContainer = divClick.next();
    let containers = $('.panda-navbar__notification .panda-dropdown__wrapper .panda-dropdown__container').not(divContainer);
    containers.removeClass('panda-show')
    $('.panda-navbar__account .panda-dropdown__container').removeClass('panda-show')
    if (divContainer.hasClass('panda-show')) {
        divContainer.removeClass('panda-show')
        divClick.children().removeClass('panda-selected')
    } else {
        $('.panda-navbar__notification .panda-dropdown__wrapper').find('*').removeClass('panda-selected')
        divClick.children().addClass('panda-selected')
        divContainer.addClass('panda-show')
    }
}
function init() {
    $(document).click(function () {
        let wrappers = $('.panda-navbar__notification .panda-dropdown__wrapper')
        let accountWrapper = $('.panda-navbar__account')
        if (event.target instanceof Element ) {
            if (!wrappers.has(event.target).length&&!accountWrapper.has(event.target).length){
                accountWrapper.find("*").removeClass('panda-selected');
                accountWrapper.find("*").removeClass('panda-show')
                wrappers.find("*").removeClass('panda-selected')
                wrappers.find("*").removeClass('panda-show')
            }
       }
    });
}
export default {
    dropdown,
    init
}