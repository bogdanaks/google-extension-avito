import svg from './svg.js'

export default class fullBlock {
    constructor() {
        this.isShowBlock = false
        this.svg = new svg('close').createSvg()
        this.block = document.createElement('div')
        this.block.className = 'fullBlock'
        this.header = document.createElement('div')
        this.header.className = 'fullBlock__header'
        this.h3 = document.createElement('h3')
        this.h3.innerHTML = 'Рейтинг'
        this.content = document.createElement('div')
        this.content.className = 'contentBlock'
        this.h2 = document.createElement('h2')
        this.h2.innerHTML = 'Высокий, 90%'
        this.p = document.createElement('p')
        this.p.innerHTML =
            'Мошенники очень хорошо маскируются. Будьте внимательнее и никогда не передавайте деньги, не увидев и не получив результат!'
        this.ul = document.createElement('ul')
        this.li1 = document.createElement('li')
        this.li2 = document.createElement('li')
        this.li3 = document.createElement('li')
        this.li4 = document.createElement('li')
        this.li5 = document.createElement('li')
        this.circle1 = document.createElement('div')
        this.circle1.className = 'circle'
        this.circle2 = document.createElement('div')
        this.circle2.className = 'circle'
        this.circle3 = document.createElement('div')
        this.circle3.className = 'circle'
        this.circle4 = document.createElement('div')
        this.circle4.className = 'circle'
        this.circle5 = document.createElement('div')
        this.circle5.className = 'circle'
        this.pli1 = document.createElement('p')
        this.pli2 = document.createElement('p')
        this.pli3 = document.createElement('p')
        this.pli4 = document.createElement('p')
        this.pli5 = document.createElement('p')
        this.pli1.innerHTML = 'Не найденно похожих фото в google и яндекс'
        this.pli2.innerHTML = 'Аккаунту более одного года'
        this.pli3.innerHTML = 'Частный аккаунт'
        this.pli4.innerHTML = 'Более 5-и завершенных объявлений'
        this.pli5.innerHTML = 'Более 3-х фотографий у объявления'

        this.svg.addEventListener('click', () => {
            if (!this.isShowBlock) {
                this.showBlock()
            } else {
                this.hideBlock()
            }
        })

        this.header.appendChild(this.h3)
        this.header.appendChild(this.svg)

        this.ul.appendChild(this.li1)
        this.ul.appendChild(this.li2)
        this.ul.appendChild(this.li3)
        this.ul.appendChild(this.li4)
        this.ul.appendChild(this.li5)

        this.li1.appendChild(this.circle1)
        this.li2.appendChild(this.circle2)
        this.li3.appendChild(this.circle3)
        this.li4.appendChild(this.circle4)
        this.li5.appendChild(this.circle5)

        this.li1.appendChild(this.pli1)
        this.li2.appendChild(this.pli2)
        this.li3.appendChild(this.pli3)
        this.li4.appendChild(this.pli4)
        this.li5.appendChild(this.pli5)

        this.content.appendChild(this.h2)
        this.content.appendChild(this.p)
        this.content.appendChild(this.ul)

        this.block.appendChild(this.header)
        this.block.appendChild(this.content)
    }

    showBlock() {
        this.block.classList.remove('isHide')
        this.block.classList.add('isShow')
        document.querySelector('body').appendChild(this.block)
        this.isShowBlock = true
    }
    hideBlock() {
        this.block.classList.remove('isShow')
        this.block.classList.add('isHide')
        this.isShowBlock = false
    }
}
