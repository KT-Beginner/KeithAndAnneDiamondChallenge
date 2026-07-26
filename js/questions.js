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
        correct: 1,
        audio: "audio/bells.mp3",
         manualNext: true,   

        image: "images/quiz/wedding.jpg",
        photoTitle: "💍 Wedding Day 30th July 1966",
        photoText: "⛪St.Paul's Methodist Church, Dronfield.",
        revealImageAfterAnswer: true
    },
    {
        round: "💍 Wedding Day",
        question: "How old were the Happy Couple on their wedding day?",
        answers: [
            "19",
            "20",
            "21",
            "22"
        ],
        correct: 3,
        image: "images/quiz/certificate.jpg",
        photoTitle: "💍 Wedding certificate",
        revealImageAfterAnswer: true
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
        correct: 2,
        image: "images/quiz/wembley.jpg",
        photoTitle: "⚽🏆 England beat West Germany 4–2 after extra time",
        photoText: "The Jules Rimet Cup was the original trophy awarded to the winner of the FIFA World Cup.",
        revealImageAfterAnswer: true
    },
    {
        round: "💍 Wedding Day",
        question: "Who scored the winning goal for England?",
        answers: [
            "Bobby Charlton",
            "Jimmy Greaves",
            "Kevin Keegan",
            "Geoff Hurst"
        ],
        correct: 3,
        image: "images/quiz/hurst.jpg",
        photoTitle: "⚽🏆 Geoff Hurst scored three goals in the 1966 World Cup Final",
        photoText: "For many years, Hurst was the only player ever to score a ‘hat-trick’ in a World Cup Final. However, Kylian Mbappé equalled the feat in the 2022 World Cup Final for France.",
        revealImageAfterAnswer: true
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
         manualNext: true,   

    image: "images/quiz/out-of-time.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "🎵 Out of Time",
    photoText: "Out of time - The song was written by Mick Jagger and Keith Richards. The Rolling Stones' own version was also released in 1966 on their 'Aftermath' album.",
    },
    {
    round: "👨‍👩‍👧 Family",
    
    question: "Karen once had a birthday cake made in the shape of a ...",

    image: "images/quiz/womble.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/wombleanswer.jpg",
   
    answers: [
        "Mouse",
        "Sheep",
        "Womble",
        "Wombat"
    ],

    correct: 2,
        audio: "audio/wombles.mp3",
         manualNext: true,   

     photoTitle: "Remember your a womble, you're a womble, you're a wooooooomble!",
    photoText: "♻️ The Wombles were promoting recycling in the 1970s—decades before it became a worldwide movement!",
},
{
        round: "👨‍👩‍👧 Family",
        question: "Which church were Karen and Adam married in?",

        image: "images/quiz/karenwedding.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/karenwedding2.jpg",

        answers: [
            "St Thomas à Becket Church, Ramsey",
            "St Paul's Church, Hasland",
            "St Michael and All Angels Church. Hathersage",
            "St Thomas' Church, Brampton"
        ],
        correct: 3,
        audio: "audio/bells.mp3",
         manualNext: true,   

        photoTitle: "💍 Wedding Day 8th July 2000",
        photoText: "⛪St Thomas' Church, Brampton.",
        revealImageAfterAnswer: true
    },
{
     round: "👨‍👩‍👧 Family",
    question: "Which one of these outlaws stole from the rich to give to the poor?",
    answers: [
        "Robin Hood",
        "Laura Collins",
        "Will Scarlett",
        "Lois Collins"
    ],
    correct: 0,
    image: "images/quiz/robin.jpg",
    photoTitle: "🌳🏹 Robin Hood and his merry visitors",
    showPhotoTitleAfterAnswer: true
},{
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
    question: "Can you name the hotel?",
    image: "images/quiz/tunisia.jpg",
    caption:"🏖️☀️ A package holiday to Tunisia in the 1980s",
    answers: [
        "Tour Khalef",
        "Marhaba Beach",
        "El Kasar Resort",
        "Sousse Palace"
    ],
    correct: 0,

    revealImage: "images/quiz/hotel.jpg",
    photoTitle: "☀️🌴 Tour Khalef Hotel, Sousse",
    photoText: "✈️ A family holiday that started a passion for travel that continues to this day.",
    revealImageAfterAnswer: true
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
    photoTitle: "🐃 Water Buffalo is true!",
    photoText: "They did not travel by seaplane.",
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
    question: "Can you guess Which year this is?  Hint: It was the year the Queen opened the Channel Tunnel.",
    image: "images/quiz/1994.jpg",
    caption: "📸🧀 Smile Kevin - say cheese!",
    answers: [
        "1993",
        "1994",
        "1995",
        "1996"
    ],
    correct: 1
},
{ 
    round: "📅 Guess the Year",
    question: "Which year did Kevin and Dawn get married? Hint: Robbie Williams went to number 1 with Millenium in this year.",
    image: "images/quiz/kevinwedding.jpg",
    caption: "🌴🍹 Anyone for a rum punch?",
    answers: [
        "1996",
        "1997",
        "1998",
        "1999"
    ],
    correct: 2
},
{ 
    round: "📅 Guess the Year",
    question: "Which year is this?",
    image: "images/quiz/babylois.jpg",
    caption: "🍼🧸 The youngest member of the family arrives.",
    answers: [
        "2002",
        "2003",
        "2004",
        "2005"
    ],
    correct: 1
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
    round: "📅 Guess the Year",
    question: "What year was this school photo taken?",

    image: "images/quiz/school.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/schoolanswer.jpg",
   
    answers: [
        
        "2009",
        "2010",
        "2011",
        "2012"
    ],

    correct: 2,

     photoTitle: "📷 Calendar girls.",
    
},
{
    round: "📅 Guess the Year",
    question: "What year was this photo taken? Hint – it was the year of the London Olympics and the Queen's Diamond Jubilee.",

    image: "images/quiz/2012.jpg",

    answers: [
        
        "2011",
        "2012",
        "2013",
        "2014"
    ],

    correct: 1,

     photoText: "🥇At the 2012 London Olympics Team GB finished third in the medal table winning 65 medals (29 gold, 17 silver, and 19 bronze).",
    
},
{
    round: "📅 Guess the Year",
    question: "What year was this day at the races?",

    image: "images/quiz/races.jpg",
    
    answers: [
        
        "2012",
        "2014",
        "2016",
        "2018"
    ],

    correct: 2,
    
    photoTitle: "🧺 Picnic at the racecourse",
    showPhotoTitleAfterAnswer: true,

     photoText: "🏇 Celebrating Keith & Anne's Golden Anniversary (50 years together)",
    
},
{
    round: "📅 Guess the Year",
    question: "This was Boxing Day in which year? Hint: 👑 The Queen and Prince Philip had celebrated their Diamond Anniversary in November",

    image: "images/quiz/facepaint.jpg",
    
    answers: [
        
        "2007",
        "2011",
        "2014",
        "2018"
    ],

    correct: 0,
    
    photoTitle: "🐈‍⬛ Auditioning for 'Cats' the Musical",
    showPhotoTitleAfterAnswer: true,
    
},
{
    round: "🎵 Music Round",
    question: "Which legendary band recorded 'Lucy in the Sky with Diamonds' in 1967?",
    answers: [
        "The Kinks",
        "The Beatles",
        "The Hollies",
        "The Who"
    ],
    correct: 1,

    audioQuestion: "audio/lucy-intro.mp3",
    audioAnswer: "audio/lucy-answer.mp3",
    audioFull: "audio/lucy-full.mp3",

    image: "images/quiz/lucy.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "💎🎶 Lucy in the Sky with Diamonds",
    photoText: "The song was written by John Lennon and Paul McCartney."
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
    audioFull: "audio/diamonds-full.mp3",

    image: "images/quiz/diamonds.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "💎🎤 Diamonds Are Forever",
    photoText: "The theme song was performed by Shirley Bassey."
},
{
 round: "🎵 Music Round",
    question: "'How Deep Is Your Love' by the Bee Gees featured on the soundtrack of which famous 1977 film?",
    answers: [
        "Grease",
        "Footloose",
        "Dirty Dancing",
        "Saturday Night Fever"
    ],
    correct: 3,

    audioQuestion: "audio/beegees-intro.mp3",
    audioAnswer: "audio/beegees-answer.mp3",
    audioFull: "audio/beegees-full.mp3",
    image: "images/quiz/beegees.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "💎🎤 How Deep Is Your Love",
    photoText: "This became one of the Bee Gees' biggest hits."
},
{
 round: "🎵 Music Round",
    question: "This song by Huey Lewis & The News was the theme song from which 1985 blockbuster film?",
    answers: [
        "Ghostbusters",
        "Top Gun",
        "Back to the Future",
        "The Goonies"
    ],
    correct: 2,

    audioQuestion: "audio/poweroflove-intro.mp3",
    audioAnswer: "audio/poweroflove-answer.mp3",
    audioFull: "audio/poweroflove-full.mp3",
    image: "images/quiz/poweroflove.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "💎🍿 One of Karen's favourites!",
    photoText: "🎬 Huey Lewis himself appears as the school audition judge who rejects the band for being 'too darn loud!'"
},
{
 round: "🎵 Music Round",
    question: "Can you name this Rihanna song from 2012?",
    answers: [
        "Diamonds",
        "Like a Diamond",
        "Diamond Heart",
        "Diamonds are a Girl's Best Friend"
    ],
    correct: 0,

    audioQuestion: "audio/rihanna-intro.mp3",
    audioAnswer: "audio/rihanna-answer.mp3",
    audioFull: "audio/rihanna-full.mp3",
    image: "images/quiz/rihanna.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "This song became one of Rihanna's biggest worldwide hits",
    photoText: "💎'Diamonds' was written by Australian singer-songwriter Sia, who reportedly wrote the lyrics in just 14 minutes"
},
{
 round: "🎵 Music Round",
    question: "Taylor Swift's song 'Lover' has become a popular choice for which type of celebration?",
    answers: [
        "Birthday parties",
        "Graduation ceremonies",
        "Christmas parties",
        "Wedding first dances"
    ],
    correct: 3,

    audioQuestion: "audio/lover-intro.mp3",
    audioAnswer: "audio/lover-answer.mp3",
    audioFull: "audio/lover-full.mp3",
    image: "images/quiz/lover.jpg",
    revealImageAfterAnswer: true,
    photoTitle: "💍Taylor Swift – Lover (2019)",
    photoText: "🎬 'Lover' featured on the soundtrack of the 2022 TV series 'The Summer I Turned Pretty'"
},
{
    round: "✅ True or False",
    type: "truefalse",

    question: "This is Anne & Keith's wedding cake.",

    image: "images/quiz/cakebw.jpg",

    revealImageAfterAnswer: true,
    revealImage: "images/quiz/cake.jpg",
   
    answers: [
        "True",
        "False"
    ],

    correct: 1,

     photoTitle: "No. This cake was Karen and Adam's.",
    photoText: "🎂Made with love for their special day!",
},
{
    round: "✅ True or False",
    type: "truefalse",
    question: "The baby on Keith's shoulders is Karen.",
    answers: [
        "True",
        "False"
    ],
    correct: 1,
    image: "images/quiz/shoulders.jpg",
    photoTitle: "👶 Keith with baby Kevin on his shoulders",
    showPhotoTitleAfterAnswer: true
},
{
    round: "✅ True or False",
    type: "truefalse",
    question: "Anne & Keith's car in this photo is a Hillman Imp.",
    answers: [
        "True",
        "False"
    ],
    correct: 1,
    image: "images/quiz/anglia.jpg",
    photoTitle: "🚗 They did own a Hillman Imp, but this is a Ford Anglia",
    showPhotoTitleAfterAnswer: true
},
{
    round: "✅ True or False",
    type: "truefalse",
    question: "In 1982 Keith & Anne owned a green car.",

    answers: [
        "True",
        "False"
    ],

    correct: 0,

    image: "images/quiz/cortina.jpg",
    revealImageAfterAnswer: true,

    photoTitle: "🚗 Their dark green Ford Cortina",
    showPhotoTitleAfterAnswer: true
},

{
    round: "✅ True or False",
    type: "truefalse",
    question: "Anne & Keith visited the Isle of Man in 2019 with Sheila & Tony.",

    answers: [
        "True",
        "False"
    ],

    correct: 1,

    image: "images/quiz/man.jpg",
    revealImageAfterAnswer: true,

    photoTitle: "🏍️ Anne & Keith on the Isle of Man with Peter & Janet",
    showPhotoTitleAfterAnswer: true
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