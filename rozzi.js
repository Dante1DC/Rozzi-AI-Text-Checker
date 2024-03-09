class RozziTypingChecker {
    constructor(minWPM = 220) {
        this.minWPM = minWPM;
        this.startTime = null;
        this.endTime = null;
        this.backspaceCount = 0;
        this.textInput = null;
    }

    attachToTextInput(textInputId, formId) {
        this.textInput = document.getElementById(textInputId);
        const form = document.getElementById(formId);

        this.textInput.addEventListener('keydown', (event) => {
            if (!this.startTime) {
                this.startTime = Date.now();
            }

            if (event.key === 'Backspace') {
                this.backspaceCount++;
            }
        });

        form.addEventListener('submit', (event) => {
            this.checkText(event);
        });
    }

    checkText(event) {
        this.endTime = Date.now();
        const timeDiff = this.endTime - this.startTime; // in ms
        const typedText = this.textInput.value;
        const wordCount = typedText.split(' ').filter(Boolean).length;
        const minutes = timeDiff / 60000;
        const wpm = wordCount / minutes;

        if (!((wpm < this.minWPM && this.backspaceCount > 0) || timeDiff > 2000)) { // Adjust the conditions based on your observations
            console.log('Text is likely not human-generated.');
            event.preventDefault();
            this.textInput.value = '';
            alert('Your text seems to be inputted unnaturally fast. Please type normally.');
        } else {
            console.log('Text is likely human-generated.');
        }

        // Reset metrics
        this.resetMetrics();
    }

    resetMetrics() {
        this.startTime = null;
        this.backspaceCount = 0;
    }
}

export default RozziTypingChecker;
