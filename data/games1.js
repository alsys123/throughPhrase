    // Game data - each game has multiple through lines whose answers form a phrase
    const games1 = [
        {
            phrase: "ACTIONS SPEAK LOUDER THAN WORDS",
            throughLines: [
                {
                    words: ["HERO", "PACKED", "REPLAY", "THRILLER", "MOVIE"],
                    answer: "ACTION",
                    connections: ["ACTION HERO", "ACTION PACKED", "ACTION REPLAY", "ACTION THRILLER", "ACTION MOVIE"]
                },
                {
                    words: ["EASY", "SOFTLY", "VOLUMES", "CLEARLY", "WELL"],
                    answer: "SPEAK",
                    connections: ["SPEAK EASY", "SPEAK SOFTLY", "SPEAK VOLUMES", "SPEAK CLEARLY", "SPEAK WELL"]
                },
                {
                    words: ["BOOM", "SPEAKER", "MOUTH", "HAILER", "PEDAL"],
                    answer: "LOUD",
                    connections: ["LOUD BOOM", "LOUDSPEAKER", "LOUDMOUTH", "LOUDHAILER", "LOUD PEDAL"]
                },
                {
                    words: ["GIVING", "FIRST", "MUCH", "BEFORE", "RATHER"],
                    answer: "THAN",
                    connections: ["THAN GIVING", "THAN FIRST", "THAN MUCH", "THAN BEFORE", "RATHER THAN"]
                },
                {
                    words: ["PLAY", "SMITH", "PRESS", "WIDE", "CROSS"],
                    answer: "WORD",
                    connections: ["WORDPLAY", "WORDSMITH", "WORD PRESS", "WORLDWIDE", "CROSSWORD"]
                }
            ]
        },
        {
            phrase: "BITE THE BULLET",
            throughLines: [
                {
                    words: ["SIZE", "MARK", "BACK", "DUST", "NAIL"],
                    answer: "BITE",
                    connections: ["BITE SIZE", "BITE MARK", "BITE BACK", "BITE THE DUST", "BITE THE NAIL"]
                },
                {
                    words: ["POINT", "REAL", "DEAL", "THING", "WAY"],
                    answer: "THE",
                    connections: ["THE POINT", "THE REAL", "THE DEAL", "THE THING", "THE WAY"]
                },
                {
                    words: ["PROOF", "POINT", "TRAIN", "HOLE", "DODGER"],
                    answer: "BULLET",
                    connections: ["BULLETPROOF", "BULLET POINT", "BULLET TRAIN", "BULLET HOLE", "BULLET DODGER"]
                }
            ]
        },
        {
            phrase: "BURNING BRIDGES",
            throughLines: [
                {
                    words: ["DESIRE", "QUESTION", "SENSATION", "ISSUE", "POINT"],
                    answer: "BURNING",
                    connections: ["BURNING DESIRE", "BURNING QUESTION", "BURNING SENSATION", "BURNING ISSUE", "BURNING POINT"]
                },
                {
                    words: ["CARD", "WORK", "CLUB", "WATER", "TOLL"],
                    answer: "BRIDGE",
                    connections: ["BRIDGE CARD", "BRIDGEWORK", "BRIDGE CLUB", "BRIDGE WATER", "TOLL BRIDGE"]
                }
            ]
        },
        {
            phrase: "CATCH A FALLING STAR",
            throughLines: [
                {
                    words: ["PHRASE", "WORD", "FIRE", "UP", "OUT"],
                    answer: "CATCH",
                    connections: ["CATCHPHRASE", "CATCHWORD", "CATCH FIRE", "CATCH UP", "CATCH OUT"]
                },
                {
                    words: ["MINOR", "FLAT", "TEAM", "SHARP", "FRAME"],
                    answer: "A",
                    connections: ["A MINOR", "A FLAT", "A TEAM", "A SHARP", "A FRAME"]
                },
                {
                    words: ["OVER", "OUT", "DOWN", "BEHIND", "SHORT"],
                    answer: "FALLING",
                    connections: ["FALLING OVER", "FALLING OUT", "FALLING DOWN", "FALLING BEHIND", "FALLING SHORT"]
                },
                {
                    words: ["FISH", "BOARD", "LIGHT", "GAZE", "WARS"],
                    answer: "STAR",
                    connections: ["STARFISH", "STARBOARD", "STARLIGHT", "STARGAZE", "STAR WARS"]
                }
            ]
        },
        {
            phrase: "DON'T JUDGE A BOOK BY ITS COVER",
            throughLines: [
                {
                    words: ["MENTAL", "MENT", "RULING", "DAY", "CALL"],
                    answer: "JUDGE",
                    connections: ["JUDGMENTAL", "JUDGEMENT", "JUDGE RULING", "JUDGE DAY", "JUDGE CALL"]
                },
                {
                    words: ["WORM", "SHELF", "STORE", "MARK", "CASE"],
                    answer: "BOOK",
                    connections: ["BOOKWORM", "BOOKSHELF", "BOOKSTORE", "BOOKMARK", "BOOKCASE"]
                },
                {
                    words: ["UP", "STORY", "GIRL", "MODEL", "CHARGE"],
                    answer: "COVER",
                    connections: ["COVER UP", "COVER STORY", "COVER GIRL", "COVER MODEL", "COVER CHARGE"]
                }
            ]
        },
        {
            phrase: "FOLLOW YOUR HEART",
            throughLines: [
                {
                    words: ["THROUGH", "SUIT", "UP", "LEADER", "THROUGH"],
                    answer: "FOLLOW",
                    connections: ["FOLLOW THROUGH", "FOLLOW SUIT", "FOLLOW UP", "FOLLOW LEADER", "FOLLOW THROUGH"]
                },
                {
                    words: ["SELF", "TUBE", "SELF", "OWN", "TRULY"],
                    answer: "YOUR",
                    connections: ["YOURSELF", "YOUR TUBE", "YOUR SELF", "YOUR OWN", "YOURS TRULY"]
                },
                {
                    words: ["BEAT", "BREAK", "BURN", "FELT", "LAND"],
                    answer: "HEART",
                    connections: ["HEARTBEAT", "HEARTBREAK", "HEARTBURN", "HEARTFELT", "HEARTLAND"]
                }
            ]
        },
        {
            phrase: "KEEP YOUR CHIN UP",
            throughLines: [
                {
                    words: ["SAKE", "FIT", "SAKE", "AWAY", "GOING"],
                    answer: "KEEP",
                    connections: ["KEEPSAKE", "KEEP FIT", "KEEP SAKE", "KEEP AWAY", "KEEP GOING"]
                },
                {
                    words: ["SELF", "OWN", "TRULY", "TUBE", "MIND"],
                    answer: "YOUR",
                    connections: ["YOURSELF", "YOUR OWN", "YOURS TRULY", "YOUTUBE", "YOUR MIND"]
                },
                {
                    words: ["MUSIC", "STRAP", "UP", "WAG", "DEEP"],
                    answer: "CHIN",
                    connections: ["CHIN MUSIC", "CHINSTRAP", "CHIN UP", "CHIN WAG", "CHIN DEEP"]
                },
                {
                    words: ["TOWN", "LOAD", "STAIRS", "BEAT", "TIGHT"],
                    answer: "UP",
                    connections: ["UPTOWN", "UPLOAD", "UPSTAIRS", "UPBEAT", "UPTIGHT"]
                }
            ]
        },
        {
            phrase: "LOOK BEFORE YOU LEAP",
            throughLines: [
                {
                    words: ["OUT", "ALIKE", "OVER", "GOOD", "ALIKE"],
                    answer: "LOOK",
                    connections: ["LOOKOUT", "LOOKALIKE", "LOOKOVER", "LOOK GOOD", "LOOKALIKE"]
                },
                {
                    words: ["HAND", "THOUGHT", "HAND", "LONG", "TIME"],
                    answer: "BEFORE",
                    connections: ["BEFOREHAND", "BEFORE THOUGHT", "BEFOREHAND", "BEFORE LONG", "BEFORE TIME"]
                },
                {
                    words: ["SELF", "OWN", "TUBE", "TRULY", "MIND"],
                    answer: "YOU",
                    connections: ["YOURSELF", "YOUR OWN", "YOUTUBE", "YOURS TRULY", "YOUR MIND"]
                },
                {
                    words: ["FROG", "YEAR", "SECOND", "FAITH", "DAY"],
                    answer: "LEAP",
                    connections: ["LEAPFROG", "LEAP YEAR", "LEAP SECOND", "LEAP OF FAITH", "LEAP DAY"]
                }
            ]
        },
        {
            phrase: "ROLLING IN THE DEEP",
            throughLines: [
                {
                    words: ["PIN", "STONE", "BACK", "OUT", "HILLS"],
                    answer: "ROLLING",
                    connections: ["ROLLING PIN", "ROLLING STONE", "ROLLING BACK", "ROLLING OUT", "ROLLING HILLS"]
                },
                {
                    words: ["SIDE", "DOOR", "ZONE", "OUT", "RED"],
                    answer: "IN",
                    connections: ["INSIDE", "INDOOR", "IN ZONE", "IN OUT", "IN THE RED"]
                },
                {
                    words: ["END", "BEST", "KNOW", "LONG", "RUN"],
                    answer: "THE",
                    connections: ["THE END", "THE BEST", "THE KNOW", "THE LONG", "THE RUN"]
                },
                {
                    words: ["SEA", "END", "SOUTH", "THROAT", "SIX"],
                    answer: "DEEP",
                    connections: ["DEEP SEA", "DEEP END", "DEEP SOUTH", "DEEP THROAT", "DEEP SIX"]
                }
            ]
        },
        {
            phrase: "WHEN PIGS FLY",
            throughLines: [
                {
                    words: ["EVER", "NEEDED", "READY", "POSSIBLE", "ASKED"],
                    answer: "WHEN",
                    connections: ["WHENEVER", "WHEN NEEDED", "WHEN READY", "WHEN POSSIBLE", "WHEN ASKED"]
                },
                {
                    words: ["SKIN", "TAIL", "IRON", "LATIN", "OUT"],
                    answer: "PIG",
                    connections: ["PIGSKIN", "PIGTAIL", "PIG IRON", "PIG LATIN", "PIG OUT"]
                },
                {
                    words: ["WHEEL", "PAPER", "WEIGHT", "SWATTER", "FISHING"],
                    answer: "FLY",
                    connections: ["FLYWHEEL", "FLYPAPER", "FLYWEIGHT", "FLY SWATTER", "FLY FISHING"]
                }
            ]
        }
    ];
