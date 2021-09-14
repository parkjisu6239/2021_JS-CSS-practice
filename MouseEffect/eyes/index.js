const body = document.querySelector('body')
const screenHeight = document.body.offsetHeight
const screenWidth = document.body.offsetWidth

const left = document.querySelector('.left-pupil')
const leftX = 800
const leftY = 300

const right = document.querySelector('.right-pupil')
const rightX = 1100
const rightY = 300

const r = 45

console.log(screenHeight, screenWidth)

window.addEventListener('mousemove', function(event){
    // 마우스 포인터의 위치 반환
    // console.log(1, event.pageY) 스크롤 포함한 body 전체 영역에서의 Y값
    // console.log(2, event.offsetY) 스크롤 포함한 body 전체 영역에서의 Y값
    // console.log(3, event.clientY) 브라우저에서 마우스가 보이는 영역에서의 좌표(스크롤 내려도 커지지 않음)

    let x = event.clientX
    let y = event.clientY

    moveEyes(left, leftX, leftY)
    moveEyes(right, rightX, rightY)

    function moveEyes(direction, circleX, circleY){
        let dist = Math.sqrt(Math.pow(x-circleX, 2) + (Math.pow(y-circleY, 2)))
    
        if (circleX - r <= x && x <= circleX + r &&  circleY - r <= y && y <= circleY + r) {
            direction.style.left = `${x}px`
            direction.style.top = `${y}px` 
        } else if (x >= circleX) {
            direction.style.left = `${r*(x-circleX)/(dist + 1) + circleX}px`
            if (y >= circleY) {
                direction.style.top = `${r*(y-circleY)/(dist + 1) + circleY}px` 
            } else {
                direction.style.top = `${circleY - r*(circleY-y)/(dist + 1)}px` 
            }
        } else {
            direction.style.left = `${circleX - r*(circleX-x)/(dist + 1)}px`
            if (y >= circleY) {
                direction.style.top = `${r*(y-circleY)/(dist + 1) + circleY}px` 
            } else {
                direction.style.top = `${circleY - r*(circleY-y)/(dist + 1)}px` 
            }
        }
    }

})
