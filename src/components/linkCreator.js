const linkBuilder = (linkData) => {
    // create list item for link
    const listItem = document.createElement('li');

    // create link 
    const linkAngkor = document.createElement('a');
    linkAngkor.innerText = linkData.text;
    linkAngkor.href = linkData.href;

    // append
    listItem.append(linkAngkor);
    return listItem;
};

export default linkBuilder;