import '../css/app.scss'
import dropdown from './components/dropdown/dropdown';
import page from './components/pages/pages';
import logo from './components/logo/logo';
import button from './components/button';

(<any> window).PANDA = {
    dropdown,
    page,
    logo,
    button
}
logo.init();