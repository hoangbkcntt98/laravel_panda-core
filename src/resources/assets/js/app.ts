import '../css/app.scss'
import dropdown from './components/dropdown/dropdown';
import page from './components/pages/pages';
import button from './components/button';
import notification from './components/layout/navbar/notification';
import navbar from './components/layout/navbar/account';
import commonDropdown from './components/common/dropdown';
import { importAll } from './utils';
(<any>window).PANDA = {
    commonDropdown,
    navbar,
    dropdown,
    page,
    button,
    notification
}
commonDropdown.init();
importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
$(document).click(function () {
    var container = $(".panda-box");
    var icon = $(".panda-icon")
    var click = $(".clickable")
    event.stopPropagation();
    // if (event.target instanceof Element) {
    //     console.log(click.is(event.target),click.has(event.target).length)
    //     if (!$(event.target).closest('panda-box').length&&!container.is(event.target) && !container.has(event.target).length && !click.is(event.target) && click.has(event.target).length!=0) {
    //         if (container.hasClass('panda-show')) {
    //             container.removeClass('panda-show')
    //             // container.addClass('panda-hide')
    //             $('.panda-icon').removeClass('panda-notification-selected')
    //         }
    //     }
    // }
});