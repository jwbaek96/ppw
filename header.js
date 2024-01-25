window.addEventListener('scroll', () => {
    let targetY = document.querySelector('.homelogo').getBoundingClientRect().top; //타겟 top 위치
    // const h = document.querySelector('header');
    const homelogo = document.querySelector('.homelogo');
    const menuBtn = document.querySelector('.menu-btn');
    const homelogo2 = document.querySelector('.homelogo2');
    const menuBtn2 = document.querySelector('.menu-btn2');
    let y = window.scrollY;//현재 스크롤 위치
    if (y > targetY + 120) {
        // h.classList.remove('dpnone')
        // h.style.opacity = '1';
        homelogo.style.fontSize = '1.5em';
        menuBtn.style.fontSize = '1.5em';
        homelogo2.style.fontSize = '1.5em';
        menuBtn2.style.fontSize = '1.5em';
    } 
    else {
        // h.classList.add('dpnone')
        homelogo.style.fontSize = '';
        menuBtn.style.fontSize = '';
        homelogo2.style.fontSize = '';
        menuBtn2.style.fontSize = '';
    }
})