import localData from '../data/casi.json';

class CasiModel {

    constructor(data = {}) {
        this.data = data;
    }

    loadLocalData() {
        this.data = localData
    }
  
    // Simulating fetching data (this will eventually be an API call? should it match the casi.json?)
    async fetchData() {
        this.loadLocalData();
    }
  
    async saveData(responses) {
        // This will be changed to sending responses to server
        console.log('Saving data...', responses);
    }
}
  
export default CasiModel;
  