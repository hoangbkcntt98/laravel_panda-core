import  Logo from '../../../images/logo.png';

import $ from "jquery";
function init(){
    $('.panda-logo').children('img').attr('src',Logo);
    $('.panda-navbar').children('img').attr('src',Logo);
    $('.panda-logo').on('click',function(){
        window.location.replace('');
    })
}
export default {init};