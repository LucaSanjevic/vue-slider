const app = new Vue({
    el: "#app",
    data: {
        imagesList: [
            "img/london.jpg",
            "img/newyork.jpg",
            "img/paris-fr.jpg",
        ],
        activeImg: 0
          },
    methods: {
        frecciaSinistra: function() {
            this.activeImg = this.activeImg - 1;
            if(this.activeImg < 0) {
                this.activeImg = this.imagesList.length - 1;
                                   }
                                   },

        frecciaDestra: function() {
            this.activeImg = this.activeImg + 1;
            if(this.activeImg > this.imagesList.length - 1) {
                this.activeImg = 0;
                                                            }
                                  },

            pallini(index2) {
                this.activeImg = index2
                                      },
            }
         })