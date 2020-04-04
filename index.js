class Holiday {
    constructor (destination, days) {
        this.destination = destination
        this.days = days
    }

    info () {
        return `${this.destination} wil take ${this.days} days.`
    }
}

class Expeditions extends Holiday {
    constructor (destination, days, gear) {
        super(destination, days)
        this.gear = gear
    }

    info() {
        return super.info() + `with ${this.gear.join(' and ')}`
    }
}

const trip = new Holiday("Bangalore, India",15)
const tripWithGear = new Expeditions("Bangalore,India", 15, ["shoes", "shorts", "camera"])

console.log(trip.info())
console.log(tripWithGear.info())