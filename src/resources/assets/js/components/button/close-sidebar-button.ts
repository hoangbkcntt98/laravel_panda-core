import $ from "jquery";
import { replaceClass, setCssAttributes } from '../../utils'
const toogle = (): void => {
    let buttonText = $('#panda-toogle-sidebar-button-icon').text();
    if (buttonText == "chevron_right") {
        replaceClass('.panda-sidebar', 'panda-sidebar-show', 'panda-sidebar-hide');
        $('#panda-toogle-sidebar-button-icon').text('chevron_left')
        setCssAttributes(['.panda-content','.panda-navbar'], [
            { key: 'padding-left', val: '230px' }
        ]);
        replaceClass('.panda-toogle-sidebar-button', 'panda-toogle-sidebar-button-show', 'panda-toogle-sidebar-button-hide');
    } else {
        replaceClass('.panda-sidebar', 'panda-sidebar-hide', 'panda-sidebar-show');
        $('#panda-toogle-sidebar-button-icon').text('chevron_right')
        setCssAttributes(['.panda-content','.panda-navbar'], [
            { key: 'padding-left', val: '20px' },
            { key: 'transition', val: 'ease-in 0.5s' }
        ]);
        // $('.panda-content').css('padding-left', '20px').css('transition', 'ease-in 0.5s');
        replaceClass('.panda-toogle-sidebar-button', 'panda-toogle-sidebar-button-hide', 'panda-toogle-sidebar-button-show');
    }

}
export default { toogle };