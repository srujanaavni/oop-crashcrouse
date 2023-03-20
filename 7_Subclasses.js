class book {
    constructor(title,author,year){
        this.title=title;
        this.author=author;
        this.year=year;
    }
    getSummary(){
        return`${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge(){
        const years=new Date().getFullYear()-this.year;
    return`${this.title} is ${years} years old`;
    }
}

// Magzine Subclass
class Magazine extends book{
    constructor(title,author,year,month){
        super(title,author,year,month);
        this.month=month;

    }
}
//instatiate magazine object
const mag1 = new Magazine ('Mag one','John Doe','2018','jan'); 

console.log(mag1.getSummary());
