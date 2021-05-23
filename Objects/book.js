function Book(title, author, read, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info= function(title){
        console.log(title + " by " + author + ", " + pages + ", " + read )
    }
}
console.log