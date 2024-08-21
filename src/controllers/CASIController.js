import CASIModel from '../models/CASIModel';

class CASIController {

    constructor() {
        this.model = this.newModel();
        this.totalScore = 0;
    }
    
    newModel() { 
        return new CASIModel();
    }

    async loadData() {
        await this.model.fetchData();
    }

    async submitForm() {
        if (!this.model) {
            throw new Error('Error initializing model');
        }

        this.calculateScores();
        
        await this.model.saveData();
    }

    calculateScores() {
        const data = this.model.data;
        const scores = {
            BPLC: 0, BPLS: 0,
            SPAS: 0, SPAC: 0,
            SIMA: 0, SIMB: 0, SIMC: 0,
            JGMTA: 0, JGMTB: 0, JGMTC: 0,
            RPTBA: 0, RPTBB: 0, RPTBC: 0,
            DRAWA: 0, DRAWB: 0, DRAWC: 0,
            CMDA: 0, CMDB: 0, CMDC: 0,
            BODYA: 0, BODYB: 0, BODYC: 0, BODYD: 0, BODYE: 0,
            OBJAA: 0, OBJAB: 0,
            OBJBA: 0, OBJBB: 0, OBJBC: 0,
            RCOBJA: 0, RCOBJB: 0, RCOBJC: 0, RCOBJD: 0, RCOBJE: 0, RCOBJ: 0,
            RGS1: 0, RGS2: 0, RPTA: 0, RPTB: 0,
            DBA: 0, DBB: 0, DBC: 0, SUB3A: 0, SUB3B: 0, SUB3C: 0,
            AGE: 0, YR: 0, MO: 0, DATE: 0, DAY: 0, SSN: 0, SPA: 0, SPB: 0,
            BYR: 0, BMO: 0, BDAY: 0, MNT: 0, SUN: 0,
            RC1A: 0, RC1B: 0, RC1C: 0, RC2A: 0, RC2B: 0, RC2C: 0,
            READ: 0, WRITE: 0, BODY: 0, OBJA: 0, OBJB: 0, CMD: 0,
            DRAW: 0, ANML: 0,
            SIM: 0, JGMT: 0
        };
    
        data.sections.forEach(section => {
            section.questions.forEach(question => {
                if (question.inputs) {
                    question.inputs.forEach(input => {
                        const value = Number(input.value.selectedOption);
                        if (input.scoreLabel in scores) {
                            scores[input.scoreLabel] += value;
                        }
                    });
                }
            });
        });
    
        const BPL = scores.BPLC + scores.BPLS;
        const SPA = scores.SPAS + scores.SPAC;
        const SIM = scores.SIMA + scores.SIMB + scores.SIMC;
        const JGMT = scores.JGMTA + scores.JGMTB + scores.JGMTC;
        const RPTB = scores.RPTBA + scores.RPTBB + scores.RPTBC;
        const DRAW = scores.DRAWA + scores.DRAWB + scores.DRAWC;
        const CMD = scores.CMDA + scores.CMDB + scores.CMDC;
        const BODY = scores.BODYA + scores.BODYB + scores.BODYC + scores.BODYD + scores.BODYE;
        const OBJA = scores.OBJAA + scores.OBJAB;
        const OBJB = scores.OBJBA + scores.OBJBB + scores.OBJBC;
        const RCOBJ = scores.RCOBJA + scores.RCOBJB + scores.RCOBJC + scores.RCOBJD + scores.RCOBJE;
        const BESTRGS = Math.max(scores.RGS1, scores.RGS2);

        const casi_att = BESTRGS + scores.RPTA + RPTB;
        const casi_mmc = scores.DBA + scores.DBB + scores.DBC + scores.SUB3A + scores.SUB3B + scores.SUB3C;
        const casi_ori = scores.AGE + scores.YR + scores.MO + scores.DATE + scores.DAY + scores.SSN + SPA + scores.SPB;
        const casi_ltm = BPL + scores.BYR + scores.BMO + scores.BDAY + scores.MNT + scores.SUN;
        const casi_stm = Math.floor(0.5 * (scores.RC1A + scores.RC1B + scores.RC1C + scores.RC2A + scores.RC2B + scores.RC2C) + 0.6 * RCOBJ + 0.5);
        const casi_lang = Math.floor(0.5 * (scores.READ + scores.WRITE) + 0.3 * (BODY + OBJA + OBJB) + 0.5) + CMD;
        const casi_draw = DRAW;
        const casi_flu = scores.ANML;
        const casi_ataj = SIM + JGMT;

        this.totalScore = casi_att + casi_mmc + casi_ori + casi_ltm + casi_stm + casi_lang + casi_draw + casi_flu + casi_ataj;

        console.log("Scores:", scores);
        console.log("Total: ", this.totalScore);
    }
}

export default CASIController;
