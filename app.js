let navLinks = document.getElementById("navLinks")
const genreSelect = document.querySelector('.genre-select')
const yearSelect = document.querySelector('.year-select')
const ratingSelect = document.querySelector('.rating-select')
const selectButton = document.querySelector('.select-button')
const search = document.getElementById('search')
const searchButton = document.getElementById('search-button')
let result = 0
const movies = [
{
    name: 'The Power of Dog',
    year: 2021,
    ImdbRating: 6.9,
    image: "https://upload.wikimedia.org/wikipedia/en/6/6d/The_Power_of_the_Dog_%28film%29.jpg",
    genre: 'drama',
    info: "A domineering rancher responds with mocking cruelty when his brother brings home a new wife and her son, until the unexpected comes to pass."
    },
    {
    name: 'Grave Encounters',
    year: 2011,
    ImdbRating: 6.1,
    image: 'https://upload.wikimedia.org/wikipedia/en/8/8a/Grave-Encounters-Poster-2011.jpg',
    genre: 'horror',
    info: "In a bid to increase the ratings of their reality show, a production team locks itself in a psychiatric hospital that is allegedly haunted to find proof of paranormal activity."
    },
    {
    name: 'A Monster Calls',
    year: 2016,
    ImdbRating: 7.5,
    image: "https://m.media-amazon.com/images/I/91O6W51G3SL._SL1500_.jpg"
    ,
    genre: 'drama, sci-fi',
    info: "Conor, a twelve-year-old boy, encounters an ancient tree monster who proceeds to help him cope with his mother's terminal illness and being bullied in school."
    },
    {
    name: 'Paris, Texas',
    year: 1984,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BM2RjMmU3ZWItYzBlMy00ZmJkLWE5YzgtNTVkODdhOWM3NGZhXkEyXkFqcGdeQXVyNDA5Mjg5MjA@._V1_FMjpg_UX1000_.jpg",
    genre: 'drama, romance',
    info: "A disheveled man who wanders out of the desert, Travis Henderson (Harry Dean Stanton) seems to have no idea who he is. When a stranger manages to contact his brother, Walt (Dean Stockwell), Travis is awkwardly reunited with his sibling. Travis has been missing for years, and his presence unsettles Walt and his family, which also includes Travis's own son, Hunter (Hunter Carson). Soon Travis must confront his wife, Jane (Nastassja Kinski), and try to put his life back together."
    },
    {
    name: 'Kiss and Cry',
    year: 2016,
    ImdbRating: 6.7,
    image: "https://image.tmdb.org/t/p/w220_and_h330_face/uHErYJ2TfP0ihIEMpD2zCvbVIIB.jpg",
    genre: 'drama, romance',
    info: "An 18-year-old figure skater makes medical history in her battle against a rare type of sarcoma."
    },
    {
    name: 'Saw I',
    year: 2009,
    ImdbRating: 6.2,
    image: "https://image.tmdb.org/t/p/w220_and_h330_face/6lSBajR9hahr8JPLH0ErQnPdgtH.jpg",
    genre: 'mystery, horror',
    info: "Two men awaken to find themselves on the opposite sides of a dead body, each with specific instructions to kill the other or face consequences. These two are the latest victims of the Jigsaw Killer."
    },
    {
    name: 'Serenity',
    year: 2005,
    ImdbRating: 7.8,
    image: "https://image.tmdb.org/t/p/w220_and_h330_face/2ZOm4cedJanmN85ZiWrwZPUNv0d.jpg",
    genre: 'sci-fi, action',
    info: "The Alliance, a military force that has colonised the galaxy, is in pursuit of two fugitives who are hiding in Serenity, a spaceship, whose crews comprises rebels."
    },
    {
    name: 'About Schmidt',
    year: 2002,
    ImdbRating: 7.2,
    image: "https://image.tmdb.org/t/p/w220_and_h330_face/5IfzQlsI2W2YDtn35wd1jsyd6WV.jpg",
    genre: 'comedy , drama',
    info: "A newly retired Warren Schmidt forces himself into seclusion after his wife suddenly dies. Faced with the prospect of an uncertain future, he sets out to postpone the marriage of his daughter."
    },
    {
    name: 'Rumble in the Bronx',
    year: 1995,
    ImdbRating: 6.7,
    image: "https://image.tmdb.org/t/p/w220_and_h330_face/1nAfchiXHQB3iyhK8fCJJEnNs5A.jpg",
    genre: 'comedy, action',
    info: "Keung, a Hong Kong policeman, travels to New York for his uncle's wedding, but he ends up befriending a local gang to bring down an evil criminal syndicate."
    },
    {
    name: 'The Adam Project',
    year: 2022,
    ImdbRating: 6.8,
    image: "https://de.web.img2.acsta.net/pictures/22/03/01/15/10/2310052.jpg",
    genre: 'action',
    info: "After accidentally crash-landing in 2022, time-traveling fighter pilot Adam Reed teams up with his 12-year-old self for a mission to save the future."
    },
    {
    name: 'Spider-Man: No Way Home',
    year: 2021,
    ImdbRating: 8.5,
    image: "https://images-na.ssl-images-amazon.com/images/I/91PKNbBAufL._RI_.jpg",
    genre: 'action',
    info: "With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man."
    },
    {
    name: 'X',
    year: 1996,
    ImdbRating: 6.1,
    image: "https://m.media-amazon.com/images/I/516kZc7h1BL._SY445_.jpg",
    genre: 'drama, action, animation',
    info: "In this fantastical animated tale, Kamui Shiro is a warrior charged with making a world-altering decision as he weighs his allegiance to powerful supernatural forces -- the Dragons of Heaven or the Dragons of Earth. His choice will make the difference between humanity thriving or perishing. Meanwhile, mystical feuding sisters Hinoto and Kanoe can both see into the future, but each one envisions a different reality. Which glimpse of humanity's fate will turn out to be true?"
    },
    {
    name: 'The Lone Star',
    year: 1996,
    ImdbRating: 7.4,
    image: "https://www.cinema.de/sites/default/files/styles/schema_org/public/sync/cms3.cinema.de/imgdb/moviedb/48/b1198f5647f90e9044ac4b882cf8b8af.jpeg?itok=WQ9AWL1n",
    genre: 'drama, mystery',
    info: "In a Texan town, long-buried secrets, involving dirty money, infidelity and abuse of power, see the light of day when two officers discover a skeleton with a Masonic ring."
    }, 
    {
    name: 'The Triplets of Belleville',
    year: 2003,
    ImdbRating: 7.8,
    image: "https://m.media-amazon.com/images/I/51tmcvsNTbL.jpg",
    genre: 'drama, comedy, animation',
    info: "This animated film follows elderly Frenchwoman Madame Souza as she becomes involved in international intrigue when her grandson, Champion, a professional cyclist, is kidnapped and taken abroad. Joined by her faithful dog, Bruno, Souza embarks on a journey to find Champion, and stumbles across unlikely allies in the form of three sisters who are veterans of the vaudeville stage. Tracking down Champion's criminal captors, the quartet of old women use their wits to try and win the day."
    },
    {
    name: 'A Beautiful Mind',
    year: 2001,
    ImdbRating: 8.2,
    image: "https://images-na.ssl-images-amazon.com/images/I/61uzUoS79LL.jpg",
    genre: 'drama, romance',
    info: "John Nash, a brilliant but asocial mathematical genius, finds his life changing for the worse after he accepts an assignment from William Parcher."
    },
    {
    name: 'Azumi',
    year: 2003,
    ImdbRating: 6.8,
    image: "https://m.media-amazon.com/images/M/MV5BNGM2ZTg5OGUtYzNhMi00MDFjLWE1MDItNDllMzZmYWMyNzhkL2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    genre: 'drama, action',
    info: "In 19th-century Japan a master swordsman turns a girl named Azumi (Aya Ueto) and a group of other orphans into assassins whose mission is to eliminate hostile warlords. When one such warlord orders the destruction of the young assassins, his lackey liberates a fearsome killer named Bijomaru to accomplish the task. A grisly battle ensues as Azumi and her comrades fight for survival."
    },
    {
    name: 'Spotlight',
    year: 2015,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/I/91F8ampdMOL._SL1500_.jpg",
    genre: 'drama',
    info: "Martin Baron joins the Boston Globe as an editor and pushes four journalists named Michael, Walter, Sacha and Matt to pursue a story about the child molestation charges against the local church."
    },
    {
    name: 'tick, tick...BOOM!',
    year: 2021,
    ImdbRating: 7.5,
    image: "https://m.media-amazon.com/images/I/81M2-ZD10SL._SL1500_.jpg",
    genre: 'drama',
    info: "Based on the autobiographical musical by playwright Jonathan Larson. It's the story of an aspiring composer in New York City who is worried he made the wrong career choice, whilst navigating the pressures of love and friendship."
    },
    {
    name: 'The Father',
    year: 2020,
    ImdbRating: 8.0,
    image: "https://m.media-amazon.com/images/M/MV5BZGJhNWRiOWQtMjI4OS00ZjcxLTgwMTAtMzQ2ODkxY2JkOTVlXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genre: 'drama',
    info: "A man refuses all assistance from his daughter as he ages. As he tries to make sense of his changing circumstances, he begins to doubt his loved ones, his own mind and even the fabric of his reality."
    },
    {
    name: 'The Tingler',
    year: 1959,
    ImdbRating: 6.6,
    image: "https://m.media-amazon.com/images/I/61BxHrmOGKL._SY445_.jpg",
    genre: 'horror, sci-fi',
    info: "A pathologist operates a deaf-mute woman to test his theory of 'The Tingler', a parasite that feeds on its host and grows when its host is scared, effectively crushing that person's spine."
    },
    {
    name: 'The Birds',
    year: 1963,
    ImdbRating: 7.7,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c0/The_Birds_original_poster.jpg",
    genre: 'horror',
    info: "Melanie, a rich socialite, follows Mitch, a lawyer, to his home in Bodega Bay to play a practical joke on him. Things take a bizarre turn when the birds in the area begin to attack the people there."
    },
    {
    name: 'Psycho',
    year: 1960,
    ImdbRating: 8.5,
    image: "https://cps-static.rovicorp.com/2/Open/NBC%20Universal%20Distribution/Movies/Psycho/_derived_jpg_q90_310x470_m0/psycho---high-res-download.jpg",
    genre: 'horror',
    info: "Marion disappears after stealing money from her employer. Her lover and sister try to find her and end up reaching the infamous Bates Motel, where they meet Norman Bates."
    },
    {
    name: 'The Descent',
    year: 2005,
    ImdbRating: 7.2,
    image: "https://m.media-amazon.com/images/I/41cdS6HCODL.jpg",
    genre: 'horror',
    info: "A group of friends go on an expedition to a cave. Their expedition turns into a nightmare when they get trapped inside the cave and are pursued by blood-thirsty predators."
    },
    {
    name: 'Jekyll',
    year: 2007,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BMTUzMjkzNDY0MF5BMl5BanBnXkFtZTcwNDQyMzA1MQ@@._V1_FMjpg_UX1000_.jpg",
    genre: 'horror',
    info: "Tom Jackman,the only descendent of Mr. Jekyll,protects his wife and children from his dark side.He and Mr. Hyde do not know about an ancient organization that monitors their every move."
    },
    {
    name: 'The Shivering Truth',
    year: 2018,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BMGY3ZDRjZjYtMjJmZS00OGRhLWE4OGQtOTYxMGRmZjZjN2MxXkEyXkFqcGdeQXVyNjkwMTYxMTE@._V1_.jpg",
    genre: 'horror, comedy, animation',
    info: "'The Shivering Truth' seeks to access the unconscious mind with its new stop-motion anthology comedy that is used to tackle topics on life, death and human nature. Darkly surreal and delicately crafted, it delves into riotous daymares that reek of dream logic. It is a series of loosely-linked emotional parables about stories within stories that seep from the mind and into the real world. Watch as a guy grows hands out of his chest and a little girl goes missing in her own living room in this dark anthology where escape is a fantasy."
    },
    {
    name: 'Hereditary',
    year: 2018,
    ImdbRating: 7.3,
    image: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_FMjpg_UX1000_.jpg",
    genre: 'horror, drama',
    info: "'After her mother passes away, Annie and the rest of the family are grief-stricken. Soon, strange things start occurring and the horrifying truth about Annie's ancestry begins to come to light."
    },
    {
    name: 'Unbound Evil',
    year: 2022,
    ImdbRating: 8.1,
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Unbound_Evil_Filmplakat.jpg/800px-Unbound_Evil_Filmplakat.jpg",
    genre: 'horror, mystery',
    info: "While witnessing a horrific paranormal occurrence inside an abandoned church, a military commando led by a ruthless colonel, discovers a digital tablet with video footage on it: co-workers filming their trip in the woods, connecting the hikers in the footage with the unbound evil inside the church."
    },
    {
    name: 'Barun Rai and the House on the Cliff',
    year: 2021,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BMGMzN2JkNGQtZGQyOC00NzI1LTliZTAtOWMxMTVmNzYxNTZkXkEyXkFqcGdeQXVyMTkzODk3NjU@._V1_.jpg",
    genre: 'horror',
    info: "Newly-weds Soumili and Harmesh Banerjee have just moved into their dream home and life should be perfect. But their love is being tested by unexplained incidents. Enter Barun Rai, As his expertise lies in solving paranormal activities."
    },
    {
    name: 'A volte nel buio (Sometimes in the dark)',
    year: 2021,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BZDZmZGViMjMtNWYzNC00M2RiLTg2YzMtZjYyM2RkOTkyN2VhXkEyXkFqcGdeQXVyNjM1ODE2ODc@._V1_FMjpg_UX1000_.jpg",
    genre: 'horror',
    info: "A remote village in the mountains. A community affected by a mysterious illness. Sudden death among the inhabitants of the township.The fear of them all, Gorecki, chief of the sick people, strangely gets attached to Giacomo, an 'healthy' boy, as he sees in the young boy a chance for redemption and salvation."
    },
    {
    name: 'The Limey',
    year: 1999,
    ImdbRating: 6.9,
    image: "https://m.media-amazon.com/images/I/61LVtKsL4ZL._SL1181_.jpg",
    genre: 'drama, mystery',
    info: "An extremely volatile and dangerous Englishman goes to Los Angeles to find the man he considers responsible for his daughter's death."
    },
    {
    name: 'Suicide Kings',
    year: 1997,
    ImdbRating: 6.9,
    image: "https://m.media-amazon.com/images/I/51KtXbcBbVL._SY445_.jpg",
    genre: 'drama, mystery, comedy',
    info: "Avery, Max and two friends, all wealthy men in their 20s, kidnap former Mafia boss Charlie in an attempt to pay the $2 million ransom on the unrelated kidnapping of Avery's sister. Their plan runs into trouble at every turn, and, with the help of Charlie's psychological manipulation, the men begin to suspect that one or more among them was involved in the first kidnapping."
    },
    {
    name: 'The Crimson Rivers',
    year: 2000,
    ImdbRating: 6.9,
    image: "https://m.media-amazon.com/images/M/MV5BOGNmMDgxZTItYjNkNy00NDlhLTk2ZmItM2UwNDcwYzhmNDU2XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_.jpg",
    genre: 'mystery',
    info: "Two French cops, investigating separate murders, find a common link between the killings. As more murders occur, the two find an increasing number of horrific details pointing to a conspiracy."
    },
    {
    name: 'Extremely Loud & Incredibly Close',
    year: 2011,
    ImdbRating: 6.9,
    image: "https://upload.wikimedia.org/wikipedia/en/f/fd/Extremely_loud_and_incredibly_close_film_poster.jpg",
    genre: 'mystery, drama',
    info: "A nine-year-old amateur inventor, Francophile, and pacifist searches New York City for the lock that matches a mysterious key left behind by his father, who died in the World Trade Center on September 11, 2001."
    },
    {
    name: 'Death on the Nile',
    year: 2022,
    ImdbRating: 6.4,
    image: "https://m.media-amazon.com/images/M/MV5BNjI4ZTQ1OTYtNTI0Yi00M2EyLThiNjMtMzk1MmZlOWMyMDQwXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    genre: 'mystery',
    info: "Belgian sleuth Hercule Poirot's Egyptian vacation aboard a glamorous river steamer turns into a terrifying search for a murderer when a picture-perfect couple's idyllic honeymoon is tragically cut short."
    },
    {
    name: 'Gaslight',
    year: 1944,
    ImdbRating: 7.8,
    image: "https://m.media-amazon.com/images/M/MV5BNTI0Y2Q1YjAtZTJhOS00NTZjLTk5ZWItNzJiMTM1NGVjZThlL2ltYWdlXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_.jpg",
    genre: 'mystery',
    info: "After the death of her famous opera-singing aunt, Paula  is sent to study in Italy to become a great opera singer as well. While there, she falls in love with the charming Gregory Anton. The two return to London, and Paula begins to notice strange goings-on: missing pictures, strange footsteps in the night and gaslights that dim without being touched. As she fights to retain her sanity, her new husband's intentions come into question."
    },
    {
    name: 'The Silence of the Lambs',
    year: 1991,
    ImdbRating: 8.6,
    image: "https://m.media-amazon.com/images/I/51SHYSFNP2L._SY445_.jpg",
    genre: 'mystery, horror',
    info: "Clarice Starling, an FBI agent, seeks help from Hannibal Lecter, a psychopathic serial killer and former psychiatrist, in order to apprehend another serial killer who has been claiming female victims."
    },
    {
    name: 'Seven',
    year: 1995,
    ImdbRating: 8.6,
    image: "https://m.media-amazon.com/images/M/MV5BOTUwODM5MTctZjczMi00OTk4LTg3NWUtNmVhMTAzNTNjYjcyXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    genre: 'mystery',
    info: "A serial killer begins murdering people according to the seven deadly sins, and it is up to a detective who is about to retire and another who just moved to the city to bring him to justice."
    },
    {
    name: 'Get Out',
    year: 2017,
    ImdbRating: 8.6,
    image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwNzcwMzc0MTI@._V1_.jpg",
    genre: 'mystery, horror',
    info: "Chris, an African-American man, decides to visit his Caucasian girlfriend's parents during a weekend getaway. Although they seem normal at first, he is not prepared to experience the horrors ahead."
    },
    {
    name: 'Mulholland Drive',
    year: 2001,
    ImdbRating: 7.9,
    image: "https://de.web.img3.acsta.net/pictures/22/01/06/12/38/3893482.jpg",
    genre: 'mystery',
    info: "Rita, a dark-haired amnesiac, and Betty, a perky blonde actress, team up to find clues related to Rita's accident and ascertain her true identity."
    },
    {
    name: 'The Girl with the Dragon Tattoo',
    year: 2011,
    ImdbRating: 7.8,
    image: "https://m.media-amazon.com/images/M/MV5BMTczNDk4NTQ0OV5BMl5BanBnXkFtZTcwNDAxMDgxNw@@._V1_.jpg",
    genre: 'mystery',
    info: "Mikael Blomkvist, a journalist, hires Lisbeth Salander, a computer hacker, to solve the mystery of a woman who has been missing for forty years. The two discover more than they bargained for."
    },
    {
    name: 'Last Night in Soho',
    year: 2021,
    ImdbRating: 7.1,
    image: "https://m.media-amazon.com/images/M/MV5BZjgwZDIwY2MtNGZlNy00NGRlLWFmNTgtOTBkZThjMDUwMGJhXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    genre: 'mystery, horror, drama',
    info: "An aspiring fashion designer is mysteriously able to enter the 1960s, where she encounters a dazzling wannabe singer. However, the glamour is not all it appears to be, and the dreams of the past start to crack and splinter into something far darker."
    },
    {
    name: 'Chinatown',
    year: 1974,
    ImdbRating: 8.2,
    image: "https://m.media-amazon.com/images/I/71TZWDyc+gL._SL1183_.jpg",
    genre: 'mystery, drama',
    info: "Mrs Mulwray hires Detective Jake, who specializes in matrimonial cases, to spy on her husband, the builder of the city's water system. He finds himself in a web of deceit when Mr Mulwray dies."
    },
    {
    name: 'The Prestige',
    year: 2006,
    ImdbRating: 8.5,
    image: "https://m.media-amazon.com/images/I/51wILNNX2VL._SY445_.jpg",
    genre: 'mystery',
    info: "Two friends and fellow magicians become bitter enemies after a sudden tragedy. As they devote themselves to this rivalry, they make sacrifices that bring them fame but with terrible consequences."
    },
    {
    name: 'Gone Girl',
    year: 2014,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BMTk0MDQ3MzAzOV5BMl5BanBnXkFtZTgwNzU1NzE3MjE@._V1_FMjpg_UX1000_.jpg",
    genre: 'mystery, drama',
    info: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent."
    },
    {
    name: 'The Batman',
    year: 2022,
    ImdbRating: 8.3,
    image: "https://de.web.img3.acsta.net/pictures/22/01/28/11/29/1668157.jpg",
    genre: 'mystery, sci-fi, action',
    info: "Batman ventures into Gotham City's underworld when a sadistic killer leaves behind a trail of cryptic clues. As the evidence begins to lead closer to home and the scale of the perpetrator's plans become clear, he must forge new relationships, unmask the culprit and bring justice to the abuse of power and corruption that has long plagued the metropolis."
    },
    {
    name: 'Soul',
    year: 2020,
    ImdbRating: 8.3,
    image: "https://m.media-amazon.com/images/M/MV5BMTg1MWM3NzgtZDkwMS00M2Y5LWIwY2UtNTMyYWJlZWU2ZmMwXkEyXkFqcGdeQXVyODQ4MjU1MDk@._V1_.jpg",
    genre: 'comedy, animation',
    info: "A jazz musician, stuck in a mediocre job, finally gets his big break. However, when a wrong step takes him to the Great Before, he tries to help an infant soul in order to return to reality."
    },
    {
    name: 'The Grand Budapest Hotel',
    year: 2014,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BMzM5NjUxOTEyMl5BMl5BanBnXkFtZTgwNjEyMDM0MDE@._V1_FMjpg_UX1000_.jpg",
    genre: 'comedy, drama',
    info: "Gustave H, a concierge, is wrongly framed for murder at the Grand Budapest Hotel. In the process of proving his innocence, he befriends a lobby boy."
    },
    {
    name: 'Coco',
    year: 2017,
    ImdbRating: 8.1,
    image: "https://lumiere-a.akamaihd.net/v1/images/p_coco_19736_fd5fa537.jpeg?region=0%2C0%2C540%2C810",
    genre: 'comedy, animation',
    info: "Miguel pursues his love for singing in spite of his family's ban on music. He stumbles into the Land of the Dead, where he learns about his great-great-grandfather who was a legendary singer."
    },
    {
    name: "Don't Look Up",
    year: 2021,
    ImdbRating: 7.2,
    image: "https://m.media-amazon.com/images/M/MV5BNzk0OWQzMDQtODg1ZC00Yjg2LWJjYzAtNGRjMjE2M2FlYjZjXkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_.jpg",
    genre: 'comedy, sci-fi',
    info: "Two low-level astronomers must go on a giant media tour to warn mankind of an approaching comet that will destroy planet Earth."
    },
    {
    name: "WALL-E",
    year: 2008,
    ImdbRating: 8.4,
    image: "https://m.media-amazon.com/images/M/MV5BMjExMTg5OTU0NF5BMl5BanBnXkFtZTcwMjMxMzMzMw@@._V1_.jpg",
    genre: 'comedy, sci-fi, animation',
    info: "A robot who is responsible for cleaning a waste-covered Earth meets another robot and falls in love with her. Together, they set out on a journey that will alter the fate of mankind."
    },

    {
    name: "Toy Story",
    year: 1995,
    ImdbRating: 8.3,
    image: "https://images-na.ssl-images-amazon.com/images/I/91GuxUoAATL.jpg",
    genre: 'comedy, animation',
    info: "Woody, a good-hearted cowboy doll who belongs to a young boy named Andy, sees his position as Andy's favorite toy jeopardized when his parents buy him a Buzz Lightyear action figure. Even worse, the arrogant Buzz thinks he's a real spaceman on a mission to return to his home planet. When Andy's family moves to a new house, Woody and Buzz must escape the clutches of maladjusted neighbor Sid Phillips and reunite with their boy."
    },
    {
    name: "Tarzan",
    year: 1999,
    ImdbRating: 7.3,
    image: "https://www.themoviedb.org/t/p/w500/a0Syo09bmNJgehjfeVL6meR9Mjh.jpg",
    genre: 'comedy, animation',
    info: "Tarzan, an orphan raised by mountain gorillas, rescues a woman explorer, Jane. After realising that he's a human, Tarzan must choose between civilization and the jungle life."
    },
    {
    name: "Mulan",
    year: 1998,
    ImdbRating: 7.6,
    image: "https://m.media-amazon.com/images/I/51XZIkyBoNL._SY445_.jpg",
    genre: 'comedy, animation',
    info: "Young Mulan is distraught to learn that her weak father must join the army to fight the invading Huns. Unwilling to endanger his life, she disguises herself as a man and joins the army in his place."
    },
    {
    name: "Kick-Ass",
    year: 2021,
    ImdbRating: 7.6,
    image: "https://cache.pressmailing.net/thumbnail/story_hires/f8f215cd-db28-453d-a357-3f31561aa100/Sky_Free_Guy.jpg.jpg",
    genre: 'comedy, action',
    info: "Comic book geek Dave sets out to become Kick-Ass, a real-life superhero. Big Daddy and Hit-Girl attempt to dismantle the underworld empire of mob boss Frank D'Amico, when Kick-Ass gets involved."
    },
    {
    name: "Free Guy",
    year: 2010,
    ImdbRating: 7.2,
    image: "https://m.media-amazon.com/images/M/MV5BMTMzNzEzMDYxM15BMl5BanBnXkFtZTcwMTc0NTMxMw@@._V1_.jpg",
    genre: 'comedy, action',
    info: "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him."
    },
    {
    name: "Superbad",
    year: 2007,
    ImdbRating: 7.6,
    image: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_FMjpg_UX1000_.jpg",
    genre: 'comedy,action',
    info: "When a bank teller discovers he's actually a background player in an open-world video game, he decides to become the hero of his own story -- one that he can rewrite himself. In a world where there's no limits, he's determined to save the day his way before it's too late, and maybe find a little romance with the coder who conceived him."
    },
    {
    name: "The Hangover",
    year: 2009,
    ImdbRating: 7.2,
    image: "https://cache.pressmailing.net/thumbnail/story_hires/f8f215cd-db28-453d-a357-3f31561aa100/Sky_Free_Guy.jpg.jpg",
    genre: 'comedy',
    info: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtY2VkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg"
    },
    {
    name: "It's a Mad, Mad, Mad, Mad World",
    year: 1963,
    ImdbRating: 7.5,
    image: "https://m.media-amazon.com/images/I/91FhqCSollL._SX342_.jpg",
    genre: 'comedy',
    info: "A group of greedy people participate in an adventurous journey through the countryside in search of a buried treasure."
    },
    {
    name: "The General",
    year: 1926,
    ImdbRating: 8.2,
    image: "https://m.media-amazon.com/images/M/MV5BYmRiMDFlYjYtOTMwYy00OGY2LWE0Y2QtYzQxOGNhZmUwNTIxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genre: 'comedy, action',
    info: "Johnny, who is believed to be a coward, gets a chance to prove his valour when his beloved, Annabelle is captured by Union Spies during the Civil War."
    },
    {
    name: "Red Notice",
    year: 2021,
    ImdbRating: 6.4,
    image: "https://m.media-amazon.com/images/M/MV5BZmRjODgyMzEtMzIxYS00OWY2LTk4YjUtMGMzZjMzMTZiN2Q0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    genre: 'comedy, action',
    info: "In the world of international crime, an Interpol agent attempts to hunt down and capture the world's most wanted art thief."
    },
    {  
    name: "Game Night",
    year: 2010,
    ImdbRating: 6.9,
    image: "https://m.media-amazon.com/images/M/MV5BMjI3ODkzNDk5MF5BMl5BanBnXkFtZTgwNTEyNjY2NDM@._V1_.jpg",
    genre: 'comedy, sci-fi',
    info: "When Max and Annie play a harmless murder mystery game with Max's brother Brooks and some friends, things begin to take surprising twists and turns as not all is what it seems to be."
    },
    {
    name: "Idiocracy",
    year: 2006,
    ImdbRating: 6.5,
    image: "https://m.media-amazon.com/images/M/MV5BMTZkYjM3MTItZWMwMC00YzNkLTkzNTgtMGIwMDVhYmRiMzkwXkEyXkFqcGdeQXVyMTAyOTE2ODg0._V1_.jpg",
    genre: 'comedy, sci-fi',
    info: "Joe's life changes when he is chosen to be the guinea pig for a secret hibernation experiment. When he wakes up from 500 years of slumber, he realizes that he is the smartest man on the planet."
    },
    {
    name: "Half Baked",
    year: 1998,
    ImdbRating: 6.6,
    image: "https://m.media-amazon.com/images/M/MV5BZWMxZWE1ZjQtYzAyNS00NjEwLTgwM2ItMWI2NWVhZGJiYjk3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    genre: 'comedy, sci-fi',
    info: "When a member of their crew gets arrested for killing a New York City police horse by feeding it junk food, three slackin' stoners are forced to get off their butts and raise bail by selling pot stolen from a pharmaceutical lab. It's a risky plan but, hey, these are stand-up guys who would do anything to help out a friend in need."
    },
    {
    name: "1917",
    year: 2019,
    ImdbRating: 8.3,
    image: "https://m.media-amazon.com/images/I/81zcfMMyAnL._SL1500_.jpg",
    genre: 'action, drama',
    info: "Two soldiers, assigned the task of delivering a critical message to another battalion, risk their lives for the job in order to prevent them from stepping right into a deadly ambush."
    },
    {
    name: "Zack Snyder's Justice League",
    year: 2020,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/I/81zcfMMyAnL._SL1500_.jpg",
    genre: 'action, sci-fi',
    info: "Bruce Wayne and Diana Prince try to bring the metahumans of Earth together after the death of Clark Kent. Meanwhile, Darkseid sends Steppenwolf to Earth with a vast army to subjugate humans."
    },
    {
    name: "The Dark Knight",
    year: 2008,
    ImdbRating: 9.1,
    image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
    genre: 'action, sci-fi',
    info: "After Gordon, Dent and Batman begin an assault on Gotham's organised crime, the mobs hire the Joker, a psychopathic criminal mastermind who offers to kill Batman and bring the city to its knees."
    },
    {
    name: "The Terminator",
    year: 1984,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BYTViNzMxZjEtZGEwNy00MDNiLWIzNGQtZDY2MjQ1OWViZjFmXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
    genre: 'action, sci-fi',
    info: "A cyborg assassin is sent back in time to kill Sarah, a waitress, in a bid to stop her son who will wage a long war against his enemy in the future unless the course of history is altered."
    },
    {
    name: "Indiana Jones and the Temple of Doom",
    year: 1984,
    ImdbRating: 7.5,
    image: "https://m.media-amazon.com/images/M/MV5BZDIzNzM5MDUtZmI5MC00NGQ5LWFlNzEtYzE3ODIxNDI3ZmNhXkEyXkFqcGdeQXVyNjQ4ODE4MzQ@._V1_.jpg",
    genre: 'action',
    info: "Indiana Jones, a legendary archaeologist, finds himself in India, where a bunch of poor villagers reaches out to him to track down an ancient stone that has been stolen by an evil priest."
    },
    {
    name: "Minority Report",
    year: 2002,
    ImdbRating: 7.7,
    image: "https://m.media-amazon.com/images/M/MV5BZTI3YzZjZjEtMDdjOC00OWVjLTk0YmYtYzI2MGMwZjFiMzBlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    genre: 'action',
    info: "A future technology makes it possible for cops to catch criminals before a crime is committed. John Anderton is accused of one such crime and sets out to prove his innocence."
    },
    {
    name: "Tenet",
    year: 2020,
    ImdbRating: 7.4,
    image: "https://images-na.ssl-images-amazon.com/images/I/91q8qvm88VL.jpg",
    genre: 'action, sci-fi',
    info: "When a few objects that can be manipulated and used as weapons in the future fall into the wrong hands, a CIA operative, known as the Protagonist, must save the world."
    },
    {
    name: "Bad Boys",
    year: 1995,
    ImdbRating: 6.8,
    image: "https://m.media-amazon.com/images/M/MV5BMGE1ZTQ0ZTEtZTEwZS00NWE0LTlmMDUtMTE1ZWJiZTYzZTQ2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg",
    genre: 'action, comedy',
    info: "Marcus, a family man, and Mike, a ladies' man, are partners in the Miami police. Things get complicated when they assume each other's identity while investigating a drug deal."
    },
    {
    name: "The Incredible Hulk",
    year: 2008,
    ImdbRating: 6.7,
    image: "https://m.media-amazon.com/images/M/MV5BMTUyNzk3MjA1OF5BMl5BanBnXkFtZTcwMTE1Njg2MQ@@._V1_.jpg",
    genre: 'action, sci-fi',
    info: "Dr Bruce Banner subjects himself to high levels of gamma radiation which triggers his transformation into a huge green creature, the Hulk, whenever he experiences negative emotions such as anger."
    },
    {
    name: "Atomic Blonde",
    year: 2017,
    ImdbRating: 6.7,
    image: "https://m.media-amazon.com/images/M/MV5BMjM5NDYzMzg5N15BMl5BanBnXkFtZTgwOTM2NDU1MjI@._V1_.jpg",
    genre: 'action',
    info: "Lorraine Broughton, who works as a spy for MI6, is sent on a mission to Berlin just before the collapse of the wall, to get hold of a stolen list, which has the names of exceptional secret agents."
    },
    {
    name: "Extraction",
    year: 2020,
    ImdbRating: 6.7,
    image: "https://m.media-amazon.com/images/M/MV5BMDJiNzUwYzEtNmQ2Yy00NWE4LWEwNzctM2M0MjE0OGUxZTA3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: 'action',
    info: "A black-market mercenary who has nothing to lose is hired to rescue the kidnapped son of an imprisoned international crime lord. But in the murky underworld of weapons dealers and drug traffickers, an already deadly mission approaches the impossible."
    },
    {
    name: "The Running Man",
    year: 1987,
    ImdbRating: 6.7,
    image: "https://m.media-amazon.com/images/M/MV5BNzM4OTcyMjEyNl5BMl5BanBnXkFtZTcwMzEwNDI4OA@@._V1_.jpg",
    genre: 'action, sci-fi',
    info: "In a dystopian America, a falsely convicted policeman gets his shot at freedom when he must forcibly participate in a TV game show where convicts, runners, must battle killers for their freedom."
    },
    {
    name: "The Time Machine",
    year: 1960,
    ImdbRating: 7.5,
    image: "https://m.media-amazon.com/images/M/MV5BYzEwNGJiY2EtYTZmYi00NjZhLWEwZmUtMjc0MTJlODgzZmY4XkEyXkFqcGdeQXVyMDI2NDg0NQ@@._V1_.jpg",
    genre: 'action, sci-fi',
    info: "George, a scientist, invents a time machine and uses it to explore the distant future. However, as he travels forward into time, he gets taken aback after discovering some shocking aspects of society."
    },
    {
    name: "Star Wars: A New Hope",
    year: 1977,
    ImdbRating: 8.6,
    image: "https://images-na.ssl-images-amazon.com/images/I/81aA7hEEykL.jpg",
    genre: 'action, sci-fi',
    info: "Princess Leia gets abducted by the insidious Darth Vader. Luke Skywalker then teams up with a Jedi Knight, a pilot and two droids to free her and to save the galaxy from the violent Galactic Empire."
    },
    {
    name: "The Matrix Revolutions",
    year: 2003,
    ImdbRating: 6.7,
    image: "https://m.media-amazon.com/images/M/MV5BNzNlZTZjMDctZjYwNi00NzljLWIwN2QtZWZmYmJiYzQ0MTk2XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg",
    genre: 'action, sci-fi',
    info: "Neo, humanity's only hope of stopping the war and saving Zion, attempts to broker peace between the machines and humans. However, he must first confront his arch-nemesis, the rogue Agent Smith."
    },
    {
    name: "District 9",
    year: 2009,
    ImdbRating: 7.9,
    image: "https://m.media-amazon.com/images/M/MV5BYmQ5MzFjYWMtMTMwNC00ZGU5LWI3YTQtYzhkMGExNGFlY2Q0XkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_FMjpg_UX1000_.jpg",
    genre: 'sci-fi',
    info: "A few aliens are forced to live in pathetic conditions on Earth. They, however, find support in a government agent who is responsible for their relocation."
    },
    {
    name: "Donnie Darko",
    year: 2001,
    ImdbRating: 8,
    image: "https://m.media-amazon.com/images/M/MV5BZjZlZDlkYTktMmU1My00ZDBiLWFlNjEtYTBhNjVhOTM4ZjJjXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    genre: 'sci-fi',
    info: "Donnie Darko, an awkward teenager, befriends Frank, a figure in a bunny costume only he can see, who informs Donnie that the world will end in 28 days, 6 hours, 42 minutes, and 12 seconds."
    },
    {
    name: "Annihilation",
    year: 2018,
    ImdbRating: 6.8,
    image: "https://m.media-amazon.com/images/I/91AOzuBPkNL._SL1500_.jpg",
    genre: 'sci-fi, horror',
    info: "Lena, a biologist and former soldier, joins a mission to uncover what happened to her husband inside Area X -- a sinister and mysterious phenomenon that is expanding across the American coastline. Once inside, the expedition discovers a world of mutated landscapes and creatures, as dangerous as it is beautiful, that threatens both their lives and their sanity."
    },
    {
    name: "Predestination",
    year: 2014,
    ImdbRating: 7.5,
    image: "https://m.media-amazon.com/images/M/MV5BMTAzODc3NjU1NzNeQTJeQWpwZ15BbWU4MDk5NTQ4NTMx._V1_FMjpg_UX1000_.jpg",
    genre: 'sci-fi, action',
    info: "As his last assignment, a temporal agent is tasked to travel back in time and prevent a bomb attack in New York in 1975. The hunt, however, turns out to be beyond the bounds of possibility."
    },
    {
    name: "Interstellar",
    year: 2014,
    ImdbRating: 8.7,
    image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: 'sci-fi, drama',
    info: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans."
    },
    {
    name: "Dune",
    year: 2021,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg",
    genre: 'sci-fi',
    info: "Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource."
    },
    {
    name: "A Quiet Place II",
    year: 2020,
    ImdbRating: 7.2,
    image: "https://m.media-amazon.com/images/M/MV5BMTE2ODU4NDEtNmRjNS00OTk1LTg4NmMtNTAzYzVlNzJmYjgzXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    genre: 'sci-fi, horror',
    info: "In a post-apocalyptic world, Regan and her family learn that the alien predators can be defeated using high-frequency audio. Armed with this knowledge, they then set out to look for other survivors."
    },
    {
    name: "Possessor",
    year: 2020,
    ImdbRating: 6.5,
    image: "https://m.media-amazon.com/images/M/MV5BMjBlYTlhMDctNTQ3ZC00MjM4LWIxNjctNDI4NjA3NDc3Yzc5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_.jpg",
    genre: 'sci-fi, horror',
    info: "Tasya Vos, an elite corporate assassin, uses brain-implant technology that helps her control other people's bodies and carry out high-profile assassinations."
    },
    {
    name: "Josee, The Tiger and The Fish",
    year: 2020,
    ImdbRating: 8.5,
    image: "https://m.media-amazon.com/images/M/MV5BZjc5YWY0ZGMtMmExYi00MGRiLWE4MzgtNTdiMzc1Y2RjZmY2XkEyXkFqcGdeQXVyODc0OTEyNDU@._V1_.jpg",
    genre: 'romance, drama, animation',
    info: "Tsuneo is a university student, and Josee is a young girl who has rarely gone out of the house by herself due to her being unable to walk. The two meet when Tsuneo finds Josee's grandmother taking her out for a morning walk."
    },
    {
    name: "La La Land",
    year: 2016,
    ImdbRating: 8,
    image: "https://www.goldenglobes.com/sites/default/files/articles/cover_images/2017-la_la_land.jpg?format=pjpg&auto=webp&optimize=high&width=850",
    genre: 'romance',
    info: "When Sebastian, a pianist, and Mia, an actress, follow their passion and achieve success in their respective fields, they find themselves torn between their love for each other and their careers."
    },
    {
    name: "Before Sunset",
    year: 2004,
    ImdbRating: 8.1,
    image: "https://m.media-amazon.com/images/M/MV5BMTQ1MjAwNTM5Ml5BMl5BanBnXkFtZTYwNDM0MTc3._V1_.jpg",
    genre: 'romance, drama',
    info: "Celine and Jesse, who met nine years ago in Vienna, cross paths again for a single day in Paris. Together, they try to find out what might have happened if they had acted on their feelings back then."
    },
    {
    name: "Casablanca",
    year: 1942,
    ImdbRating: 8.5,
    image: "https://m.media-amazon.com/images/M/MV5BY2IzZGY2YmEtYzljNS00NTM5LTgwMzUtMzM1NjQ4NGI0OTk0XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_.jpg",
    genre: 'romance',
    info: "During WWII, Rick, a nightclub owner in Casablanca, agrees to help his former lover Ilsa and her husband. Soon, Ilsa's feelings for Rick resurface and she finds herself renewing her love for him."
    },
    {
    name: "Words on Bathroom Walls",
    year: 2020,
    ImdbRating: 7.2,
    image: "https://m.media-amazon.com/images/M/MV5BNTJmNTNlZDEtM2JjNy00MmNmLTgzNWItN2VlZGNlNjM1YjFmXkEyXkFqcGdeQXVyMTExMDk0NzQ3._V1_.jpg",
    genre: 'romance, drama',
    info: "Diagnosed with a mental illness during his senior year of high school, a witty, introspective teen struggles to keep it a secret while falling in love with a brilliant classmate who inspires him to open his heart and not be defined by his condition."
    },
    {
    name: "The Fault in Our Stars",
    year: 2014,
    ImdbRating: 7.7,
    image: "https://m.media-amazon.com/images/M/MV5BNTVkMTFiZWItOTFkOC00YTc3LWFhYzQtZTg3NzAxZjJlNTAyXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    genre: 'romance, drama',
    info: "Two cancer-afflicted teenagers Hazel and Augustus meet at a cancer support group. The two of them embark on a journey to visit a reclusive author in Amsterdam."
    },
    {
    name: "The Notebook",
    year: 2014,
    ImdbRating: 7.8,
    image: "https://upload.wikimedia.org/wikipedia/en/8/86/Posternotebook.jpg",
    genre: 'romance, drama',
    info: "Duke reads the story of Allie and Noah, two lovers who were separated by fate, to Ms Hamilton, an old woman who suffers from dementia, on a daily basis out of his notebook."
    },
    {
    name: "Legends of the Fall",
    year: 1994,
    ImdbRating: 7.5,
    image: "https://m.media-amazon.com/images/M/MV5BMmE5NGJjNjYtY2UyMi00MWM1LWExZmUtZTk0MTIzNjBhODY4XkEyXkFqcGdeQXVyNjc3MjQzNTI@._V1_.jpg",
    genre: 'romance, drama',
    info: "Colonel Ludlow decides to move to Montana's country-side and raise his three children. His life changes when he learns that all his children have fallen in love with the same girl."
    },
    {
    name: "City of Angels",
    year: 1998,
    ImdbRating: 6.7,
    image: "https://m.media-amazon.com/images/M/MV5BOGM5YTNiYzktNmEwZC00ZjE5LWIyNzEtOTUwNDE0NmVkYzE3XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: 'romance',
    info: "Seth is an angel who guides humans to the next life. When he sees Maggie, a heart surgeon trying to save a patient, he falls in love with her. Seth makes a choice which changes everything."
    },
    {
    name: "The Proposal",
    year: 2009,
    ImdbRating: 6.7,
    image: "https://m.media-amazon.com/images/M/MV5BZjk2OTEwNDEtNjVhYi00MzI3LWFhNzctZGUzOWMxMDMwZjJlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_FMjpg_UX1000_.jpg",
    genre: 'romance, comedy',
    info: "When New York editor Margaret faces deportation, she convinces her assistant Andrew to marry her in return for a promotion. However, when she visits his hometown, it changes her in many ways."
    },
    {
    name: "The Lucky One",
    year: 2012,
    ImdbRating: 6.5,
    image: "https://m.media-amazon.com/images/M/MV5BMTg5NDk3MjAzMF5BMl5BanBnXkFtZTcwMjUyNzExNw@@._V1_FMjpg_UX1000_.jpg",
    genre: 'romance, drama',
    info: "After returning from the Iraq war, a lonely and dejected Marine tries to track down a woman who he believed was his lucky charm. While staying with her family, he finally finds peace."
    },
    {
    name: "Emma",
    year: 2020,
    ImdbRating: 6.7,
    image: "https://m.media-amazon.com/images/M/MV5BOGRiODEzM2QtOTUyYi00MWRlLTg4MzMtZGI0YmUzNWUyMjQ0XkEyXkFqcGdeQXVyMDA4NzMyOA@@._V1_FMjpg_UX1000_.jpg",
    genre: 'romance, drama',
    info: "Emma is a self-proclaimed matchmaker who meddles in the love lives of her friends. Her misguided matches and romantic missteps lead her to find love that has been there all along."
    },
    {
    name: "Wolfwalkers",
    year: 2020,
    ImdbRating: 8,
    image: "https://m.media-amazon.com/images/M/MV5BNTA4MWQ4NGUtOGQ0MS00M2QyLWE5MDItZWM2YzA0ZDgxZTA2XkEyXkFqcGdeQXVyNjY1MTg4Mzc@._V1_.jpg",
    genre: 'animation',
    info: "Robyn, a young girl, follows her father to Kilkenny on an assignment to hunt the last wolf pack. However, she befriends a girl from a mysterious tribe and learns their secret."
    },
    {
    name: "Inside Out",
    year: 2015,
    ImdbRating: 8.2,
    image: "https://m.media-amazon.com/images/M/MV5BOTgxMDQwMDk0OF5BMl5BanBnXkFtZTgwNjU5OTg2NDE@._V1_FMjpg_UX1000_.jpg",
    genre: 'animation, comedy',
    info: "Eleven-year-old Riley moves to San Francisco, leaving behind her life in Minnesota. She and her five core emotions, Fear, Anger, Joy, Disgust and Sadness, struggle to cope with her new life."
    },
    {
    name: "Howl's Moving Castle",
    year: 2004,
    ImdbRating: 8.2,
    image: "https://m.media-amazon.com/images/M/MV5BNmM4YTFmMmItMGE3Yy00MmRkLTlmZGEtMzZlOTQzYjk3MzA2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX1000_.jpg",
    genre: 'animation',
    info: "Jealous of Sophie's closeness to Howl, a wizard, the Witch of Waste transforms her into an old lady. Sophie must find a way to break the spell with the help of Howl's friends, Calcifer and Markl."
    },
    {
    name: "The Lion King",
    year: 1994,
    ImdbRating: 8.5,
    image: "https://m.media-amazon.com/images/M/MV5BYTYxNGMyZTYtMjE3MS00MzNjLWFjNmYtMDk3N2FmM2JiM2M1XkEyXkFqcGdeQXVyNjY5NDU4NzI@._V1_.jpg",
    genre: 'animation',
    info: "As a cub, Simba is forced to leave the Pride Lands after his father Mufasa is murdered by his wicked uncle, Scar. Years later, he returns as a young lion to reclaim his throne."
    },
    {
    name: "Onward",
    year: 2020,
    ImdbRating: 7.4,
    image: "https://m.media-amazon.com/images/M/MV5BMTZlYzk3NzQtMmViYS00YWZmLTk5ZTEtNWE0NGVjM2MzYWU1XkEyXkFqcGdeQXVyNDg4NjY5OTQ@._V1_.jpg",
    genre: 'animation',
    info: "In a magical realm where technological advances have taken over, Ian and Barley, two elven brothers, set out on an epic adventure to resurrect their late father for a day."
    },
    {
    name: "Over the Moon",
    year: 2020,
    ImdbRating: 6.4,
    image: "https://m.media-amazon.com/images/M/MV5BNDAxMzBlZTUtNTgwNS00NjZhLWJjZmItMDBjZjhhZTM4OWQ2XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_FMjpg_UX1000_.jpg",
    genre: 'animation',
    info: "A young girl, who has many beautiful memories of her mother, endeavours to build a rocket and take an arduous journey to meet a mythical moon goddess."
    },
    {
    name: "The Adventures of Tintin",
    year: 2011,
    ImdbRating: 7.3,
    image: "https://m.media-amazon.com/images/M/MV5BNDE5MDExNTQ1OF5BMl5BanBnXkFtZTcwMDIxMTM5Ng@@._V1_FMjpg_UX1000_.jpg",
    genre: 'animation, action',
    info: "Tintin, a young reporter, buys the model of a ship and is intrigued when his dog shows him a scroll after the toy breaks. He tells Captain Haddock and they embark on an adventure to find a shipwreck."
    },
    {
    name: "The Good Dinosaur",
    year: 2015,
    ImdbRating: 6.7,
    image: "https://m.media-amazon.com/images/M/MV5BMTc5MTg2NjQ4MV5BMl5BanBnXkFtZTgwNzcxOTY5NjE@._V1_FMjpg_UX1000_.jpg",
    genre: 'animation',
    info: "A rainstorm separates Arlo, a young Apatosaurus, from his family. While travelling through a harsh landscape, he befriends Spot, a feral child, who helps him reunite with his family."
    },
    {
    name: "Fantastic Mr. Fox",
    year: 2009,
    ImdbRating: 7.9,
    image: "https://m.media-amazon.com/images/M/MV5BOGUwYTU4NGEtNDM4MS00NDRjLTkwNmQtOTkwMWMyMjhmMjdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    genre: 'animation, comedy',
    info: "Mr Fox, a family man, goes back to his ways of stealing, unable to resist his animal instincts. However, he finds himself trapped when three farmers decide to kill him and his kind."
    },
    {
    name: "The Polar Express",
    year: 2004,
    ImdbRating: 6.6,
    image: "https://m.media-amazon.com/images/I/51553gSVSrL._SY445_.jpg",
    genre: 'animation',
    info: "A young boy boards a train and embarks on an extraordinary journey to the North Pole to meet Santa Claus. His life takes a turn after he encounters special people that make his journey memorable."
    },
    {
    name: "Space Jam",
    year: 1996,
    ImdbRating: 6.5,
    image: "https://m.media-amazon.com/images/I/81LALYkD6KS._SL1500_.jpg",
    genre: 'animation, comedy',
    info: "After Michael Jordan's retirement, he is abducted by Bugs Bunny from the Looney Tunes group and is asked to play a match to defeat the Nerdlucks, a criminal alien group led by Mister Swackhammer."
    },
    {
    name: "Hercules",
    year: 1997,
    ImdbRating: 7.3,
    image: "https://m.media-amazon.com/images/M/MV5BZDcwYjEyNWItMGI1Mi00MjI1LWIyMDEtMTQ4YjhkNjM4NDU3XkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_FMjpg_UX1000_.jpg",
    genre: 'animation',
    info: "Hercules, son of the Greek god, Zeus, is turned into a half-god, half-mortal by the evil Hades. Hercules discovers his immortal heritage and Zeus tells him to return to Mount Olympus."
    },

]



searchButton.addEventListener('click', () => {
    // console.log( movies[0].name.toLowerCase())
   
    const result = movies.filter(movie => {
        return movie.name.toLowerCase().includes(search.value.trim().toLowerCase())
    })
    if (result[0]){

                 // Creating a modal
                 const modal = document.createElement('div')
                 document.body.appendChild(modal)
                 modal.classList.add('modal')
                 const modalDiv = document.createElement('div')
                 modal.appendChild(modalDiv)
                 modalDiv.classList.add('modal-div')
                 const modalDelete = document.createElement('p')
                 modalDiv.appendChild(modalDelete)
                 modalDelete.classList.add('modal-delete')
                 modalDelete.textContent = 'X'
                 const modalName = document.createElement('h1')
                 modalDiv.appendChild(modalName)
                 modalName.innerText = result[0].name
                 modalName.style.overflow = 'hidden'
                 const modalGenre = document.createElement('h3')
                 modalDiv.appendChild(modalGenre)
                 modalGenre.innerText = result[0].genre
                 modalGenre.style.overflow = 'hidden'
                 const modalYear = document.createElement('p')
                 modalDiv.appendChild(modalYear)
                 modalYear.innerText = result[0].year
                 modalYear.style.overflow = 'hidden'
                 const modalRating = document.createElement('p')
                 modalDiv.appendChild(modalRating)
                 modalRating.innerText = `IMDB rating: ${result[0].ImdbRating}`
                 const modalImage = document.createElement('img')
                 modalDiv.appendChild(modalImage)
                 modalImage.src = result[0].image
                 modalImage.classList.add('modal-image')
                 const modalInfo = document.createElement('p')
                 modalDiv.appendChild(modalInfo)
                 modalInfo.innerText = result[0].info
                 modalInfo.classList.add('modal-info')
                 modalDelete.addEventListener('click', (e)=> {
                     document.body.removeChild(modal)
                 })
                 
    }   else {
        const modal = document.createElement('div')
        document.body.appendChild(modal)
        modal.classList.add('modal')
        const modalDiv = document.createElement('div')
        modal.appendChild(modalDiv)
        modalDiv.classList.add('modal-div')
        const modalDelete = document.createElement('p')
        modalDiv.appendChild(modalDelete)
        modalDelete.classList.add('modal-delete')
        modalDelete.textContent = 'X'
        const modalName = document.createElement('h1')
        modalDiv.appendChild(modalName)
        modalName.innerText = `Sorry! There is no movie called "${search.value}".`
        modalName.style.overflow = 'hidden'
        const modalGenre = document.createElement('h3')
        modalDiv.appendChild(modalGenre)
        modalDelete.addEventListener('click', (e)=> {
            document.body.removeChild(modal)
        })
    }
   
})


const selectOption = () => {
    // DRAMA
   if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 8
        })
        createModal()
    } 
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama')  && movie.year < 2000 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'drama' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('drama') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 6
        })
        createModal()
    }
    // HORROR
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 8
        })
        createModal()
    } 
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror')  && movie.year < 2000 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'horror' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('horror') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 6
        })
        createModal()
    }
    // MYSTERY
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 8
        })
        createModal()
    } 
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery')  && movie.year < 2000 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'mystery' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('mystery') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 6
        })
        createModal()
    }
    // COMEDY
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 8
        })
        createModal()
    } 
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy')  && movie.year < 2000 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'comedy' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('comedy') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 6
        })
        createModal()
    }
    // ACTION
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 8
        })
        createModal()
    } 
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action')  && movie.year < 2000 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'action' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {

        result =   movies.filter(movie => {
            return movie.genre.includes('action') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 6
        })
        createModal()
    }
    // SCI-FI
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 8
        })
        createModal()
    } 
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi')  && movie.year < 2000 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {

        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 6
        })
        createModal()
    }
    // ROMANCE
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 8
        })
        createModal()
    } 
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance')  && movie.year < 2000 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'romance' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {

        result =   movies.filter(movie => {
            return movie.genre.includes('romance') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 6
        })
        createModal()
    }
    // SCI-FI
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 8
        })
        createModal()
    } 
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi')  && movie.year < 2000 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'sci-fi' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {

        result =   movies.filter(movie => {
            return movie.genre.includes('sci-fi') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 6
        })
        createModal()
    }

    // ANMATION
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 8
        })
        createModal()
    } 
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '8.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation')  && movie.year < 2000 && movie.ImdbRating >= 8
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '7.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 7
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '2020s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 2020 && movie.year < 2030 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '2010s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 2010 && movie.year < 2020 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '2000s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {
        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 2000 && movie.year < 2010 && movie.ImdbRating >= 6
        })
        createModal()
    }
    if (genreSelect[genreSelect.selectedIndex].value === 'animation' && yearSelect[yearSelect.selectedIndex].value === '1990s' && ratingSelect[ratingSelect.selectedIndex].value === '6.0') {

        result =   movies.filter(movie => {
            return movie.genre.includes('animation') && movie.year >= 1990 && movie.year < 2000 && movie.ImdbRating >= 6
        })
        createModal()
    }
    
    
    
}

selectButton.addEventListener('click', selectOption)


const createModal = () => {
    const randomNumber = Math.floor(Math.random()*result.length)
    // Creating a modal
    const modal = document.createElement('div')
    document.body.appendChild(modal)
    modal.classList.add('modal')
    const modalDiv = document.createElement('div')
    modal.appendChild(modalDiv)
    modalDiv.classList.add('modal-div')
    const modalDelete = document.createElement('p')
    modalDiv.appendChild(modalDelete)
    modalDelete.classList.add('modal-delete')
    modalDelete.textContent = 'X'
    const modalName = document.createElement('h1')
    modalDiv.appendChild(modalName)
    modalName.innerText = result[randomNumber].name
    modalName.style.overflow = 'hidden'
    const modalGenre = document.createElement('h3')
    modalDiv.appendChild(modalGenre)
    modalGenre.innerText = result[randomNumber].genre
    modalGenre.style.overflow = 'hidden'
    const modalYear = document.createElement('p')
    modalDiv.appendChild(modalYear)
    modalYear.innerText = result[randomNumber].year
    modalYear.style.overflow = 'hidden'
    const modalRating = document.createElement('p')
    modalDiv.appendChild(modalRating)
    modalRating.innerText = `IMDB rating: ${result[randomNumber].ImdbRating}`
    const modalImage = document.createElement('img')
    modalDiv.appendChild(modalImage)
    modalImage.src = result[randomNumber].image
    modalImage.classList.add('modal-image')
    const modalInfo = document.createElement('p')
    modalDiv.appendChild(modalInfo)
    modalInfo.innerText = result[randomNumber].info
    modalInfo.classList.add('modal-info')
    modalDelete.addEventListener('click', (e)=> {
        document.body.removeChild(modal)
    })
    
    // end of modal
}







// dropdown
function showMenu(){
    navLinks.style.right = "0"
}
function hideMenu(){
    navLinks.style.right = "-200px"
}
