export default class User {
    constructor() {
        this.user = ''
    }
    getType() {
        try {
            this.info = document.querySelector('.seller-info-col').children
            if(this.info[1].innerHTML === 'Арендодатель') {
                this.user = 'Собственник'
            } else {
                this.user = 'Агенство'
            }
            return this.user
        } catch (error) {
            console.log(error)
        }
    }
}