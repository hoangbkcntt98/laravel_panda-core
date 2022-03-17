import '../css/app.scss'
import dropdown from './components/dropdown/dropdown';
import page from './components/pages/pages';
import logo from './components/logo/logo';
import button from './components/button';
import notification  from './components/notification/notification';
import {importAll} from './utils';
(<any> window).PANDA = {
    dropdown,
    page,
    logo,
    button,
    notification
}
importAll(require.context('../images', false, /\.(png|jpe?g|svg)$/));
logo.init();