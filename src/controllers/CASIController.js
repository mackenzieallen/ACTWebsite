import CASIModel from '../models/CASIModel';

class CasiController {

    constructor() {
        this.model = this.newModel()
    }
    
    newModel() { 
        return new CASIModel() 
    }

    async loadData() {
        await this.model.fetchData();
    }

    async submitForm() {
        if (!this.model) {
            throw new Error('Error initializing model');
        }
        await this.model.saveData();
    }
}

export default CasiController;
