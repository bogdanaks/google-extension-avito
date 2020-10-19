export default class Over {
    constructor() {
        try {
            this.block = document.querySelector('.seller-info-col').children
            this.overBlock = this.block[2].children
        } catch (error) {
            console.log(error)
        }
    }
    getOver() {
        try {
            let overStr = this.overBlock[1].innerHTML
            return Number(overStr.match(/\d+/g)[0])
        } catch (error) {
            return 0
        }
    }
    getPercent() {
        let num = this.getOver()
        let percent = 0
        if(num < 3) {
            percent = 0
        } else if(num >= 3 && num <= 5) {
            percent = 10
        } else if(num >=6) {
            percent = 15
        }
        return percent
    }
}