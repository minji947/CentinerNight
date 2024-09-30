const animateFade = (entries, obs) => { //스크롤 이벤트를 감지해서 적용시킬 디자인
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.animate(
                {
                    opacity: [0,1],
                    filter: ['blur(0.4rem)', 'blur(0)'],
                },
                {
                    duration: 1500,
                    easing: 'ease',
                    fill: 'forwards'
                }
            )
            
            //한번 실행 후 스크롤이벤트 감지를 중지(반복실행 차단)
            obs.unobserve(entry.target)
        }
        
    });
}

//관찰설정
//observer 패턴 -> 스크롤 이벤트를 감시하고 있다가, 특정 요소에 스크롤 이벤트가 발생될 때마다 적용하려는 디자인패턴들을 적용
const fadeObsever = new IntersectionObserver(animateFade)
//console.log(scrollObsever)

//관찰지시
const fadeElements = document.querySelectorAll('.fadeIn')

fadeElements.forEach((fadeElement)=>{
    fadeObsever.observe(fadeElement)
})