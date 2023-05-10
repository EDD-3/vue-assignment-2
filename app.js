const app = Vue.createApp({
    data () {
        return {
            userInput: '',
            otherUserInput: ''
        }
    },

    methods : {
        displayGreeting() {
            alert('Greetings!');
        },

        captureUserInput(event) {
            this.userInput = event.target.value;
        },

        captureOtherUserInput (event, diffText) {
            this.otherUserInput = event.target.value + ' ' + diffText;
        }
    }
    
});


app.mount('#assignment');

