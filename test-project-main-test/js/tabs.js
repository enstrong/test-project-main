let tabsHeader = document.querySelector('.tabs-header'),
   tabsHeaderItem = document.getElementsByClassName('tabs-header-item'),
   tabsBodyItem = document.getElementsByClassName('tabs-body-item');

tabsHeader.addEventListener('click', function (event) {
   if (event.target.className == 'tabs-header-item') {
      let dataTab = event.target.getAttribute('data-tab');
   
      for (let i = 0; i < tabsHeaderItem.length; i++) {
         tabsHeaderItem[i].classList.remove('active');
      }
      event.target.classList.add('active');
      
      for (let i = 0; i < tabsBodyItem.length; i++) {
         if (dataTab == i) {
            tabsBodyItem[i].style.display = 'block';
         } else {
            tabsBodyItem[i].style.display = 'none';
         }
      }
   }
})