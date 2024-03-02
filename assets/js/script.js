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