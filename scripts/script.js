document.addEventListener('DOMContentLoaded', () => {
    const eggElement = document.querySelector('.egg');
    let timeoutId;
  
    eggElement.addEventListener('mouseenter', () => {
      timeoutId = setTimeout(() => {
        eggElement.style.opacity = '1'; 
      }, 10000); 
    });
  
    eggElement.addEventListener('mouseleave', () => {
      clearTimeout(timeoutId); 
      eggElement.style.opacity = '0'; 
    });
  });