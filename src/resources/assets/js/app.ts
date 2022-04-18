import '../css/app.scss'
import dropdown from './components/dropdown/dropdown';
import page from './components/pages/pages';
import button from './components/button';
import notification from './components/layout/navbar/notification';
import navbar from './components/layout/navbar/account';
import commonDropdown from './components/common/dropdown';
import accordion from './components/accordion/accordion';
import list from './components/list';
import { importAll } from './utils';
(<any>window).PANDA = {
    commonDropdown,
    navbar,
    dropdown,
    page,
    button,
    notification,
    accordion,
    list
};
window.onload = () =>{
    commonDropdown.init();
}

importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));