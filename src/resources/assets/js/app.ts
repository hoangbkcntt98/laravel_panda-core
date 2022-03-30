import '../css/app.scss'
import dropdown from './components/dropdown/dropdown';
import page from './components/pages/pages';
import button from './components/button';
import notification from './components/notification/notification';
import { importAll } from './utils';
(<any>window).PANDA = {
    dropdown,
    page,
    button,
    notification
}
importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
$(document).click(function () {

    var container = $(".panda-notification__container");
    var icon = $(".panda-icon")
    if (event.target instanceof Element) {
        
        if ($(event.currentTarget).closest('.panda-notification__container').length)
        console.log('has parent')
        if (!$(event.target).closest('panda-notification__container').length&&!container.is(event.target) && !container.has(event.target).length && !icon.is(event.target) && !icon.has(event.target).length) {
            if (container.hasClass('panda-show')) {
                container.removeClass('panda-show')
                container.addClass('panda-hide')
                $('.panda-icon').removeClass('panda-notification-selected')
            }
        }
    }
});