function book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this.getSummary=function() {
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
}
// instatiate an object
const book1 = new book('Book One','John Doe','2013');
const book2 = new book('Book two','jane doe','2017');

console.log(book2);
