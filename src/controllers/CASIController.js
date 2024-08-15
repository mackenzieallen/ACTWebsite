import CASIModel from '../models/CASIModel';

class CasiController {
    constructor() {
        this.model = new CASIModel();
        const data = import('../data/casi.json'); 
        this.model.data = data; 
    }

    async loadData() {
        this.model = new CASIModel();
        await CASIModel.fetchData();
        return this.model.data;
    }

    async submitForm(responses) {
        if (!this.model) {
            throw new Error('Error initializing model');
        }
        await this.model.saveData(responses);
    }
}

export default CasiController;
