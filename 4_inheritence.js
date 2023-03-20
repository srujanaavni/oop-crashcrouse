function book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this.getSummary=function() {
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
};

// Magazine Constructor
function Magazine(title,author,year,month) {
    book.call(this,title,author,year);
    this.month=month;
}
// inherit prototype
Magazine.prototype=Object.create(book.prototype);

//instatiate magazine object

const mag1=new Magazine('mag one','john Doe','2018','jan');

//use Magzine Constructor
Magazine.prototype.constructor=Magazine;

console.log(mag1);
