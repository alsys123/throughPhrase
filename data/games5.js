    // Game data - each game has multiple through lines whose answers form a phrase
    const games5 = [
        {
            phrase: "A PENNY FOR YOUR THOUGHTS",
            throughLines: [
                {
                    words: ["WISE", "PINCHING", "LESS", "STOCK", "LANE"],
                    answer: "PENNY",
                    connections: ["PENNY WISE", "PENNY PINCHING", "PENNILESS", "PENNY STOCK", "PENNY LANE"]
                },
                {
                    words: ["SELF", "OWN", "TUBE", "TRULY", "MIND"],
                    answer: "YOUR",
                    connections: ["YOURSELF", "YOUR OWN", "YOUTUBE", "YOURS TRULY", "YOUR MIND"]
                },
                {
                    words: ["FUL", "LESS", "PROVOKING", "OUT", "READER"],
                    answer: "THOUGHT",
                    connections: ["THOUGHTFUL", "THOUGHTLESS", "THOUGHT PROVOKING", "THOUGHT OUT", "THOUGHT READER"]
                }
            ]
        },
        {
            phrase: "ABSENCE MAKES THE HEART GROW FONDER",
            throughLines: [
                {
                    words: ["MINDED", "TEEISM", "WITHOUT LEAVE", "NOTE", "RATE"],
                    answer: "ABSENT",
                    connections: ["ABSENT MINDED", "ABSENTEEISM", "ABSENCE WITHOUT LEAVE", "ABSENT NOTE", "ABSENCE RATE"]
                },
                {
                    words: ["BEAT", "BREAK", "BURN", "FELT", "LAND"],
                    answer: "HEART",
                    connections: ["HEARTBEAT", "HEARTBREAK", "HEARTBURN", "HEARTFELT", "HEARTLAND"]
                },
                {
                    words: ["UP", "OLDER", "APART", "TALLER", "WISER"],
                    answer: "GROW",
                    connections: ["GROW UP", "GROW OLDER", "GROW APART", "GROW TALLER", "GROW WISER"]
                }
            ]
        },
        {
            phrase: "ALL ROADS LEAD TO ROME",
            throughLines: [
                {
                    words: ["STAR", "TIME", "OUT", "CLEAR", "INCLUSIVE"],
                    answer: "ALL",
                    connections: ["ALL STAR", "ALL TIME", "ALL OUT", "ALL CLEAR", "ALL INCLUSIVE"]
                },
                {
                    words: ["BLOCK", "SIDE", "RUNNER", "HOG", "KILL"],
                    answer: "ROAD",
                    connections: ["ROADBLOCK", "ROADSIDE", "ROAD RUNNER", "ROAD HOG", "ROAD KILL"]
                },
                {
                    words: ["ANCE", "ER", "ING", "ASTRAY", "OUT"],
                    answer: "LEAD",
                    connections: ["LEADANCE", "LEADER", "LEADING", "LEAD ASTRAY", "LEAD OUT"]
                }
            ]
        },
        {
            phrase: "BEAT AROUND THE BUSH",
            throughLines: [
                {
                    words: ["DOWN", "UP", "BOX", "NICK", "POET"],
                    answer: "BEAT",
                    connections: ["BEATDOWN", "BEAT UP", "BEATBOX", "BEATNIK", "BEAT POET"]
                },
                {
                    words: ["ABOUT", "TOWN", "TURN", "FACE", "HAND"],
                    answer: "AROUND",
                    connections: ["AROUND ABOUT", "AROUND TOWN", "AROUND TURN", "AROUND FACE", "AROUND HAND"]
                },
                {
                    words: ["FIRE", "BABY", "CRAFT", "LEAGUE", "WHACKER"],
                    answer: "BUSH",
                    connections: ["BUSHFIRE", "BUSH BABY", "BUSHCRAFT", "BUSH LEAGUE", "BUSH WHACKER"]
                }
            ]
        },
        {
            phrase: "BETTER LATE THAN NEVER",
            throughLines: [
                {
                    words: ["HALF", "MENT", "OFF", "KNOWN", "SUITED"],
                    answer: "BETTER",
                    connections: ["BETTER HALF", "BETTERMENT", "BETTER OFF", "BETTER KNOWN", "BETTER SUITED"]
                },
                {
                    words: ["COMER", "LY", "NIGHT", "BLOOMER", "STARTER"],
                    answer: "LATE",
                    connections: ["LATECOMER", "LATELY", "LATE NIGHT", "LATE BLOOMER", "LATE STARTER"]
                },
                {
                    words: ["MIND", "ENDING", "MORE", "AGAIN", "THELESS"],
                    answer: "NEVER",
                    connections: ["NEVERMIND", "NEVER ENDING", "NEVERMORE", "NEVER AGAIN", "NEVERTHELESS"]
                }
            ]
        },
        {
            phrase: "BIRDS OF A FEATHER FLOCK TOGETHER",
            throughLines: [
                {
                    words: ["CAGE", "CALL", "HOUSE", "SEED", "BATH"],
                    answer: "BIRD",
                    connections: ["BIRDCAGE", "BIRD CALL", "BIRDHOUSE", "BIRDSEED", "BIRD BATH"]
                },
                {
                    words: ["WEIGHT", "BOA", "BED", "PILLOW", "LIGHT"],
                    answer: "FEATHER",
                    connections: ["FEATHERWEIGHT", "FEATHER BOA", "FEATHER BED", "FEATHER PILLOW", "FEATHER LIGHT"]
                },
                {
                    words: ["LOCK", "GET", "GATHER", "NIGHT", "DAY"],
                    answer: "TO",
                    connections: ["TO LOCK", "TO GET", "TOGETHER", "TONIGHT", "TODAY"]
                }
            ]
        },
        {
            phrase: "BLOW HOT AND COLD",
            throughLines: [
                {
                    words: ["OUT", "OVER", "TORCH", "FISH", "HARD"],
                    answer: "BLOW",
                    connections: ["BLOWOUT", "BLOWOVER", "BLOWTORCH", "BLOWFISH", "BLOW HARD"]
                },
                {
                    words: ["DOG", "SHOT", "HEAD", "SPOT", "LINE"],
                    answer: "HOT",
                    connections: ["HOT DOG", "HOT SHOT", "HOTHEAD", "HOT SPOT", "HOT LINE"]
                },
                {
                    words: ["FRONT", "BLOOD", "HEARTED", "SNAP", "SHOULDER"],
                    answer: "COLD",
                    connections: ["COLD FRONT", "COLD BLOOD", "COLD HEARTED", "COLD SNAP", "COLD SHOULDER"]
                }
            ]
        },
        {
            phrase: "BREAK A LEG",
            throughLines: [
                {
                    words: ["FAST", "THROUGH", "DOWN", "EVEN", "NECK"],
                    answer: "BREAK",
                    connections: ["BREAKFAST", "BREAKTHROUGH", "BREAKDOWN", "BREAKEVEN", "BREAKNECK"]
                },
                {
                    words: ["ROOM", "WORK", "ACY", "ENDS", "ISLATURE"],
                    answer: "LEG",
                    connections: ["LEGROOM", "LEGWORK", "LEGACY", "LEGEND", "LEGISLATURE"]
                }
            ]
        },
        {
            phrase: "BURN THE MIDNIGHT OIL",
            throughLines: [
                {
                    words: ["OUT", "DOWN", "UP", "SIDE", "MARK"],
                    answer: "BURN",
                    connections: ["BURNOUT", "BURN DOWN", "BURN UP", "BURN SIDE", "BURN MARK"]
                },
                {
                    words: ["SUN", "BLUE", "DEAD", "AFTER", "OVER"],
                    answer: "MIDNIGHT",
                    connections: ["MIDNIGHT SUN", "MIDNIGHT BLUE", "MIDNIGHT DEAD", "MIDNIGHT AFTER", "MIDNIGHT OVER"]
                },
                {
                    words: ["FIELD", "SLICK", "WELL", "RIG", "PAINT"],
                    answer: "OIL",
                    connections: ["OILFIELD", "OIL SLICK", "OIL WELL", "OIL RIG", "OIL PAINT"]
                }
            ]
        },
        {
            phrase: "CALL A SPADE A SPADE",
            throughLines: [
                {
                    words: ["OUT", "SIGN", "BACK", "WAITING", "ROLL"],
                    answer: "CALL",
                    connections: ["CALL OUT", "CALL SIGN", "CALL BACK", "CALL WAITING", "CALL ROLL"]
                },
                {
                    words: ["WORK", "FUL", "WORK", "FED", "WORK"],
                    answer: "SPADE",
                    connections: ["SPADEWORK", "SPADEFUL", "SPADEWORK", "SPADEFED", "SPADEWORK"]
                }
            ]
        },
        {
            phrase: "CARPE DIEM",
            throughLines: [
                {
                    words: ["TUNNEL", "INJURY", "POOL", "DIEM", "RIDE"],
                    answer: "CARPE",
                    connections: ["CARPE TUNNEL", "CARPE INJURY", "CARPE POOL", "CARPE DIEM", "CARPE RIDE"]
                },
                {
                    words: ["ET", "EM", "DAILY", "LIGHT", "BREAK"],
                    answer: "DAY",
                    connections: ["DAYLIGHT", "DAYDREAM", "DAILY", "DAYLIGHT", "DAYBREAK"]
                }
            ]
        },
        {
            phrase: "CLOSE BUT NO CIGAR",
            throughLines: [
                {
                    words: ["DOWN", "OUT", "KNIT", "SET", "FIT"],
                    answer: "CLOSE",
                    connections: ["CLOSEDOWN", "CLOSEOUT", "CLOSE KNIT", "CLOSE SET", "CLOSE FIT"]
                },
                {
                    words: ["WHERE", "BODY", "ONE", "THING", "HOW"],
                    answer: "NO",
                    connections: ["NOWHERE", "NOBODY", "NO ONE", "NOTHING", "NO HOW"]
                },
                {
                    words: ["STORE", "BOX", "BAND", "SHAPED", "CUTTER"],
                    answer: "CIGAR",
                    connections: ["CIGAR STORE", "CIGAR BOX", "CIGAR BAND", "CIGAR SHAPED", "CIGAR CUTTER"]
                }
            ]
        },
        {
            phrase: "COME RAIN OR SHINE",
            throughLines: [
                {
                    words: ["BACK", "DOWN", "ALONG", "THROUGH", "UPPANCE"],
                    answer: "COME",
                    connections: ["COMEBACK", "COME DOWN", "COME ALONG", "COME THROUGH", "COMEUPPANCE"]
                },
                {
                    words: ["BOW", "COAT", "DROP", "FOREST", "WATER"],
                    answer: "RAIN",
                    connections: ["RAINBOW", "RAINCOAT", "RAINDROP", "RAINFOREST", "RAINWATER"]
                },
                {
                    words: ["LIGHT", "STONE", "RISE", "BURN", "FLOWER"],
                    answer: "SUN",
                    connections: ["SUNLIGHT", "SUNSTONE", "SUNRISE", "SUNBURN", "SUNFLOWER"]
                }
            ]
        },
        {
            phrase: "CUT TO THE CHASE",
            throughLines: [
                {
                    words: ["BACK", "OFF", "OUT", "THROAT", "PRICE"],
                    answer: "CUT",
                    connections: ["CUTBACK", "CUT OFF", "CUT OUT", "CUTTHROAT", "CUT PRICE"]
                },
                {
                    words: ["END", "LONG", "WAY", "TOP", "RUN"],
                    answer: "THE",
                    connections: ["THE END", "THE LONG", "THE WAY", "THE TOP", "THE RUN"]
                },
                {
                    words: ["DOWN", "AWAY", "SCENE", "LOUNGE", "CARD"],
                    answer: "CHASE",
                    connections: ["CHASE DOWN", "CHASE AWAY", "CHASE SCENE", "LOUNGE CHASE", "CHASE CARD"]
                }
            ]
        },
        {
            phrase: "DEVIL IN THE DETAILS",
            throughLines: [
                {
                    words: ["FISH", "CARE", "MAY", "MENT", "ISH"],
                    answer: "DEVIL",
                    connections: ["DEVILFISH", "DEVIL CARE", "DEVIL MAY", "DEVILMENT", "DEVILISH"]
                },
                {
                    words: ["CROWD", "LOVE", "TRANSIT", "TOUCH", "SIDE"],
                    answer: "IN",
                    connections: ["IN CROWD", "IN LOVE", "IN TRANSIT", "IN TOUCH", "INSIDE"]
                },
                {
                    words: ["ORIENTED", "ED", "ING", "WORK", "MAN"],
                    answer: "DETAIL",
                    connections: ["DETAIL ORIENTED", "DETAILED", "DETAILING", "DETAIL WORK", "DETAIL MAN"]
                }
            ]
        },
        {
            phrase: "DON'T BITE THE HAND THAT FEEDS YOU",
            throughLines: [
                {
                    words: ["SIZE", "MARK", "BACK", "SIZED", "BULLET"],
                    answer: "BITE",
                    connections: ["BITE SIZE", "BITE MARK", "BITE BACK", "BITE SIZED", "BITE THE BULLET"]
                },
                {
                    words: ["SHAKE", "STAND", "MADE", "HELD", "PICKED"],
                    answer: "HAND",
                    connections: ["HANDSHAKE", "HANDSTAND", "HANDMADE", "HANDHELD", "HAND PICKED"]
                },
                {
                    words: ["BACK", "SELF", "OWN", "TUBE", "TRULY"],
                    answer: "YOU",
                    connections: ["YOU BACK", "YOURSELF", "YOUR OWN", "YOUTUBE", "YOURS TRULY"]
                }
            ]
        },
        {
            phrase: "DRAW A BLANK",
            throughLines: [
                {
                    words: ["BACK", "BRIDGE", "STRING", "CARD", "BOARD"],
                    answer: "DRAW",
                    connections: ["DRAWBACK", "DRAWBRIDGE", "DRAWSTRING", "DRAW CARD", "DRAW BOARD"]
                },
                {
                    words: ["CHECK", "SLATE", "BOARD", "OUT", "STARE"],
                    answer: "BLANK",
                    connections: ["BLANK CHECK", "BLANK SLATE", "BLANK BOARD", "BLANK OUT", "BLANK STARE"]
                }
            ]
        },
        {
            phrase: "EVERY CLOUD HAS A SILVER LINING",
            throughLines: [
                {
                    words: ["WHERE", "BODY", "DAY", "THING", "ONE"],
                    answer: "EVERY",
                    connections: ["EVERYWHERE", "EVERYBODY", "EVERYDAY", "EVERYTHING", "EVERYONE"]
                },
                {
                    words: ["NINE", "STORAGE", "COVER", "FOREST", "BURST"],
                    answer: "CLOUD",
                    connections: ["CLOUD NINE", "CLOUD STORAGE", "CLOUD COVER", "CLOUD FOREST", "CLOUDBURST"]
                },
                {
                    words: ["SPOON", "SCREEN", "BULLET", "MEDAL", "SMITH"],
                    answer: "SILVER",
                    connections: ["SILVER SPOON", "SILVER SCREEN", "SILVER BULLET", "SILVER MEDAL", "SILVERSMITH"]
                }
            ]
        },
        {
            phrase: "FIND A NEEDLE IN A HAYSTACK",
            throughLines: [
                {
                    words: ["OUT", "INGS", "FAULT", "PRINT", "INGS"],
                    answer: "FIND",
                    connections: ["FIND OUT", "FINDINGS", "FIND FAULT", "FINGERPRINT", "FINDINGS"]
                },
                {
                    words: ["POINT", "WORK", "NOSE", "CASE", "EYE"],
                    answer: "NEEDLE",
                    connections: ["NEEDLE POINT", "NEEDLEWORK", "NEEDLE NOSE", "NEEDLE CASE", "NEEDLE EYE"]
                },
                {
                    words: ["WIRE", "FEVER", "RIDE", "STACK", "MAKER"],
                    answer: "HAY",
                    connections: ["HAYWIRE", "HAY FEVER", "HAY RIDE", "HAYSTACK", "HAYMAKER"]
                }
            ]
        },
        {
            phrase: "FISH OUT OF WATER",
            throughLines: [
                {
                    words: ["BOWL", "CAKE", "HOOK", "POND", "WIFE"],
                    answer: "FISH",
                    connections: ["FISHBOWL", "FISHCAKE", "FISHHOOK", "FISH POND", "FISHWIFE"]
                },
                {
                    words: ["BOARD", "SIDE", "WARD", "DOOR", "LOOK"],
                    answer: "OUT",
                    connections: ["OUTBOARD", "OUTSIDE", "OUTWARD", "OUTDOOR", "OUTLOOK"]
                },
                {
                    words: ["FALL", "PROOF", "FRONT", "COLOR", "MARK"],
                    answer: "WATER",
                    connections: ["WATERFALL", "WATERPROOF", "WATERFRONT", "WATERCOLOR", "WATERMARK"]
                }
            ]
        },
        {
            phrase: "FIT AS A FIDDLE",
            throughLines: [
                {
                    words: ["OUT", "NESS", "TED", "TING", "FUL"],
                    answer: "FIT",
                    connections: ["FITOUT", "FITNESS", "FITTED", "FITTING", "FITFUL"]
                },
                {
                    words: ["STICK", "CASE", "HEAD", "DE DEE", "PLAYER"],
                    answer: "FIDDLE",
                    connections: ["FIDDLESTICK", "FIDDLE CASE", "FIDDLEHEAD", "FIDDLE DE DEE", "FIDDLE PLAYER"]
                }
            ]
        },
        {
            phrase: "GET THE BALL ROLLING",
            throughLines: [
                {
                    words: ["AWAY", "BACK", "DOWN", "OUT", "OVER"],
                    answer: "GET",
                    connections: ["GETAWAY", "GET BACK", "GET DOWN", "GET OUT", "GET OVER"]
                },
                {
                    words: ["PARK", "GAME", "ROOM", "POINT", "PLAYER"],
                    answer: "BALL",
                    connections: ["BALL PARK", "BALL GAME", "BALLROOM", "BALL POINT", "BALL PLAYER"]
                },
                {
                    words: ["PIN", "STONE", "HILLS", "OUT", "BACK"],
                    answer: "ROLLING",
                    connections: ["ROLLING PIN", "ROLLING STONE", "ROLLING HILLS", "ROLLING OUT", "ROLLING BACK"]
                }
            ]
        },
        {
            phrase: "GIVE IT YOUR BEST SHOT",
            throughLines: [
                {
                    words: ["AWAY", "BACK", "IN", "OUT", "UP"],
                    answer: "GIVE",
                    connections: ["GIVE AWAY", "GIVE BACK", "GIVE IN", "GIVE OUT", "GIVE UP"]
                },
                {
                    words: ["SELLER", "MAN", "FRIEND", "CASE", "WISHES"],
                    answer: "BEST",
                    connections: ["BEST SELLER", "BEST MAN", "BEST FRIEND", "BEST CASE", "BEST WISHES"]
                },
                {
                    words: ["GUN", "PUT", "PUTTER", "BLASTER", "CALLER"],
                    answer: "SHOT",
                    connections: ["SHOT GUN", "SHOT PUT", "SHOT PUTTER", "SHOT BLASTER", "SHOT CALLER"]
                }
            ]
        },
        {
            phrase: "HANG IN THERE",
            throughLines: [
                {
                    words: ["OVER", "OUT", "NAIL", "GLIDER", "MAN"],
                    answer: "HANG",
                    connections: ["HANGOVER", "HANGOUT", "HANG NAIL", "HANG GLIDER", "HANGMAN"]
                },
                {
                    words: ["SIDE", "DOOR", "WARD", "COMING", "CROWD"],
                    answer: "IN",
                    connections: ["INSIDE", "INDOOR", "INWARD", "INCOMING", "IN CROWD"]
                }
            ]
        },
        {
            phrase: "HIT THE GROUND RUNNING",
            throughLines: [
                {
                    words: ["LIST", "MAN", "PARADE", "SQUAD", "MISS"],
                    answer: "HIT",
                    connections: ["HIT LIST", "HITMAN", "HIT PARADE", "HIT SQUAD", "HIT MISS"]
                },
                {
                    words: ["BREAK", "WORK", "HOG", "NUT", "SWELL"],
                    answer: "GROUND",
                    connections: ["GROUNDBREAK", "GROUNDWORK", "GROUND HOG", "GROUNDNUT", "GROUNDSWELL"]
                },
                {
                    words: ["AWAY", "BACK", "DOWN", "MATE", "TIME"],
                    answer: "RUN",
                    connections: ["RUNAWAY", "RUNBACK", "RUNDOWN", "RUNMATE", "RUNTIME"]
                }
            ]
        },
        {
            phrase: "IN THE NICK OF TIME",
            throughLines: [
                {
                    words: ["CROWD", "LOVE", "TOUCH", "FLUX", "DEED"],
                    answer: "IN",
                    connections: ["IN CROWD", "IN LOVE", "IN TOUCH", "IN FLUX", "INDEED"]
                },
                {
                    words: ["NAME", "OF TIME", "NACK", "EL", "OLAS"],
                    answer: "NICK",
                    connections: ["NICK NAME", "NICK OF TIME", "KNICK KNACK", "NICKEL", "NICOLAS"]
                },
                {
                    words: ["KEEPER", "ZONE", "BOMB", "PIECE", "SHARE"],
                    answer: "TIME",
                    connections: ["TIMEKEEPER", "TIME ZONE", "TIME BOMB", "TIMEPIECE", "TIMESHARE"]
                }
            ]
        },
        {
            phrase: "IT'S RAINING CATS AND DOGS",
            throughLines: [
                {
                    words: ["BOW", "COAT", "DROP", "FOREST", "STORM"],
                    answer: "RAIN",
                    connections: ["RAINBOW", "RAINCOAT", "RAINDROP", "RAINFOREST", "RAINSTORM"]
                },
                {
                    words: ["NAP", "FISH", "WALK", "NIP", "SUIT"],
                    answer: "CAT",
                    connections: ["CATNAP", "CATFISH", "CATWALK", "CATNIP", "CATSUIT"]
                },
                {
                    words: ["HOUSE", "WOOD", "FISH", "FIGHT", "SLED"],
                    answer: "DOG",
                    connections: ["DOGHOUSE", "DOGWOOD", "DOGFISH", "DOGFIGHT", "DOG SLED"]
                }
            ]
        },
        {
            phrase: "JACK OF ALL TRADES",
            throughLines: [
                {
                    words: ["KNIFE", "POT", "RABBIT", "HAMMER", "FROST"],
                    answer: "JACK",
                    connections: ["JACKKNIFE", "JACKPOT", "JACK RABBIT", "JACKHAMMER", "JACK FROST"]
                },
                {
                    words: ["STAR", "TIME", "OUT", "CLEAR", "ROUND"],
                    answer: "ALL",
                    connections: ["ALL STAR", "ALL TIME", "ALL OUT", "ALL CLEAR", "ALL ROUND"]
                },
                {
                    words: ["MARK", "WIND", "MAN", "PEOPLE", "SHOW"],
                    answer: "TRADE",
                    connections: ["TRADEMARK", "TRADE WIND", "TRADESMAN", "TRADE PEOPLE", "TRADE SHOW"]
                }
            ]
        },
        {
            phrase: "KICK THE BUCKET",
            throughLines: [
                {
                    words: ["START", "BACK", "STAND", "BOXING", "BOXER"],
                    answer: "KICK",
                    connections: ["KICKSTART", "KICKBACK", "KICKSTAND", "KICK BOXING", "KICK BOXER"]
                },
                {
                    words: ["LIST", "SEAT", "LOAD", "SHOP", "FULL"],
                    answer: "BUCKET",
                    connections: ["BUCKET LIST", "BUCKET SEAT", "BUCKET LOAD", "BUCKET SHOP", "BUCKET FULL"]
                }
            ]
        },
        {
            phrase: "LAUGHTER IS THE BEST MEDICINE",
            throughLines: [
                {
                    words: ["TRACK", "LINES", "RIOT", "STOCK", "STOCK"],
                    answer: "LAUGH",
                    connections: ["LAUGH TRACK", "LAUGH LINES", "LAUGHING RIOT", "LAUGHING STOCK", "LAUGHING STOCK"]
                },
                {
                    words: ["SELLER", "MAN", "FRIEND", "BEFORE", "CASE"],
                    answer: "BEST",
                    connections: ["BEST SELLER", "BEST MAN", "BEST FRIEND", "BEST BEFORE", "BEST CASE"]
                },
                {
                    words: ["BALL", "CABINET", "CHEST", "MAN", "WOMAN"],
                    answer: "MEDICINE",
                    connections: ["MEDICINE BALL", "MEDICINE CABINET", "MEDICINE CHEST", "MEDICINE MAN", "MEDICINE WOMAN"]
                }
            ]
        }
    ];
