const questions = [
    {
        round: "💍 Wedding Day",
        question: "What year did Keith and Anne get married?",
        answers: [
            "1965",
            "1966",
            "1967",
            "1968"
        ],
        correct: 1
    },
    {
        round: "💍 Wedding Day",
        question: "What other big event also took place on 30th July 1966?",
        answers: [
            "The Beatles Release 'Love me Do'",
            "Apollo 11 Moon Landing",
            "FIFA World Cup Final",
            "70 Mph speed limit introduced on UK roads"
        ],
        correct: 2
    },
    {
        round: "💍 Wedding Day",
        question: "Which song was at Number 1 in the UK charts on 30th July 1966?",
        answers: [
            "Out of Time – Chris Farlowe",
            "Good Vibrations – The Beach Boys",
            "You Don't Have to Say You Love Me – Dusty Springfield",
            "Strangers in the Night – Frank Sinatra"
        ],
        correct: 0,
        audio: "audio/out-of-time-clip.mp3",

    image: "images/quiz/out-of-time.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "🎵 Out of Time",
    photoText: "Out of time - The song was written by Mick Jagger and Keith Richards. The Rolling Stones' own version was also released in 1966 on their 'Aftermath' album.",
    },
    {
        round: "👨‍👩‍👧 Family",
        question: "What year did Keith and Anne get married?",
        answers: [
            "1965",
            "1966",
            "1967",
            "1968"
        ],
        correct: 1
    },
    {
        round: "🏖️ Holidays",
    question: "Which type of transport did Keith and Anne NOT use on their Far East trip in 2013?",
    answers: [
        "Boat",
        "Bicycle",
        "Water buffalo",
        "Seaplane"
    ],
    correct: 3,
    image: "images/quiz/buffalo.jpg",
    photoTitle: "🐃 Water Buffalo Taxi",
    photoText: "Yes this one's true! They did not travel by seaplane.",
    revealImageAfterAnswer: true
},    
{
        round: "🏖️ Holidays",
    question: "On her birthday in 2014 in Madagascar, Anne made friends with a 'black and white ruffed'.  What kind of animal is this?",
    answers: [
        "Penguin",
        "Lemur",
        "Monkey",
        "Badger"
    ],
    correct: 1,
    image: "images/quiz/lemur.jpg",
    photoTitle: "🌿 Black-and-White Ruffed Lemur",
    photoText: "Making a new friend in Madagascar.",
    revealImageAfterAnswer: true
},  
{
        round: "🏖️ Holidays",
    question: "One holiday in 2017 included a visit to Marsala. Where is this?",
    answers: [
        "Portugal",
        "Malta",
        "Sicily",
        "Croatia"
    ],
    correct: 2,
    image: "images/quiz/marsala.jpg",
    photoTitle: "🍷 Marsala, Sicily",
    photoText: "Famous for Marsala wine - Keith in his element!",
    revealImageAfterAnswer: true
},  
{
        round: "🏖️ Holidays",
    question: "In April 2018, Keith and Anne travelled to Japan to see the famous cherry blossoms. What are cherry blossoms called in Japanese?",
    answers: [
        "Bonsai",
        "Kimono",
        "Origami",
        "Sakura"
    ],
    correct: 3,
    image: "images/quiz/japan.jpg",
    photoTitle: "🌸 Sakura, Japan",
    photoText: "Hanami (cherry blossom viewing) and a traditional meal in a ryokan",
    revealImageAfterAnswer: true
},  
{
        round: "🏖️ Holidays",
    question: "Where did Anne and Keith meet Dracula in 2019?",
    answers: [
        "In the garlic aisle at Morrisons",
        "On the Transfăgărășan Highway, Romania",
        "At the blood donation centre",
        "At Bran Castle in Romania"
    ],
    correct: 3,
    image: "images/quiz/brancastle.jpg",
    photoTitle: "🧛 Bran Castle, Romania",
    revealImageAfterAnswer: true
},  
{
        round: "🏖️ Holidays",
    question: "Which UK town is famously associated with Dracula?",
    answers: [
        "Whitby",
        "Bath",
        "Canterbury",
        "York"
    ],
    correct: 0,
    image: "images/quiz/whitby.jpg",
    photoTitle: "🧛 Whitby Abbey steps",
    photoText: "Bram Stoker stayed here in 1890 and the town influenced his novel 'Dracula'.",
    revealImageAfterAnswer: true
},  
{
        round: "🏖️ Holidays",
    question: "A visit to the Storehouse on their trip to Dublin in March 2024 included a sample of...",
    answers: [
        "Potato cakes",
        "Guinness",
        "Irish whiskey",
        "Soda bread"
    ],
    correct: 1,
    image: "images/quiz/guinness.jpg",
   photoTitle: "🍺 A Pint at the Guinness Storehouse",
    revealImageAfterAnswer: true
},
{
        round: "🏖️ Holidays",
    question: "Also in 2024 they visited the northernmost point you can reach by road in mainland Europe. Where was this?",
    answers: [
        "North Cape, Norway",
        "Tromsø, Norway",
        "The Arctic Circle, Finland",
        "Svalbard, Norway"
    ],
    correct: 0,
    image: "images/quiz/northcape.jpg",
   photoTitle: "🧭 North Cape, Norway",
    revealImageAfterAnswer: true
},
{
        round: "🏖️ Holidays",
    question: "In Uzbekistan in 2025, Keith tried a Chugurma. What is it?",
    answers: [
        "A type of cheese",
        "A traditional fur hat",
        "A long ceremonial coat",
        "A traditional rice dish"
    ],
    correct: 1,
    image: "images/quiz/chugurma.jpg",
   photoTitle: "🎩 Trying on a Chugurma",
    revealImageAfterAnswer: true
},  
{ 
    round: "📅 Guess the Year",
    question: "Which year is this?",
    image: "images/quiz/boxing-day-2006.jpg",
    caption: "🎄 Boxing Day with the family",
    answers: [
        "2004",
        "2005",
        "2006",
        "2007"
    ],
    correct: 2
},
{
    round: "🎵 Music Round",
    question: "The James Bond film Diamonds Are Forever was released in 1971. Who sang the theme song?",
    answers: [
        "Shirley Bassey",
        "Lulu",
        "Nancy Sinatra",
        "Barbra Streisand"
    ],
    correct: 0,

    audioQuestion: "audio/diamonds-intro.mp3",
    audioAnswer: "audio/diamonds-answer.mp3",

    image: "images/diamonds.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "💎 Diamonds Are Forever",
    photoText: "The theme song was performed by Shirley Bassey."
},
 {
     round: "❤️ Keith & Anne",
        question: "What is 15th wedding anniversary known as?",
        answers: [
            "Crystal",
            "Cotton",
            "Leather",
            "Gold"
        ],
        correct: 0
    }
];