function Holiday(destination, days) {
    this.destination = destination;
    this.days = days;
}

Holiday.prototype.info = function () {
    console.log(`${this.destination} | ${this.days} days`)
}

var india = new Holiday("India",30)
console.log(india.info())