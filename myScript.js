const app = new Vue({
    el: "#app",
    data: {
        imagesList: [
            "img/london.jpg",
            "img/newyork.jpg",
            "img/paris-fr.jpg",
        ],
        activeImg: 0,
        interval: null
    },
    methods: {
        changeImg(direction, changedByAI) {
            let newIndex = this.activeImg + direction;

            if (newIndex < 0) {
                newIndex = this.imagesList.length - 1;

            } else if (newIndex > (this.imagesList.length - 1)) {
                newIndex = 0;
            }

            this.activeImg = newIndex;
        },
        onDotClick(clickedIndex) {
            this.activeImg = clickedIndex;
        },
        
        play() {
            clearInterval(this.interval);

            this.interval = setInterval(() => {
                this.changeImg(+1, true);
            }, 5000);
        },
        pause() {
            clearInterval(this.interval);
        }
    },
    mounted() {
        const elementoHtml = document.querySelector(".slider-container");

        elementoHtml.focus();

        this.play();
    }
});