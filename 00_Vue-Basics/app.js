const app = Vue.createApp({
    data() {
        return ({
            title: 'Count',
            count: 1,
            showBooks: true,
            X: 0,
            Y: 0,
            books: [
                { id: 1, title: 'book', price: '90dllar', fav: true, },
                { id: 2, title: 'book', price: '1', fav: true, },
                { id: 3, title: 'book', price: '2', fav: true, },
                { id: 4, title: 'book', price: '3', fav: false, },
                { id: 5, title: 'book', price: 'g', fav: false, },
                { id: 6, title: 'book', price: 'f', fav: false, },
            ],
            url: 'https://bhavyak13.github.io/portfolio/',
        })
    },
    methods: {
        changeTitle(title) {
            this.title = title;
        },
        toggleShowBooks() {
            this.showBooks = !this.showBooks;
        },
        handleEvent(e, value) {
            console.log('clicked', e, value)
        },
        handleMouseMove(e) {
            this.X = e.offsetX;
            this.Y = e.offsetY;
        },
        toggleFav(id) {
            this.books = this.books.map(book => {
                if (book.id === id) return { ...book, fav: !book.fav }
                return book;
            })
        }
    },
    computed: {
        filteredBooks() {
            return this.books.filter(book => book.fav);
        }
    }

})
app.mount('#app');