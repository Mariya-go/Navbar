const iconBuilder = (iconData) => {
    // create list item for icon
    const listIcon = document.createElement('li');

    // create icon link
    const iconLink = document.createElement('a');
    iconLink.innerHTML = iconData.iconClass;
    iconLink.href = iconData.href;

    // append
    listIcon.append(iconLink);
    return listIcon;
};

export default iconBuilder;