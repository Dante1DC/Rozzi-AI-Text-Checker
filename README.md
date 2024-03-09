# Rozzi Typing Checker
This is a small script reference for Rozzi, a tool for detecting if text in a text field was inputted by a bot or a person. It's not perfect, but I've used this script a couple of times so I thought I'd put it somewhere I can reference for future use.
# Usage
You can see an example of it in use in text.html. Rozzi creates a detector, which can be used like this: 

    import RozziTypingChecker from './rozzi.js';
    const detector = new RozziTypingChecker(); // Default is 220 WPM
    detector.attachToTextInput('textInput', 'textForm');

Where textInput and textForm are ids for the form and the input parts of the HTML file.
# Functionality
Text is considered bot generated if it was programmatically inputed (by variable setting in the console, headless browsers, or even text inputting scripts that attempt to trick the previous two methods). Rozzi sometimes does consider human generated text as bot generated. I'm planning on reworking the implementation in the near future with the following features:
- Input method verification
- Typing consistency analysis 

I also think it'd be cool to make this a small machine learning project, so look out for that!