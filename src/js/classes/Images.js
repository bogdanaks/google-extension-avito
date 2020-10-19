export default class Images {
    constructor() {
        this.block = document.querySelector('.gallery-list').children
    }
    getCount() {
        return this.block.length
    }
} 