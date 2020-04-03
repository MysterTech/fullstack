let india = {
    //properties
    mountains: ['Kailash', 'Mansarovar', 'K2'],
    //methods
    printWithDash: function() {
        setTimeout(() => console.log(this.mountains.join(' - ')), 3000)
    }
};

india.printWithDash()