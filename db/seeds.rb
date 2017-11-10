User.destroy_all

User.create({picture: "", name: "James", favorite_album: "Meteora", favorite_song: "Breaking The Habit", fan_since: "07.2001"})
User.create({picture: "", name: "Lissete", favorite_album: "Minutes to Midnight", favorite_song: "Waiting for the End", fan_since: "03.2003"})
User.create({picture: "", name: "Keith", favorite_album: "Hybrid Theory", favorite_song: "In the End", fan_since: "10.2000"})

Discography.destroy_all


Discography.create({name: "https://i.imgur.com/XFOMUzO.jpg", description: "https://www.amazon.com/Hybrid-Theory-Linkin-Park/dp/B00004Z459/ref=sr_1_1?ie=UTF8&qid=1510349562&sr=8-1&keywords=linkin+park+hybrid+theory&dpID=613BBVSBnEL&preST=_SY300_QL70_&dpSrc=srch"})
Discography.create({name: "https://i.imgur.com/LeICSpm.jpg", description: "https://www.amazon.com/Meteora-LINKIN-PARK/dp/B00008H2LB/ref=sr_1_1?s=music&ie=UTF8&qid=1510349581&sr=1-1&keywords=linkin+park+meteora"})
Discography.create({name: "https://i.imgur.com/PK12NNK.jpg", description: "https://www.amazon.com/Minutes-Midnight-Linkin-Park/dp/B000OCXMAE/ref=sr_1_1?s=music&ie=UTF8&qid=1510349606&sr=1-1&keywords=linkin+park+minutes+to+midnight"})
Discography.create({name: "https://i.imgur.com/ASinDnC.jpg", description: "https://www.amazon.com/Thousand-Suns-Linkin-Park/dp/B003V9J6QQ/ref=sr_1_1?s=music&ie=UTF8&qid=1510349632&sr=1-1&keywords=linkin+park+a+thousand+suns&dpID=41BjT%252BAvT3L&preST=_SY300_QL70_&dpSrc=srch"})
Discography.create({name: "https://i.imgur.com/nEUuvgN.jpg", description: "https://www.amazon.com/Living-Things-Linkin-Park/dp/B007UQ5Z1G/ref=sr_1_1?s=music&ie=UTF8&qid=1510349653&sr=1-1&keywords=linkin+park+living+things"})
Discography.create({name: "https://i.imgur.com/7JJIWrB.jpg", description: "https://www.amazon.com/Hunting-Party-Linkin-Park/dp/B00K03VZ1K/ref=sr_1_1?s=music&ie=UTF8&qid=1510349682&sr=1-1&keywords=linkin+park+the+hunting+party&dpID=51oY2hgqjiL&preST=_SY300_QL70_&dpSrc=srch"})
Discography.create({name: "https://i.imgur.com/mi0Szry.jpg", description: "https://www.amazon.com/One-More-Light-Linkin-Park/dp/B01MZGQSOT/ref=sr_1_1?s=music&ie=UTF8&qid=1510349713&sr=1-1&keywords=linkin+park+one+more+light"})