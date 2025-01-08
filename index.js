// Good luck!

const express = require("express")
const app = express()

const nbaTeams = [
    {
      teamName: "Los Angeles Lakers",
      teamAbrev: "LAL",
      city: "Los Angeles",
      tChipsWon: 17,
      funFact: "26 Hall of Famers have played for Los Angeles, while four have coached the team. Abdul-Jabbar, Johnson, O'Neal, and Bryant won a combined eight NBA MVP awards with the Lakers.",
      currentRoster: [
        {
          playerName: "LeBron James",
          position: "Small Forward",
          height: "6'9",
          age: 40,
          chipsWon: 4,
          funFact: "LeGoat"
        },
        {
          playerName: "Anthony Davis",
          position: "Center",
          height: "6'10",
          age: 31,
          chipsWon: 1,
          funFact: "Davis grew from 6-foot-2 as a high school sophomore to 6-foot-10 as a senior"
        },
        {
          playerName: "Austin Reaves",
          position: "Shooting Guard",
          height: "6'5",
          age: 26,
          chipsWon: 0,
          funFact: "Reaves credits his brother for sparking his interest in basketball."
        }
      ]
    },
    {
      teamName: "Golden State Warriors",
      teamAbrev: "GSW",
      city: "San Francisco",
      tChipsWon: 7,
      currentRoster: [
        {
          playerName: "Stephen Curry",
          position: "Guard",
          height: "6'3\"",
          age: 35,
          chipsWon: 4,
          funFact: "Stephen Curry is regarded as the greatest shooter in NBA history."
        },
        {
          playerName: "Klay Thompson",
          position: "Guard",
          height: "6'6\"",
          age: 34,
          chipsWon: 4,
          funFact: "Klay once scored 37 points in a single quarter."
        },
        {
          playerName: "Draymond Green",
          position: "Forward",
          height: "6'6\"",
          age: 34,
          chipsWon: 4,
          funFact: "Draymond Green is known for his defensive versatility and basketball IQ."
        }
      ]
    },
    {
      teamName: "Brooklyn Nets",
      teamAbrev: "BKN",
      city: "Brooklyn",
      tChipsWon: 0,
      currentRoster: [
        {
          playerName: "Kevin Durant",
          position: "Forward",
          height: "6'10\"",
          age: 35,
          chipsWon: 2,
          funFact: "Kevin Durant is known for his scoring ability and was an MVP in 2014."
        },
        {
          playerName: "Kyrie Irving",
          position: "Guard",
          height: "6'2\"",
          age: 31,
          chipsWon: 1,
          funFact: "Kyrie Irving is famous for his clutch shot in the 2016 NBA Finals."
        },
        {
          playerName: "Ben Simmons",
          position: "Guard",
          height: "6'10\"",
          age: 27,
          chipsWon: 0,
          funFact: "Ben Simmons is known for his elite defense and playmaking skills."
        }
      ]
    },
    {
      teamName: "Miami Heat",
      teamAbrev: "MIA",
      city: "Miami",
      tChipsWon: 3,
      currentRoster: [
        {
          playerName: "Jimmy Butler",
          position: "Forward",
          height: "6'7\"",
          age: 34,
          chipsWon: 0,
          funFact: "Jimmy Butler is known for his work ethic and clutch playoff performances."
        },
        {
          playerName: "Bam Adebayo",
          position: "Center",
          height: "6'9\"",
          age: 26,
          chipsWon: 0,
          funFact: "Bam Adebayo is an elite defender and has been named to multiple All-Defensive Teams."
        },
        {
          playerName: "Tyler Herro",
          position: "Guard",
          height: "6'5\"",
          age: 23,
          chipsWon: 0,
          funFact: "Tyler Herro won the 2020 NBA Sixth Man of the Year award."
        }
      ]
    },
    {
      teamName: "Chicago Bulls",
      teamAbrev: "CHI",
      city: "Chicago",
      tChipsWon: 6,
      currentRoster: [
        {
          playerName: "Zach LaVine",
          position: "Guard",
          height: "6'5\"",
          age: 28,
          chipsWon: 0,
          funFact: "Zach LaVine is known for his dunking ability and has won two NBA Dunk Contests."
        },
        {
          playerName: "DeMar DeRozan",
          position: "Forward",
          height: "6'6\"",
          age: 34,
          chipsWon: 0,
          funFact: "DeMar DeRozan is one of the most consistent mid-range shooters in the league."
        },
        {
          playerName: "Nikola Vucevic",
          position: "Center",
          height: "6'10\"",
          age: 33,
          chipsWon: 0,
          funFact: "Nikola Vucevic is known for his rebounding and ability to stretch the floor."
        }
      ]
    },
    {
      teamName: "Dallas Mavericks",
      teamAbrev: "DAL",
      city: "Dallas",
      tChipsWon: 3,
      currentRoster: [
        {
          playerName: "Luka Dončić",
          position: "Guard",
          height: "6'7\"",
          age: 24,
          chipsWon: 0,
          funFact: "Luka Dončić is known for his incredible court vision and has been an All-NBA selection multiple times."
        },
        {
          playerName: "Kyrie Irving",
          position: "Guard",
          height: "6'2\"",
          age: 31,
          chipsWon: 1,
          funFact: "Kyrie Irving is famous for his clutch shot in the 2016 NBA Finals."
        }
      ]
    },
    {
      teamName: "Phoenix Suns",
      teamAbrev: "PHX",
      city: "Phoenix",
      tChipsWon: 0,
      currentRoster: [
        {
          playerName: "Devin Booker",
          position: "Guard",
          height: "6'5\"",
          age: 27,
          chipsWon: 0,
          funFact: "Devin Booker scored 70 points in a single game in 2017."
        },
        {
          playerName: "Kevin Durant",
          position: "Forward",
          height: "6'10\"",
          age: 35,
          chipsWon: 2,
          funFact: "Kevin Durant is one of the best scorers in NBA history."
        },
        {
          playerName: "Deandre Ayton",
          position: "Center",
          height: "7'0\"",
          age: 25,
          chipsWon: 0,
          funFact: "Deandre Ayton was the first overall pick in the 2018 NBA Draft."
        }
      ]
    },
    {
      teamName: "Cleveland Cavaliers",
      teamAbrev: "CLE",
      city: "Cleveland",
      tChipsWon: 1,
      currentRoster: [
        {
          playerName: "Donovan Mitchell",
          position: "Guard",
          height: "6'1\"",
          age: 27,
          chipsWon: 0,
          funFact: "Donovan Mitchell has been named an NBA All-Star multiple times."
        },
        {
          playerName: "Darius Garland",
          position: "Guard",
          height: "6'1\"",
          age: 23,
          chipsWon: 0,
          funFact: "Darius Garland is known for his strong ball-handling skills."
        },
        {
          playerName: "Evan Mobley",
          position: "Forward",
          height: "6'9\"",
          age: 22,
          chipsWon: 0,
          funFact: "Evan Mobley was the 2022 NBA Rookie of the Year."
        }
      ]
    },
    {
      teamName: "Atlanta Hawks",
      teamAbrev: "ATL",
      city: "Atlanta",
      tChipsWon: 1,
      currentRoster: [
        {
          playerName: "Trae Young",
          position: "Guard",
          height: "6'1\"",
          age: 25,
          chipsWon: 0,
          funFact: "Trae Young is known for his deep shooting range and playmaking skills."
        },
        {
          playerName: "De'Andre Hunter",
          position: "Forward",
          height: "6'8\"",
          age: 26,
          chipsWon: 0,
          funFact: "De'Andre Hunter is known for his defensive prowess and ability to guard multiple positions."
        },
        {
          playerName: "John Collins",
          position: "Forward",
          height: "6'9\"",
          age: 26,
          chipsWon: 0,
          funFact: "John Collins is a strong, athletic player known for his dunking ability.",

        },
        {
            teamName: "Detroit Pistons",
            teamAbrev: "DET",
            city: "Detroit",
            tChipsWon: 3,
            currentRoster: [
              {
                playerName: "Cade Cunningham",
                position: "Guard",
                height: "6'6\"",
                age: 22,
                chipsWon: 0,
                funFact: "Cade Cunningham was the first overall pick in the 2021 NBA Draft."
              },
              {
                playerName: "Jaden Ivey",
                position: "Guard",
                height: "6'4\"",
                age: 22,
                chipsWon: 0,
                funFact: "Jaden Ivey is known for his explosive athleticism and fast break ability."
              },
              {
                playerName: "Jalen Duren",
                position: "Center",
                height: "6'9\"",
                age: 20,
                chipsWon: 0,
                funFact: "Jalen Duren is one of the youngest and most promising big men in the NBA."
              }
            ]
          },
          {
            teamName: "Sacramento Kings",
            teamAbrev: "SAC",
            city: "Sacramento",
            tChipsWon: 0,
            currentRoster: [
              {
                playerName: "De'Aaron Fox",
                position: "Guard",
                height: "6'3\"",
                age: 26,
                chipsWon: 0,
                funFact: "De'Aaron Fox is known for his blazing speed and clutch performances."
              },
              {
                playerName: "Domantas Sabonis",
                position: "Center",
                height: "6'11\"",
                age: 27,
                chipsWon: 0,
                funFact: "Domantas Sabonis is one of the league's top rebounders and playmakers."
              },
              {
                playerName: "Kevin Huerter",
                position: "Guard",
                height: "6'7\"",
                age: 25,
                chipsWon: 0,
                funFact: "Kevin Huerter is a sharp-shooting guard who can stretch the floor."
              }
            ]
          },
          {
            teamName: "Minnesota Timberwolves",
            teamAbrev: "MIN",
            city: "Minnesota",
            tChipsWon: 0,
            currentRoster: [
              {
                playerName: "Anthony Edwards",
                position: "Guard",
                height: "6'4\"",
                age: 22,
                chipsWon: 0,
                funFact: "Anthony Edwards is known for his scoring ability and explosive dunks."
              },
              {
                playerName: "Karl-Anthony Towns",
                position: "Center",
                height: "6'11\"",
                age: 28,
                chipsWon: 0,
                funFact: "Karl-Anthony Towns is one of the most skilled big men in the game."
              },
              {
                playerName: "Rudy Gobert",
                position: "Center",
                height: "7'1\"",
                age: 31,
                chipsWon: 0,
                funFact: "Rudy Gobert is a three-time NBA Defensive Player of the Year."
              }
            ]
          },
          {
            teamName: "Indiana Pacers",
            teamAbrev: "IND",
            city: "Indianapolis",
            tChipsWon: 0,
            currentRoster: [
              {
                playerName: "Tyrese Haliburton",
                position: "Guard",
                height: "6'5\"",
                age: 23,
                chipsWon: 0,
                funFact: "Tyrese Haliburton is known for his incredible passing and court vision."
              },
              {
                playerName: "Buddy Hield",
                position: "Guard",
                height: "6'4\"",
                age: 31,
                chipsWon: 0,
                funFact: "Buddy Hield is one of the best three-point shooters in the NBA."
              },
              {
                playerName: "Myles Turner",
                position: "Center",
                height: "6'10\"",
                age: 28,
                chipsWon: 0,
                funFact: "Myles Turner is an elite shot blocker and stretch five."
              }
            ]
          },
          {
            teamName: "New York Knicks",
            teamAbrev: "NYK",
            city: "New York",
            tChipsWon: 2,
            currentRoster: [
              {
                playerName: "Julius Randle",
                position: "Forward",
                height: "6'8\"",
                age: 29,
                chipsWon: 0,
                funFact: "Julius Randle is known for his rebounding and scoring ability."
              },
              {
                playerName: "Jalen Brunson",
                position: "Guard",
                height: "6'1\"",
                age: 27,
                chipsWon: 0,
                funFact: "Jalen Brunson is known for his leadership and clutch performances."
              },
              {
                playerName: "RJ Barrett",
                position: "Forward",
                height: "6'6\"",
                age: 23,
                chipsWon: 0,
                funFact: "RJ Barrett is a versatile scorer and strong defender."
              }
            ]
          },
          {
            teamName: "Orlando Magic",
            teamAbrev: "ORL",
            city: "Orlando",
            tChipsWon: 0,
            currentRoster: [
              {
                playerName: "Paolo Banchero",
                position: "Forward",
                height: "6'10\"",
                age: 21,
                chipsWon: 0,
                funFact: "Paolo Banchero was the 2022 NBA Rookie of the Year."
              },
              {
                playerName: "Franz Wagner",
                position: "Forward",
                height: "6'9\"",
                age: 22,
                chipsWon: 0,
                funFact: "Franz Wagner is known for his all-around game and high basketball IQ."
              },
              {
                playerName: "Jalen Suggs",
                position: "Guard",
                height: "6'4\"",
                age: 22,
                chipsWon: 0,
                funFact: "Jalen Suggs is known for his defensive tenacity and leadership."
              }
            ]
          },
          {
            teamName: "Washington Wizards",
            teamAbrev: "WAS",
            city: "Washington, D.C.",
            tChipsWon: 1,
            currentRoster: [
              {
                playerName: "Kyle Kuzma",
                position: "Forward",
                height: "6'9\"",
                age: 28,
                chipsWon: 1,
                funFact: "Kyle Kuzma was part of the Lakers' 2020 championship-winning team."
              },
              {
                playerName: "Kristaps Porzingis",
                position: "Center",
                height: "7'3\"",
                age: 28,
                chipsWon: 0,
                funFact: "Kristaps Porzingis is known for his ability to stretch the floor as a big man."
              },
              {
                playerName: "Jordan Poole",
                position: "Guard",
                height: "6'4\"",
                age: 24,
                chipsWon: 0,
                funFact: "Jordan Poole is known for his scoring and explosive performances."
              }
            ]
          }
        ]
    }
]

app.use((request,response,next) => {
  console.log(request.method + " " + request.url)
  next();
});


app.get ("/",(request,response) => {
  response.status(200).send("<h1>Welcome to the NBA API</h1>")
});

app.get ("/docs",(request,response) => {
  response.status(200).send("<h1>If you want to get info about the Lakers go to /Lakers. If you want to get info about LeBron go to /LeBron </h1>")
});
    
app.get ("/Lakers", (request,response)=> {
  response.status(200).json(nbaTeams[0])
})

app.get ("/LeBron", (request,response)=> {
  response.status(200).json(nbaTeams[0].currentRoster[0])
})









app.use((request,response,next) => {
  response.status(404).send("404 NOT FOUND")
})    

app.listen(3000, () => {
    console.log("hello")
})