class Dots {
    constructor(data){
        this.data = data
        this.itemPerView = 1

        // this.renderDots()
    }

    renderDots() {
            const total = this.data.testimonials.length;
            let dotsCount = total - this.itemPerView;
            dotsCount = dotsCount > 0 ? dotsCount : 0;
    
            let dotsHTML = '';
            for (let i = 0; i <= dotsCount; i++) {
                const active = this.activeItem === i ? 'active' : '';
                dotsHTML += `<div class="dot ${active}" data-index="${i}"></div>`;
            }
    
            return dotsHTML;
        }

}

export { Dots }