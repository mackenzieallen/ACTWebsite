import localData from '../data/casi.json';

class CasiModel {

    constructor(data = {}) {
        this.data = data;
    }

    loadLocalData() {
        this.data = localData
    }
  
    async fetchData() {
        this.loadLocalData();
    }

    async saveData() {
        console.log('Saved data:', JSON.stringify(this.data));
      }
}
  
export default CasiModel;
  