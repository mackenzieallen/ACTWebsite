<template>
    <div class="radio-group">
        <div class="radio-options-container">
            <div class="shape-title">Circle</div>
            <div class="radio-category">
                <span class="category-label">Closed Circle (within 1/8")</span>
                <div class="radio-options">
                    <label>
                        <input type="radio" name="closedCircle" value="correct" v-model="selections.closedCircle" @change="handleChange('closedCircle', 'circle', 1)" />
                        Correct
                    </label>
                    <label>
                        <input type="radio" name="closedCircle" value="incorrect" v-model="selections.closedCircle" @change="handleChange('closedCircle', 'circle', 0)" />
                        Incorrect
                    </label>
                </div>
            </div>

            <div class="radio-category">
                <span class="category-label">Circular Shape</span>
                <div class="radio-options">
                    <label>
                        <input type="radio" name="circularShape" value="correct" v-model="selections.circularShape" @change="handleChange('circularShape', 'circle', 1)" />
                        Correct
                    </label>
                    <label>
                        <input type="radio" name="circularShape" value="incorrect" v-model="selections.circularShape" @change="handleChange('circularShape', 'circle', 0)" />
                        Incorrect
                    </label>
                </div>
            </div>
        </div>

        <div class="circle-image">
            <img src="../../assets/images/circle.png" alt="Circle" />
        </div>
    </div>

    <hr class="divider">

    <div class="radio-group">
        <div class="radio-options-container">
            <div class="shape-title">Diamond</div>
            <div class="radio-category">
                <span class="category-label">Draws four sides</span>
                <div class="radio-options">
                    <label>
                        <input type="radio" name="drawsFourSides" value="correct" v-model="selections.drawsFourSides" @change="handleChange('drawsFourSides', 'diamond', 1)" />
                        Correct
                    </label>
                    <label>
                        <input type="radio" name="drawsFourSides" value="incorrect" v-model="selections.drawsFourSides" @change="handleChange('drawsFourSides', 'diamond', 0)" />
                        Incorrect
                    </label>
                </div>
            </div>

            <div class="radio-category">
                <span class="category-label">Closes all 4 angles</span>
                <div class="radio-options">
                    <label>
                        <input type="radio" name="closesAllAngles" value="correct" v-model="selections.closesAllAngles" @change="handleChange('closesAllAngles', 'diamond', 1)" />
                        Correct
                    </label>
                    <label>
                        <input type="radio" name="closesAllAngles" value="incorrect" v-model="selections.closesAllAngles" @change="handleChange('closesAllAngles', 'diamond', 0)" />
                        Incorrect
                    </label>
                </div>
            </div>

            <div class="radio-category">
                <span class="category-label">Sides of approx. equal length</span>
                <div class="radio-options">
                    <label>
                        <input type="radio" name="equalLengthSides" value="correct" v-model="selections.equalLengthSides" @change="handleChange('equalLengthSides', 'diamond', 1)" />
                        Correct
                    </label>
                    <label>
                        <input type="radio" name="equalLengthSides" value="incorrect" v-model="selections.equalLengthSides" @change="handleChange('equalLengthSides', 'diamond', 0)" />
                        Incorrect
                    </label>
                </div>
            </div>
        </div>

        <div class="diamond-image">
            <img src="../../assets/images/diamond.png" alt="Diamond" />
        </div>
    </div>

    <hr class="divider">

    <div class="radio-group">
        <div class="radio-options-container">
            <div class="shape-title">Cube</div>
            <div class="radio-category">
                <span class="category-label">Figure is 3-dimensional</span>
                <div class="radio-options">
                    <label>
                        <input type="radio" name="figure3D" value="correct" v-model="selections.figure3D" @change="handleChange('figure3D', 'cube', 1)" />
                        Correct
                    </label>
                    <label>
                        <input type="radio" name="figure3D" value="incorrect" v-model="selections.figure3D" @change="handleChange('figure3D', 'cube', 0)" />
                        Incorrect
                    </label>
                </div>
            </div>

            <div class="radio-category">
                <span class="category-label">Frontal face correctly oriented</span>
                <div class="radio-options">
                    <label>
                        <input type="radio" name="frontalFace" value="correct" v-model="selections.frontalFace" @change="handleChange('frontalFace', 'cube', 1)" />
                        Correct
                    </label>
                    <label>
                        <input type="radio" name="frontalFace" value="incorrect" v-model="selections.frontalFace" @change="handleChange('frontalFace', 'cube', 0)" />
                        Incorrect
                    </label>
                </div>
            </div>

            <div class="radio-category">
                <span class="category-label">Internal lines correctly drawn</span>
                <div class="radio-options">
                    <label>
                        <input type="radio" name="internalLines" value="correct" v-model="selections.internalLines" @change="handleChange('internalLines', 'cube', 1)" />
                        Correct
                    </label>
                    <label>
                        <input type="radio" name="internalLines" value="incorrect" v-model="selections.internalLines" @change="handleChange('internalLines', 'cube', 0)" />
                        Incorrect
                    </label>
                </div>
            </div>

            <div class="radio-category">
                <span class="category-label">Opposite sides are parallel</span>
                <div class="radio-options">
                    <label>
                        <input type="radio" name="parallelSides" value="correct" v-model="selections.parallelSides" @change="handleChange('parallelSides', 'cube', 1)" />
                        Correct
                    </label>
                    <label>
                        <input type="radio" name="parallelSides" value="incorrect" v-model="selections.parallelSides" @change="handleChange('parallelSides', 'cube', 0)" />
                        Incorrect
                    </label>
                </div>
            </div>
        </div>

        <div class="cube-image">
            <img src="../../assets/images/cube.png" alt="Cube" />
        </div>
    </div>

    <hr class="divider">

    <div class="totals-section">
        <div class="totals-title">Totals:</div>
        <div class="totals-list">
            <div>Circle Total: {{ circleTotal }}</div>
            <div>Diamond Total: {{ diamondTotal }}</div>
            <div>Cube Total: {{ cubeTotal }}</div>
        </div>
    </div>

    <NotesSection />
</template>

<script>
import NotesSection from '../NotesSection.vue';

export default {
    components: {
        NotesSection
    },
    data() {
        return {
            circleTotal: 0,
            diamondTotal: 0,
            cubeTotal: 0,
            selections: {
                closedCircle: null,
                circularShape: null,
                drawsFourSides: null,
                closesAllAngles: null,
                equalLengthSides: null,
                figure3D: null,
                frontalFace: null,
                internalLines: null,
                parallelSides: null,
            },
            previousSelections: {
                closedCircle: null,
                circularShape: null,
                drawsFourSides: null,
                closesAllAngles: null,
                equalLengthSides: null,
                figure3D: null,
                frontalFace: null,
                internalLines: null,
                parallelSides: null,
            }
        };
    },
    methods: {
        handleChange(question, shape) {
            const previous = this.previousSelections[question];
            const current = this.selections[question];

            if (previous === 'correct' && current !== 'correct') {
                this.updateTotal(shape, -1);
            } else if (previous !== 'correct' && current === 'correct') {
                this.updateTotal(shape, 1);
            }

            this.previousSelections[question] = current;
        },
        updateTotal(shape, amount) {
            if (shape === 'circle') {
                this.circleTotal += amount;
            } else if (shape === 'diamond') {
                this.diamondTotal += amount;
            } else if (shape === 'cube') {
                this.cubeTotal += amount;
            }
        }
    }
};
</script>

<style scoped>
.radio-group {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 20px;
}

.radio-options-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: calc(100% - 300px);
}

.shape-title {
    font-weight: bold;
    margin-bottom: 20px;
}

.radio-category {
    display: flex;
    align-items: flex-start;
    gap: 10px;
}

.category-label {
    width: 300px;
    margin-right: 10px;
    white-space: nowrap;
}

.radio-options {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.divider {
    border: 1px solid #ccc;
    margin: 20px 0;
}

.circle-image, .diamond-image, .cube-image {
    display: flex;
    justify-content: flex-end;
}

.circle-image img, .diamond-image img, .cube-image img {
    max-width: 250px;
    height: auto;
    margin: 0 25px;
}

.totals-section {
    padding: 20px;
}

.totals-title {
    font-weight: bold;
    margin-bottom: 10px;
}

.totals-list {
    font-size: 16px;
    line-height: 1.5;
}
</style>
