const section = document.querySelectorAll('section')
            const img = document.querySelectorAll('img')
            const total = section.length
            const preBtn = document.querySelector('.preBtn')
            const nextBtn = document.querySelector('.nextBtn')

            let pageNum = 0

            preBtn.addEventListener('click', function(){
                if (pageNum >= 0) {
                    pageNum --
                    pageChange()
                    makeBurger()
                }
            })

            nextBtn.addEventListener('click', function(){
                if (pageNum < total) {
                    pageNum ++
                    pageChange()
                    makeBurger()
                }
            })

            function pageChange(){
                window.scrollTo({
                    top: section[pageNum].offsetTop,
                    behavior: 'smooth'
                })
            }

            function makeBurger(){
                for (let j=0; j<total-1; j++){
                    if (j < pageNum) {
                        img[j].classList.add('activate')
                    }else {
                        img[j].classList.remove('activate')
                    }
                }
            }

            window.addEventListener('scroll', function(){
                let scroll = this.scrollY
                
                for (let i=0; i<total; i++) {
                    if (scroll > section[i].offsetTop - 50 && scroll < section[i].offsetTop + section[i].offsetHeight - 50) {
                        pageNum = i
                        break
                    }
                }

                makeBurger()
            })