import data from "./data.js";

import linkBuilder from './components/linkCreator.js'
import iconBuilder from './components/iconCreator.js'

import './listeners/toggleLinkListener.js'

const links = document.querySelector('.links');
const icons = document.querySelector('.social-icons');


/* -- add links to DOM -- */

data.links.forEach((linkData) => {
    const link = linkBuilder(linkData);
    links.append(link);
});

/* -- add icons to DOM -- */ 

data.icons.forEach((iconData) => {
    const icon = iconBuilder(iconData);
    icons.append(icon);
});

/* -- add toggle styles to button -- */



