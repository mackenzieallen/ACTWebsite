class CasiModel {
    constructor(data = {}) {
        this.data = data;
    }
  
    // Simulating fetching data (this will eventually be an API call? should it match the casi.json?)
    static async fetchData() {
        return new CasiModel({
            prequestions: {
                preinstructions: "Example prequestion instructions",
                questions: [
                    { question: "Pre-question 1", inputs: [{ name: "pre1", type: "text", label: "Example question" }] },
                    { question: "Pre-question 2", inputs: [{ name: "pre2", type: "text", label: "Example question" }] }
                ],
            },
            sections: [
            {
                title: "Section 1",
                instructions: "Example instructions",
                questions: [
                    { question: "Question 1", inputs: [{ name: "q1", type: "choice", label: "Choose one:", choices: [{ label: "Yes", value: "yes" }, { label: "No", value: "no" }] }] },
                    { question: "Question 2", inputs: [{ name: "q2", type: "choice", label: "Choose one:", choices: [{ label: "Yes", value: "yes" }, { label: "No", value: "no" }] }] }
                ]
            },
            {
                title: "Section 2",
                instructions: "Example instructions",
                questions: [
                    { question: "Question 1", inputs: [{ name: "q1", type: "choice", label: "Choose one:", choices: [{ label: "Yes", value: "yes" }, { label: "No", value: "no" }] }] },
                    { question: "Question 2", inputs: [{ name: "q2", type: "choice", label: "Choose one:", choices: [{ label: "Yes", value: "yes" }, { label: "No", value: "no" }] }] }
                ]
            }
            ],
            postquestions: {
                instructions: ["Example postquestion instructions"],
                questions: [
                    { question: "Post-question 1", inputs: [{ name: "post1", type: "text", label: "Example question" }] },
                    { question: "Post-question 2", inputs: [{ name: "post2", type: "text", label: "Example question" }] },
                    { question: "Post-question 3", inputs: [{ name: "post3", type: "text", label: "Example question" }] }
                ],
            },
        });
    }
  
    async saveData(responses) {
        // This will be changed to sending responses to server
        console.log('Saving data...', responses);
    }
}
  
export default CasiModel;
  