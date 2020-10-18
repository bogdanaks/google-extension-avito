import '../scss/avito.scss'
import svg from './classes/svg'
import fullBlock from './classes/fullBlock.js'

class start {
    constructor() {
        this.fullBlock = new fullBlock()
        this.isShowFull = false
        this.svgSmile = new svg('green').createSvg()
        this.svgMenu = new svg('menu').createSvg()
        this.btns = document.querySelector('.item-view-actions')
        this.myBlock = document.createElement('div')
        this.myBlock.className = 'myBlock'
        this.textEl = document.createElement('p')
        this.textEl.innerHTML = 'Уровень доверия: 90%'
        this.btns.append(this.myBlock)
        this.myBlock.append(this.svgSmile)
        this.myBlock.append(this.textEl)
        this.myBlock.append(this.svgMenu)
        this.svgMenu.addEventListener('click', () => {
            if (!this.fullBlock.isShowBlock) {
                this.fullBlock.showBlock()
            } else {
                this.fullBlock.hideBlock()
            }
        })
    }
    openFull() {
        this.fullBlock.showBlock()
    }
    hideFull() {
        this.fullBlock.hideBlock()
    }
}

let s = new start()
