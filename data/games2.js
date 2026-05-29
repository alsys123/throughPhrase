    // Game data - each game has multiple through lines whose answers form a phrase
    const games2 = [
        {
            phrase: "ALL THAT GLITTERS IS NOT GOLD",
            throughLines: [
                {
                    words: ["STAR", "TIME", "OUT", "AROUND", "INCLUSIVE"],
                    answer: "ALL",
                    connections: ["ALL STAR", "ALL TIME", "ALL OUT", "ALL AROUND", "ALL INCLUSIVE"]
                },
                {
                    words: ["AWAY", "MATTER", "MUCH", "SAID", "BEING"],
                    answer: "THAT",
                    connections: ["THAT AWAY", "THAT MATTER", "THAT MUCH", "THAT SAID", "THAT BEING"]
                },
                {
                    words: ["ROCK", "DOME", "FISH", "MINE", "RUSH"],
                    answer: "GOLD",
                    connections: ["GOLD ROCK", "GOLD DOME", "GOLDFISH", "GOLD MINE", "GOLD RUSH"]
                }
            ]
        },
        {
            phrase: "BARKING UP THE WRONG TREE",
            throughLines: [
                {
                    words: ["MAD", "SPIDER", "LOT", "ORDER", "DEER"],
                    answer: "BARK",
                    connections: ["BARK MAD", "BARK SPIDER", "BARK LOT", "BARK ORDER", "BARK DEER"]
                },
                {
                    words: ["TOWN", "STAIRS", "BEAT", "LOAD", "TOWN"],
                    answer: "UP",
                    connections: ["UPTOWN", "UPSTAIRS", "UPBEAT", "UPLOAD", "UPTOWN"]
                },
                {
                    words: ["END", "BEST", "WAY", "TOP", "LONG"],
                    answer: "THE",
                    connections: ["THE END", "THE BEST", "THE WAY", "THE TOP", "THE LONG"]
                },
                {
                    words: ["SIDE", "DOING", "TURN", "FOOT", "HEADED"],
                    answer: "WRONG",
                    connections: ["WRONGSIDE", "WRONG DOING", "WRONG TURN", "WRONG FOOT", "WRONGHEADED"]
                },
                {
                    words: ["HOUSE", "TOP", "LINE", "TRUNK", "FROG"],
                    answer: "TREE",
                    connections: ["TREEHOUSE", "TREETOP", "TREE LINE", "TREE TRUNK", "TREE FROG"]
                }
            ]
        },
        {
            phrase: "BLOOD IS THICKER THAN WATER",
            throughLines: [
                {
                    words: ["HOUND", "SHED", "BATH", "BANK", "STREAM"],
                    answer: "BLOOD",
                    connections: ["BLOODHOUND", "BLOODSHED", "BLOODBATH", "BLOOD BANK", "BLOODSTREAM"]
                },
                {
                    words: ["THAN", "WHAT", "KNOWN", "SAID", "DONE"],
                    answer: "IS",
                    connections: ["IS THAN", "IS WHAT", "IS KNOWN", "IS SAID", "IS DONE"]
                },
                {
                    words: ["SET", "SKIN", "ET", "LY", "NESS"],
                    answer: "THICK",
                    connections: ["THICKSET", "THICK SKIN", "THICKET", "THICKLY", "THICKNESS"]
                },
                {
                    words: ["FALL", "PROOF", "COLOR", "SHED", "FRONT"],
                    answer: "WATER",
                    connections: ["WATERFALL", "WATERPROOF", "WATERCOLOR", "WATER SHED", "WATERFRONT"]
                }
            ]
        },
        {
            phrase: "DIAMOND IN THE ROUGH",
            throughLines: [
                {
                    words: ["BACK", "RING", "MINE", "ANNIVERSARY", "LANE"],
                    answer: "DIAMOND",
                    connections: ["DIAMOND BACK", "DIAMOND RING", "DIAMOND MINE", "DIAMOND ANNIVERSARY", "DIAMOND LANE"]
                },
                {
                    words: ["CROWD", "LOVE", "TOUCH", "FLUX", "TRANSIT"],
                    answer: "IN",
                    connections: ["IN CROWD", "IN LOVE", "IN TOUCH", "IN FLUX", "IN TRANSIT"]
                },
                {
                    words: ["END", "LONG", "WAY", "KNOW", "RUN"],
                    answer: "THE",
                    connections: ["THE END", "THE LONG", "THE WAY", "THE KNOW", "THE RUN"]
                },
                {
                    words: ["NECK", "HOUSE", "RIDER", "SHOD", "NECK"],
                    answer: "ROUGH",
                    connections: ["ROUGHNECK", "ROUGH HOUSE", "ROUGH RIDER", "ROUGH SHOD", "ROUGHNECK"]
                }
            ]
        },
        {
            phrase: "EVERY DOG HAS ITS DAY",
            throughLines: [
                {
                    words: ["WHERE", "BODY", "THING", "ONE", "ONE"],
                    answer: "EVERY",
                    connections: ["EVERYWHERE", "EVERYBODY", "EVERYTHING", "EVERYONE", "EVERYONE"]
                },
                {
                    words: ["HOUSE", "WOOD", "FISH", "FIGHT", "SLED"],
                    answer: "DOG",
                    connections: ["DOGHOUSE", "DOGWOOD", "DOGFISH", "DOGFIGHT", "DOG SLED"]
                },
                {
                    words: ["BREAK", "LIGHT", "DREAM", "CARE", "TRIP"],
                    answer: "DAY",
                    connections: ["DAYBREAK", "DAYLIGHT", "DAYDREAM", "DAYCARE", "DAY TRIP"]
                }
            ]
        },
        {
            phrase: "GIVE PEACE A CHANCE",
            throughLines: [
                {
                    words: ["AWAY", "BACK", "IN", "OUT", "UP"],
                    answer: "GIVE",
                    connections: ["GIVE AWAY", "GIVE BACK", "GIVE IN", "GIVE OUT", "GIVE UP"]
                },
                {
                    words: ["KEEPER", "MAKER", "TIME", "PIPE", "SIGN"],
                    answer: "PEACE",
                    connections: ["PEACEKEEPER", "PEACEMAKER", "PEACETIME", "PEACE PIPE", "PEACE SIGN"]
                },
                {
                    words: ["CARD", "GAME", "MEETING", "ENCOUNTER", "DISCOVERY"],
                    answer: "CHANCE",
                    connections: ["CHANCE CARD", "CHANCE GAME", "CHANCE MEETING", "CHANCE ENCOUNTER", "CHANCE DISCOVERY"]
                }
            ]
        },
        {
            phrase: "HIT THE NAIL ON THE HEAD",
            throughLines: [
                {
                    words: ["LIST", "MAN", "PARADE", "SQUAD", "MISS"],
                    answer: "HIT",
                    connections: ["HIT LIST", "HIT MAN", "HIT PARADE", "HIT SQUAD", "HIT MISS"]
                },
                {
                    words: ["FILE", "BITING", "GUN", "POLISH", "SALON"],
                    answer: "NAIL",
                    connections: ["NAIL FILE", "NAIL BITING", "NAIL GUN", "NAIL POLISH", "NAIL SALON"]
                },
                {
                    words: ["BAND", "ACHE", "LINE", "MASTER", "STRONG"],
                    answer: "HEAD",
                    connections: ["HEADBAND", "HEADACHE", "HEADLINE", "HEADMASTER", "HEADSTRONG"]
                }
            ]
        },
        {
            phrase: "KILL TWO BIRDS WITH ONE STONE",
            throughLines: [
                {
                    words: ["JOY", "TIME", "SOME", "SWITCH", "STREAK"],
                    answer: "KILL",
                    connections: ["KILL JOY", "KILL TIME", "KILL SOME", "KILL SWITCH", "KILL STREAK"]
                },
                {
                    words: ["SOME", "FOLD", "STEP", "FACED", "TIME"],
                    answer: "TWO",
                    connections: ["TWOSOME", "TWOFOLD", "TWO STEP", "TWO FACED", "TWO TIME"]
                },
                {
                    words: ["CAGE", "CALL", "DOG", "HOUSE", "SEED"],
                    answer: "BIRD",
                    connections: ["BIRDCAGE", "BIRD CALL", "BIRD DOG", "BIRDHOUSE", "BIRDSEED"]
                },
                {
                    words: ["WALL", "COLD", "FISH", "ROLLING", "PRECIOUS"],
                    answer: "STONE",
                    connections: ["STONE WALL", "STONE COLD", "STONE FISH", "ROLLING STONE", "PRECIOUS STONE"]
                }
            ]
        },
        {
            phrase: "MAKE HAY WHILE THE SUN SHINES",
            throughLines: [
                {
                    words: ["SHIFT", "OVER", "UP", "BELIEVE", "DO"],
                    answer: "MAKE",
                    connections: ["MAKESHIFT", "MAKEOVER", "MAKE UP", "MAKE BELIEVE", "MAKE DO"]
                },
                {
                    words: ["WIRE", "FEVER", "RIDE", "STACK", "MAKER"],
                    answer: "HAY",
                    connections: ["HAYWIRE", "HAY FEVER", "HAY RIDE", "HAYSTACK", "HAYMAKER"]
                },
                {
                    words: ["BURN", "FLOWER", "GLASSES", "RISE", "SET"],
                    answer: "SUN",
                    connections: ["SUNBURN", "SUNFLOWER", "SUNGLASSES", "SUNRISE", "SUNSET"]
                }
            ]
        },
        {
            phrase: "NEVER LOOK A GIFT HORSE IN THE MOUTH",
            throughLines: [
                {
                    words: ["MIND", "ENDING", "MORE", "AGAIN", "THELESS"],
                    answer: "NEVER",
                    connections: ["NEVERMIND", "NEVER ENDING", "NEVERMORE", "NEVER AGAIN", "NEVERTHELESS"]
                },
                {
                    words: ["WRAP", "CARD", "AID", "SHOP", "HORSE"],
                    answer: "GIFT",
                    connections: ["GIFT WRAP", "GIFT CARD", "GIFT AID", "GIFT SHOP", "GIFT HORSE"]
                },
                {
                    words: ["BACK", "PLAY", "SHOE", "POWER", "HAIR"],
                    answer: "HORSE",
                    connections: ["HORSEBACK", "HORSEPLAY", "HORSESHOE", "HORSEPOWER", "HORSEHAIR"]
                },
                {
                    words: ["PIECE", "GUARD", "WASH", "WATERING", "ORGAN"],
                    answer: "MOUTH",
                    connections: ["MOUTHPIECE", "MOUTH GUARD", "MOUTHWASH", "MOUTH WATERING", "MOUTH ORGAN"]
                }
            ]
        }
    ];
