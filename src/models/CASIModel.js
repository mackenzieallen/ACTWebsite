class CasiModel {
    constructor(data = {}) {
        this.data = data;
    }
  
    // Simulating fetching data (this will eventually be an API call? should it match the casi.json?)
    static async fetchData() {
        const jsonData = import('../data/casi.json');
        console.log("loaded: "+jsonData);
        return new CasiModel(jsonData);
    }
  
    async saveData(responses) {
        // This will be changed to sending responses to server
        console.log('Saving data...', responses);
    }
}
  
export default CasiModel;
  