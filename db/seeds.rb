User.destroy_all

User.create({picture: "", name: "James", favorite_album: "Meteora", favorite_song: "Breaking The Habit", fan_since: "07.2001"})
User.create({picture: "", name: "Lissete", favorite_album: "Minutes to Midnight", favorite_song: "Waiting for the End", fan_since: "03.2003"})
User.create({picture: "", name: "Keith", favorite_album: "Hybrid Theory", favorite_song: "In the End", fan_since: "10.2000"})

Discography.destroy_all


Discography.create({name: "https://i.imgur.com/XFOMUzO.jpg", description: ""})
Discography.create({name: "", description: ""})
Discography.create({name: "", description: ""})
Discography.create({name: "", description: ""})
Discography.create({name: "", description: ""})
Discography.create({name: "", description: ""})
Discography.create({name: "", description: ""})