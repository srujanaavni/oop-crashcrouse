function book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this.getSummary=function() {
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
}

//GetSummary
book.prototype.getSummary = function(){
    return`${this.title} was written by ${this.author} in ${this.year}`;
}

//getAge
book.prototype.getAge=function(){
    const years=new Date().getFullYear()-this.year;
    return`${this.title} is ${years} years old`;
};

// Revise/Chane Year
book.prototype.revise=function(nuewYear){
    this.year=nuewYear;
    this.revised=true;
}
// instatiate an object
const book1 = new book('Book One','John Doe','2013');
const book2 = new book('Book two','jane doe','2017');

console.log(book2);
book2.revise('2020');
console.log(book2);
