export default class Svg {
    constructor(type) {
        this.svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
        this.path = document.createElementNS('http://www.w3.org/2000/svg', 'path')
        this.type = type
    }
    createSvg() {
        switch (this.type) {
            case 'green':
                this.svg.id = 'svgSmile'
                this.path.id = 'pathGreen'
                this.path.setAttribute(
                    'd',
                    'M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM22.003 19.602l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398z',
                )
                this.svg.appendChild(this.path)
                break
            case 'yellow':
                this.svg.id = 'svgSmile'
                this.path.id = 'pathYellow'
                this.path.setAttribute(
                    'd',
                    'M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0 1.105 0.895 2 2 2s2-0.895 2-2-0.895-2-2-2-2 0.895-2 2zM20 10c0 1.105 0.895 2 2 2s2-0.895 2-2-0.895-2-2-2-2 0.895-2 2zM12 22h8v2h-8v-2z',
                )
                this.svg.appendChild(this.path)
                break
            case 'red':
                this.svg.id = 'svgSmile'
                this.path.id = 'pathRed'
                this.path.setAttribute(
                    'd',
                    'M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM9.997 24.398l-2.573-1.544c1.749-2.908 4.935-4.855 8.576-4.855s6.827 1.946 8.576 4.855l-2.573 1.544c-1.224-2.036-3.454-3.398-6.003-3.398s-4.779 1.362-6.003 3.398z',
                )
                this.svg.appendChild(this.path)
                break
            case 'menu':
                this.svg.id = 'svgMenu'
                this.path.id = 'pathMenu'
                this.path.setAttribute('d', 'M0 6h28v6h-28v-6zM0 14h28v6h-28v-6zM0 22h28v6h-28v-6z')
                this.svg.appendChild(this.path)
                break
            case 'close':
                this.svg.id = 'svgClose'
                this.path.id = 'pathClose'
                this.path.setAttribute(
                    'd',
                    'M15.898,4.045c-0.271-0.272-0.713-0.272-0.986,0l-4.71,4.711L5.493,4.045c-0.272-0.272-0.714-0.272-0.986,0s-0.272,0.714,0,0.986l4.709,4.711l-4.71,4.711c-0.272,0.271-0.272,0.713,0,0.986c0.136,0.136,0.314,0.203,0.492,0.203c0.179,0,0.357-0.067,0.493-0.203l4.711-4.711l4.71,4.711c0.137,0.136,0.314,0.203,0.494,0.203c0.178,0,0.355-0.067,0.492-0.203c0.273-0.273,0.273-0.715,0-0.986l-4.711-4.711l4.711-4.711C16.172,4.759,16.172,4.317,15.898,4.045z',
                )
                this.svg.appendChild(this.path)
                break
            default:
                this.svg.id = 'svgSmile'
                this.path.id = 'pathGreen'
                this.path.setAttribute(
                    'd',
                    'M16 32c8.837 0 16-7.163 16-16s-7.163-16-16-16-16 7.163-16 16 7.163 16 16 16zM16 3c7.18 0 13 5.82 13 13s-5.82 13-13 13-13-5.82-13-13 5.82-13 13-13zM8 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM20 10c0-1.105 0.895-2 2-2s2 0.895 2 2c0 1.105-0.895 2-2 2s-2-0.895-2-2zM22.003 19.602l2.573 1.544c-1.749 2.908-4.935 4.855-8.576 4.855s-6.827-1.946-8.576-4.855l2.573-1.544c1.224 2.036 3.454 3.398 6.003 3.398s4.779-1.362 6.003-3.398z',
                )
                this.svg.appendChild(this.path)
                break
        }
        return this.svg
    }
}
