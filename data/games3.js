    // Game data - each game has multiple through lines whose answers form a phrase
    const games3 = [
        {
            phrase: "ADD FUEL TO THE FIRE",
            throughLines: [
                {
                    words: ["UP", "ON", "IN", "DRESS", "MISSION"],
                    answer: "ADD",
                    connections: ["ADD UP", "ADD ON", "ADD IN", "ADDRESS", "ADD MISSION"]
                },
                {
                    words: ["EFFICIENT", "CELL", "TANK", "INJECTION", "GAUGE"],
                    answer: "FUEL",
                    connections: ["FUEL EFFICIENT", "FUEL CELL", "FUEL TANK", "FUEL INJECTION", "FUEL GAUGE"]
                },
                {
                    words: ["PLACE", "SIDE", "WORKS", "TRUCK", "FIGHTER"],
                    answer: "FIRE",
                    connections: ["FIREPLACE", "FIRESIDE", "FIREWORKS", "FIRE TRUCK", "FIREFIGHTER"]
                }
            ]
        },
        {
            phrase: "BACK TO SQUARE ONE",
            throughLines: [
                {
                    words: ["FIRE", "PACK", "YARD", "BONE", "HAND"],
                    answer: "BACK",
                    connections: ["BACKFIRE", "BACKPACK", "BACKYARD", "BACKBONE", "BACKHAND"]
                },
                {
                    words: ["DANCE", "ROOT", "GETHER", "NIGHT", "DAY"],
                    answer: "TO",
                    connections: ["TO DANCE", "TO ROOT", "TOGETHER", "TONIGHT", "TODAY"]
                },
                {
                    words: ["DANCE", "ROOT", "MEAL", "ROOT", "OFF"],
                    answer: "SQUARE",
                    connections: ["SQUARE DANCE", "SQUARE ROOT", "SQUARE MEAL", "SQUARE ROOT", "SQUARE OFF"]
                },
                {
                    words: ["SELF", "SIDED", "WAY", "TIME", "LINER"],
                    answer: "ONE",
                    connections: ["ONESELF", "ONE SIDED", "ONE WAY", "ONE TIME", "ONE LINER"]
                }
            ]
        },
        {
            phrase: "BITE OFF MORE THAN YOU CAN CHEW",
            throughLines: [
                {
                    words: ["SIZE", "MARK", "BACK", "SIZED", "WING"],
                    answer: "BITE",
                    connections: ["BITE SIZE", "BITE MARK", "BITE BACK", "BITE SIZED", "BITE WING"]
                },
                {
                    words: ["OVER", "OUT", "SO", "OVER", "EVER"],
                    answer: "MORE",
                    connections: ["MOREOVER", "MOREOVER", "MOREOVER", "MOREOVER", "MOREOVER"]
                },
                {
                    words: ["SELF", "OWN", "TRULY", "TUBE", "WAY"],
                    answer: "YOU",
                    connections: ["YOURSELF", "YOUR OWN", "YOURS TRULY", "YOUTUBE", "YOUR WAY"]
                },
                {
                    words: ["GUM", "TOY", "BONE", "STICK", "ABLE"],
                    answer: "CHEW",
                    connections: ["CHEWING GUM", "CHEW TOY", "CHEW BONE", "CHEWSTICK", "CHEWABLE"]
                }
            ]
        },
        {
            phrase: "CURIOSITY KILLED THE CAT",
            throughLines: [
                {
                    words: ["SHOP", "SEEKER", "DRIVEN", "FACTOR", "GAP"],
                    answer: "CURIOSITY",
                    connections: ["CURIOSITY SHOP", "CURIOSITY SEEKER", "CURIOSITY DRIVEN", "CURIOSITY FACTOR", "CURIOSITY GAP"]
                },
                {
                    words: ["NAP", "FISH", "WALK", "NIP", "BIRD"],
                    answer: "CAT",
                    connections: ["CATNAP", "CATFISH", "CATWALK", "CATNIP", "CATBIRD"]
                }
            ]
        },
        {
            phrase: "DON'T CRY OVER SPILLED MILK",
            throughLines: [
                {
                    words: ["BABY", "FOUL", "WOLF", "OUT", "SHAME"],
                    answer: "CRY",
                    connections: ["CRY BABY", "CRY FOUL", "CRY WOLF", "CRY OUT", "CRY SHAME"]
                },
                {
                    words: ["BOARD", "COAT", "PASS", "SEAS", "DOSE"],
                    answer: "OVER",
                    connections: ["OVERBOARD", "OVERCOAT", "OVERPASS", "OVERSEAS", "OVERDOSE"]
                },
                {
                    words: ["MAN", "MAID", "SHAKE", "WEED", "CHOCOLATE"],
                    answer: "MILK",
                    connections: ["MILKMAN", "MILKMAID", "MILKSHAKE", "MILKWEED", "MILK CHOCOLATE"]
                }
            ]
        },
        {
            phrase: "EASY COME EASY GO",
            throughLines: [
                {
                    words: ["GOING", "RIDER", "CHAIR", "STREET", "MONEY"],
                    answer: "EASY",
                    connections: ["EASYGOING", "EASY RIDER", "EASY CHAIR", "EASY STREET", "EASY MONEY"]
                },
                {
                    words: ["BACK", "BACK", "UPPANCE", "DOWN", "ALONG"],
                    answer: "COME",
                    connections: ["COME BACK", "COMEBACK", "COMEUPPANCE", "COME DOWN", "COME ALONG"]
                },
                {
                    words: ["GETTER", "ROUND", "AHEAD", "BETWEEN", "CART"],
                    answer: "GO",
                    connections: ["GO GETTER", "GO ROUND", "GO AHEAD", "GO BETWEEN", "GO CART"]
                }
            ]
        },
        {
            phrase: "FACE THE MUSIC",
            throughLines: [
                {
                    words: ["LIFT", "OFF", "PAINT", "TIME", "PACK"],
                    answer: "FACE",
                    connections: ["FACELIFT", "FACE OFF", "FACE PAINT", "FACE TIME", "FACE PACK"]
                },
                {
                    words: ["BOX", "HALL", "VIDEO", "SHEET", "STAND"],
                    answer: "MUSIC",
                    connections: ["MUSIC BOX", "MUSIC HALL", "MUSIC VIDEO", "MUSIC SHEET", "MUSIC STAND"]
                }
            ]
        },
        {
            phrase: "GO WITH THE FLOW",
            throughLines: [
                {
                    words: ["AHEAD", "GETTER", "KART", "BETWEEN", "ROUND"],
                    answer: "GO",
                    connections: ["GO AHEAD", "GO GETTER", "GO KART", "GO BETWEEN", "GO ROUND"]
                },
                {
                    words: ["STAND", "OUT", "DRAW", "HOLD", "DRAW"],
                    answer: "WITH",
                    connections: ["WITHSTAND", "WITHOUT", "WITHDRAW", "WITHHOLD", "WITHDRAW"]
                },
                {
                    words: ["CHART", "OVER", "THROUGH", "MASTER", "CHART"],
                    answer: "FLOW",
                    connections: ["FLOW CHART", "FLOW OVER", "FLOW THROUGH", "FLOW MASTER", "FLOWCHART"]
                }
            ]
        },
        {
            phrase: "GREAT MINDS THINK ALIKE",
            throughLines: [
                {
                    words: ["WALL", "COAT", "UNCLE", "NIECE", "BRITAIN"],
                    answer: "GREAT",
                    connections: ["GREAT WALL", "GREAT COAT", "GREAT UNCLE", "GREAT NIECE", "GREAT BRITAIN"]
                },
                {
                    words: ["SET", "FULL", "BOGGLING", "BLOWING", "OVER"],
                    answer: "MIND",
                    connections: ["MINDSET", "MINDFUL", "MIND BOGGLING", "MIND BLOWING", "MIND OVER"]
                },
                {
                    words: ["TANK", "PIECE", "OUT", "AHEAD", "TWICE"],
                    answer: "THINK",
                    connections: ["THINK TANK", "THINK PIECE", "THINK OUT", "THINK AHEAD", "THINK TWICE"]
                }
            ]
        },
        {
            phrase: "HASTE MAKES WASTE",
            throughLines: [
                {
                    words: ["FUL", "ILY", "EN", "ENING", "ILY"],
                    answer: "HASTE",
                    connections: ["HASTEFUL", "HASTILY", "HASTEN", "HASTENING", "HASTILY"]
                },
                {
                    words: ["SHIFT", "OVER", "UP", "DO", "BELIEVE"],
                    answer: "MAKE",
                    connections: ["MAKESHIFT", "MAKEOVER", "MAKE UP", "MAKE DO", "MAKE BELIEVE"]
                },
                {
                    words: ["LAND", "BASKET", "PAPER", "WATER", "DISPOSAL"],
                    answer: "WASTE",
                    connections: ["WASTELAND", "WASTE BASKET", "WASTEPAPER", "WASTEWATER", "WASTE DISPOSAL"]
                }
            ]
        }
    ];
