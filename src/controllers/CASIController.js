import CASIModel from '../models/CASIModel';

class CasiController {
    constructor() {
        this.model = null;
    }

    async initialize() {
        this.model = await CASIModel.fetchData();
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
