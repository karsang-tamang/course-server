const players = [

    // GOALKEEPERS

    {
        id: "courtois",
        name: "Thibaut Courtois",
        number: 1,
        nationality: "Belgium",
        position: "Goalkeeper",
        age: 34,
        height: "2.00 m",
        description: "First-choice goalkeeper and one of the best shot stoppers in world football.",
        image: "images/courtois.jpeg"
    },

    {
        id: "lunin",
        name: "Andriy Lunin",
        number: 13,
        nationality: "Ukraine",
        position: "Goalkeeper",
        age: 27,
        height: "1.91 m",
        description: "Reliable goalkeeper who provides strong depth for the squad.",
        image: "images/lunin.jpeg"
    },

    // DEFENDERS

    {
        id: "carvajal",
        name: "Dani Carvajal",
        number: 2,
        nationality: "Spain",
        position: "Defender",
        age: 34,
        height: "1.73 m",
        description: "Experienced right-back and long-time Real Madrid leader.",
        image: "images/carvajal.jpeg"
    },

    {
        id: "militao",
        name: "Eder Militao",
        number: 3,
        nationality: "Brazil",
        position: "Defender",
        age: 28,
        height: "1.87 m",
        description: "Athletic centre-back known for pace and defensive strength.",
        image: "images/militao.jpeg"
    },

    {
        id: "alexanderarnold",
        name: "Trent Alexander-Arnold",
        number: 12,
        nationality: "England",
        position: "Defender",
        age: 27,
        height: "1.75 m",
        description: "Creative right-back famous for passing range and assists.",
        image: "images/alexanderarnold.jpeg"
    },

    {
        id: "asencio",
        name: "Raul Asencio",
        number: 17,
        nationality: "Spain",
        position: "Defender",
        age: 23,
        height: "1.84 m",
        description: "Young defender with excellent potential.",
        image: "images/asencio.jpeg"
    },

    {
        id: "carreras",
        name: "Alvaro Carreras",
        number: 18,
        nationality: "Spain",
        position: "Defender",
        age: 23,
        height: "1.86 m",
        description: "Modern attacking full-back.",
        image: "images/carreras.jpeg"
    },

    {
        id: "frangarcia",
        name: "Fran Garcia",
        number: 20,
        nationality: "Spain",
        position: "Defender",
        age: 27,
        height: "1.67 m",
        description: "Energetic left-back with strong attacking ability.",
        image: "images/frangarcia.jpeg"
    },

    {
        id: "rudiger",
        name: "Antonio Rudiger",
        number: 22,
        nationality: "Germany",
        position: "Defender",
        age: 33,
        height: "1.90 m",
        description: "Physical and aggressive central defender.",
        image: "images/rudiger.jpeg"
    },

    {
        id: "mendy",
        name: "Ferland Mendy",
        number: 23,
        nationality: "France",
        position: "Defender",
        age: 31,
        height: "1.80 m",
        description: "Defensively strong left-back.",
        image: "images/mendy.jpeg"
    },

    {
        id: "huijsen",
        name: "Dean Huijsen",
        number: 24,
        nationality: "Spain",
        position: "Defender",
        age: 21,
        height: "1.95 m",
        description: "Tall centre-back with excellent ball-playing ability.",
        image: "images/huijsen.jpeg"
    },

    // MIDFIELDERS

    {
        id: "bellingham",
        name: "Jude Bellingham",
        number: 5,
        nationality: "England",
        position: "Midfielder",
        age: 23,
        height: "1.86 m",
        description: "Box-to-box midfielder and one of the team's biggest stars.",
        image: "images/bellingham.jpeg"
    },

    {
        id: "camavinga",
        name: "Eduardo Camavinga",
        number: 6,
        nationality: "France",
        position: "Midfielder",
        age: 23,
        height: "1.82 m",
        description: "Versatile midfielder with excellent ball recovery.",
        image: "images/camavinga.jpeg"
    },

    {
        id: "valverde",
        name: "Federico Valverde",
        number: 8,
        nationality: "Uruguay",
        position: "Midfielder",
        age: 28,
        height: "1.82 m",
        description: "Known for stamina, leadership, and powerful shooting.",
        image: "images/valverde.jpeg"
    },

    {
        id: "tchouameni",
        name: "Aurelien Tchouameni",
        number: 14,
        nationality: "France",
        position: "Midfielder",
        age: 26,
        height: "1.87 m",
        description: "Defensive midfielder who controls the center of the pitch.",
        image: "images/tchouameni.jpeg"
    },

    {
        id: "guler",
        name: "Arda Guler",
        number: 15,
        nationality: "Turkey",
        position: "Midfielder",
        age: 21,
        height: "1.76 m",
        description: "Creative attacking midfielder with outstanding technique.",
        image: "images/guler.jpeg"
    },

    {
        id: "ceballos",
        name: "Dani Ceballos",
        number: 19,
        nationality: "Spain",
        position: "Midfielder",
        age: 30,
        height: "1.79 m",
        description: "Possession-focused midfielder.",
        image: "images/ceballos.jpeg"
    },

    {
        id: "brahim",
        name: "Brahim Diaz",
        number: 21,
        nationality: "Morocco",
        position: "Midfielder",
        age: 27,
        height: "1.71 m",
        description: "Creative attacker capable of playing multiple roles.",
        image: "images/brahim.jpeg"
    },

    // FORWARDS

    {
        id: "vinicius",
        name: "Vinicius Junior",
        number: 7,
        nationality: "Brazil",
        position: "Forward",
        age: 26,
        height: "1.76 m",
        description: "Explosive winger known for dribbling and pace.",
        image: "images/vinicius.jpeg"
    },

    {
        id: "endrick",
        name: "Endrick",
        number: 9,
        nationality: "Brazil",
        position: "Forward",
        age: 19,
        height: "1.73 m",
        description: "Young striker with tremendous potential.",
        image: "images/endrick.jpeg"
    },

    {
        id: "mbappe",
        name: "Kylian Mbappe",
        number: 10,
        nationality: "France",
        position: "Forward",
        age: 27,
        height: "1.78 m",
        description: "World-class forward renowned for speed and finishing.",
        image: "images/mbappe.jpeg"
    },

    {
        id: "rodrygo",
        name: "Rodrygo",
        number: 11,
        nationality: "Brazil",
        position: "Forward",
        age: 25,
        height: "1.74 m",
        description: "Versatile attacker capable of playing anywhere across the front line.",
        image: "images/rodrygo.jpeg"
    },

    {
        id: "gonzalo",
        name: "Gonzalo Garcia",
        number: 16,
        nationality: "Spain",
        position: "Forward",
        age: 22,
        height: "1.82 m",
        description: "Young striker promoted from the academy.",
        image: "images/gonzalo.jpeg"
    }

];