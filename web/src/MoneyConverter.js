
class MoneyConverter {
    constructor(from, to) {
        this.from = from;
        this.to = to;
    }
    async getLatestData() {
        const response = await fetch('http://currencies.apps.grandtrunk.net/getlatest/'+this.from+"/"+this.to);
        return await response.json();
    }
}