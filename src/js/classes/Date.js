export default class Date {
    constructor() {
        this.block = document.querySelector('.seller-info-col').children
        this.dateString = this.block[2].children
    }
    getDate() {
        try {
            if(this.dateString[0].children) {
                let dateBlock = this.dateString[0].textContent
                return Number(dateBlock.slice(dateBlock.length-6, dateBlock.length))
            } else {
                let str = this.dateString[0].innerHTML
                return Number(str.slice(str.length-5, str.length))
            }
        } catch (error) {
            console.log(error)
            return 0
        }
    }
}