// Tabs script

const tabs = document.querySelectorAll('[data-tab-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Selecting element that has data attribute
    const target = document.querySelector(tab.dataset.tabTarget)
    tabContents.forEach(tabContent => {
      tabContent.classList.remove('tab-active')
    })
    tabs.forEach(tab => {
      tab.classList.remove('tab-active')
    })
    tab.classList.add('tab-active')
    target.classList.add('tab-active')
  })
})

// Splide JS

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide' , {
        perPage: 3,
        rewind: true,
        fixedHeight: 355,
        gap: 20,
        pagination: false,
        breakpoints: {
          768: {
            perPage: 1,
          },
          992: {
            perPage: 2,
          },
        }
    });
    splide.mount();
});