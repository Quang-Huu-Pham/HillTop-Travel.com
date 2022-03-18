// // on scroll
window.onscroll = function() { onScroll() };
var titleRank = document.querySelector(".rank .title");

function onScroll() {
    if (document.body.scrollTop > 480 || document.documentElement.scrollTop > 480) {
        titleRank.style.display = 'inline-block';
    } else {
        titleRank.style.display = 'none';
    }
}

// stickit book


const tabLinks = document.querySelectorAll('.header-selector__item');
const tabContents = document.querySelectorAll('.header-selector__tab');

tabLinks.forEach((tabLink, index) => {
    const tabContent = tabContents[index];
    tabLink.onclick = function() {
        document.querySelector('.header-selector__item.header-selector__item--active').classList.remove('header-selector__item--active');
        document.querySelector('.header-selector__tab.header-selector__item--active').classList.remove('header-selector__item--active');

        this.classList.add('header-selector__item--active');
        tabContent.classList.add('header-selector__item--active');
        // console.log(this);
    }
});

// jQuery
/* $(".header-selector__item").click(function() {

     // Select all list items
     var listItems = $(".header-selector__item");

    // Remove 'active' tag for all list items
    for (let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("header-selector__item--active");
    }

    // Add 'active' tag for currently selected item
    this.classList.add("header-selector__item--active");
 });
 */