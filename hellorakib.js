document.querySelector(".command-btn").addEventListener("click", function () {
    document.querySelector(".command-list").classList.add("active");
    this.style.display = "none";
})

document.getElementById("close").addEventListener("click", function () {
    document.querySelector(".command-list").classList.remove("active");
    document.querySelector(".command-btn").style.display = "block"; 
})


if ("webkitSpeechRecognition" in window) {
    const d = new Date() // today, now

    // setInterval(function name1(){
    //     var time = d.toLocaleTimeString().replace(/(.*)\D\d+/, '$1')
    // }, 1000)
    

    // console.log(name1())


    //  time = d.toLocaleTimeString();
    // Timezone zero UTC offset
    var date = d.toISOString().slice(0, 10) // YYYY-MM-DD


    // Speech Recognition Stuff goes here
    const btn = document.querySelector(".sound-icon");
    // const content = document.querySelector(".content");

    const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognition = new SpeechRecognition();
    recognition.lang = 'en-US';
    recognition.onstart = function () {
        console.log("voice is activated, you can to microphonne");
    }


    recognition.onresult = function (event) {
        const current = event.resultIndex;

        const transcript = event.results[current][0].transcript;

        // content.textContent = transcript;
        readOut(transcript);
        console.log(transcript)
    }

    // add the listener to the btn

    btn.addEventListener("click", () => {
        btn.classList.add("active");
        recognition.start();
    })
    var synth = window.speechSynthesis;
    function readOut(massage) {
        btn.classList.remove("active");

        let speech = new SpeechSynthesisUtterance();

        if (massage.includes("how are you")) {
            speech.text = "I am fine by the grace of allah";
        }
        else if (massage.includes("what is your name")) {
            speech.text = "I am developer rakibs voice assistant";
        }
        else if (massage.includes("who made you")) {
            speech.text = "I was created by developer rakib, He is a skilled web designer and developer.";
        }
        else if (massage.includes("Assalam") || massage.includes("Walekum")) {
            speech.text = "Waalaykumu s-salam. How can I help you?";
        }
        else if (massage.includes("what are you doing")) {
            speech.text = "I am talking to you right now";
        }
        
        else if (massage.includes("good night")) {
            speech.text = "Good Night. Have a sweet dream";
        }
        else if (massage.includes("Tell us something about your developer?")) {
            speech.text = "he is a skilled and professional web desginer and developer. he studied computer science at comilla polytechnic institute. and also works with web desing and devopment and graphics desing.";
        }
        
        else if (massage.includes("where dose your sir study")) {
            speech.text = "he studied comilla polytechnic institute. department of computer science.";
        }
        else if (massage.includes("where is comilla polytechnic institute located")) {
            speech.text = "in comilla kotbari";
        }
        else if (massage.includes("how many department are there and what")) {
            speech.text = "there are six departments. computer, sivil, electrical, macanical, power, electronics";
        }
        else if (massage.includes("what is the name of ci sir of computer department")) {
            speech.text = "respected abdul wadud sir";
        }
        else if (massage.includes("what is the name of the principal of comilla polytechnic institute")) {
            speech.text = "respected mohammad rokibullah sir";
        }
        else if (massage.includes("good morning")) {
            speech.text = "Good Morning.";
        }
        else if (massage.includes("thank you")) {
            speech.text = "You are most welcome";
        }
        else if (massage.includes("love you")) {
            speech.text = "I love you too but as a friend";
        }
        else if (massage.includes("how can i communicate wite your sir")) {
            speech.text = "ok I redirect you to my sir Facebook account";
            window.open("https://www.facebook.com/freelancerrakib.pro/", "_blank");
        }
        else if (massage.includes("who is the best man in the world")) {
            speech.text = "hozrot muhammad sallallahu alaihi wasallam";
        }
        //else if (massage.includes("today date")) {
          //  speech.text = `${date}`;
       // }
        // else if (massage.includes("time")) {
        //     speech.text = `${time}`;
        // }
        else {
            speech.text = "Sorry I didn't understand Please try again.";
        }



        speech.pitch = 1;
        speech.volume = 1;
        speech.rate = 1;

        window.speechSynthesis.speak(speech);
        console.log(speech)
    }
} else {
    console.log("Speech Recognition Not Available")
}