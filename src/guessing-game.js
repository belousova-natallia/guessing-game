class GuessingGame {
    constructor(number) {
    	this.number = number;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    }

    guess() {
    	var res = Math.ceil((this.min + this.max)/2)
    	return res;
    	
    }

    lower() {
    	this.max = Math.ceil((this.min + this.max)/2);

    }

    greater() {
	this.min = Math.ceil((this.min + this.max)/2)
    }
}

module.exports = GuessingGame;

