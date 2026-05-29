    // Game data - each game has multiple through lines whose answers form a phrase
    const games4 = [
        {
            phrase: "IT TAKES TWO TO TANGO",
            throughLines: [
                {
                    words: ["SELF", "TOGETHER", "TURN", "SELF", "EASY"],
                    answer: "IT",
                    connections: ["ITSELF", "IT TOGETHER", "IT'S YOUR TURN", "ITSELF", "TAKE IT EASY"]
                },
                {
                    words: ["AFTER", "LONG", "SHAPE", "CHARGE", "FIVE"],
                    answer: "TWO",
                    connections: ["TWO AFTER", "TWO LONG", "TWO SHAPE", "TWO CHARGE", "HIGH FIVE"]
                },
                {
                    words: ["NIGHT", "GETHER", "DAY", "MORROW", "WARD"],
                    answer: "TO",
                    connections: ["TONIGHT", "TOGETHER", "TODAY", "TOMORROW", "TOWARD"]
                }
            ]
        },
        {
            phrase: "JUMP ON THE BANDWAGON",
            throughLines: [
                {
                    words: ["START", "SHOT", "ROPE", "SUIT", "BALL"],
                    answer: "JUMP",
                    connections: ["JUMPSTART", "JUMP SHOT", "JUMP ROPE", "JUMP SUIT", "JUMP BALL"]
                },
                {
                    words: ["STAND", "SIDE", "BOARD", "SHORE", "LINE"],
                    answer: "BAND",
                    connections: ["BANDSTAND", "BANDSIDE", "BANDBOARD", "BANDSHORE", "BANDLINE"]
                },
                {
                    words: ["LOAD", "DRIVER", "WHEEL", "TRAIN", "HITCH"],
                    answer: "WAGON",
                    connections: ["WAGONLOAD", "WAGON DRIVER", "WAGON WHEEL", "WAGON TRAIN", "WAGON HITCH"]
                }
            ]
        },
        {
            phrase: "KNOW WHICH WAY THE WIND BLOWS",
            throughLines: [
                {
                    words: ["HOW", "LEDGE", "IT ALL", "NOTHING", "BEST"],
                    answer: "KNOW",
                    connections: ["KNOW HOW", "KNOWLEDGE", "KNOW IT ALL", "KNOW NOTHING", "KNOW BEST"]
                },
                {
                    words: ["SIDE", "OUT", "WARD", "FARER", "LAY"],
                    answer: "WAY",
                    connections: ["WAYSIDE", "WAY OUT", "WAYWARD", "WAYFARER", "WAYLAY"]
                },
                {
                    words: ["MILL", "PIPE", "SHIELD", "BREAKER", "FALL"],
                    answer: "WIND",
                    connections: ["WINDMILL", "WINDPIPE", "WINDSHIELD", "WINDBREAKER", "WINDFALL"]
                }
            ]
        },
        {
            phrase: "LEAVE NO STONE UNTURNED",
            throughLines: [
                {
                    words: ["BEHIND", "OUT", "OVER", "TAKING", "ALONE"],
                    answer: "LEAVE",
                    connections: ["LEAVE BEHIND", "LEAVE OUT", "LEAVE OVER", "LEAVE TAKING", "LEAVE ALONE"]
                },
                {
                    words: ["WHERE", "BODY", "ONE", "THING", "HOW"],
                    answer: "NO",
                    connections: ["NOWHERE", "NOBODY", "NO ONE", "NOTHING", "NO HOW"]
                },
                {
                    words: ["WALL", "COLD", "FISH", "CUTTER", "MASON"],
                    answer: "STONE",
                    connections: ["STONE WALL", "STONE COLD", "STONE FISH", "STONE CUTTER", "STONE MASON"]
                }
            ]
        },
        {
            phrase: "MONEY TALKS",
            throughLines: [
                {
                    words: ["BAG", "BACK", "BOX", "MAKER", "LENDER"],
                    answer: "MONEY",
                    connections: ["MONEYBAG", "MONEY BACK", "MONEY BOX", "MONEYMAKER", "MONEY LENDER"]
                },
                {
                    words: ["BACK", "SHOW", "ATIVE", "ING", "MAN"],
                    answer: "TALK",
                    connections: ["TALK BACK", "TALK SHOW", "TALKATIVE", "TALKING", "TALK MAN"]
                }
            ]
        },
        {
            phrase: "NO PAIN NO GAIN",
            throughLines: [
                {
                    words: ["BODY", "WHERE", "ONE", "THING", "HOW"],
                    answer: "NO",
                    connections: ["NOBODY", "NOWHERE", "NO ONE", "NOTHING", "NO HOW"]
                },
                {
                    words: ["KILLER", "STAKING", "RELIEF", "THRESHOLD", "FUL"],
                    answer: "PAIN",
                    connections: ["PAIN KILLER", "PAINSTAKING", "PAIN RELIEF", "PAIN THRESHOLD", "PAINFUL"]
                },
                {
                    words: ["SAY", "FUL", "LY", "FULLY", "SAY"],
                    answer: "GAIN",
                    connections: ["GAINSAY", "GAINFUL", "GAINLY", "GAINFULLY", "GAINSAY"]
                }
            ]
        },
        {
            phrase: "ON THE TIP OF YOUR TONGUE",
            throughLines: [
                {
                    words: ["BOARD", "LINE", "SET", "SHORE", "WARD"],
                    answer: "ON",
                    connections: ["ONBOARD", "ONLINE", "ONSET", "ONSHORE", "ONWARD"]
                },
                {
                    words: ["TOE", "TOP", "MOST", "NOTCH", "SOIL"],
                    answer: "TIP",
                    connections: ["TIP TOE", "TIP TOP", "TIP MOST", "TIP NOTCH", "TIP SOIL"]
                },
                {
                    words: ["SELF", "TUBE", "OWN", "TRULY", "MIND"],
                    answer: "YOUR",
                    connections: ["YOURSELF", "YOUTUBE", "YOUR OWN", "YOURS TRULY", "YOUR MIND"]
                },
                {
                    words: ["TIED", "LASHING", "IN CHEEK", "TWISTER", "DEPRESSED"],
                    answer: "TONGUE",
                    connections: ["TONGUE TIED", "TONGUE LASHING", "TONGUE IN CHEEK", "TONGUE TWISTER", "TONGUE DEPRESSED"]
                }
            ]
        },
        {
            phrase: "PRACTICE MAKES PERFECT",
            throughLines: [
                {
                    words: ["RUN", "MATCH", "SHOT", "ROUND", "GAME"],
                    answer: "PRACTICE",
                    connections: ["PRACTICE RUN", "PRACTICE MATCH", "PRACTICE SHOT", "PRACTICE ROUND", "PRACTICE GAME"]
                },
                {
                    words: ["SHIFT", "OVER", "UP", "DO", "BELIEVE"],
                    answer: "MAKE",
                    connections: ["MAKESHIFT", "MAKEOVER", "MAKE UP", "MAKE DO", "MAKE BELIEVE"]
                },
                {
                    words: ["LY", "TION", "IONIST", "FIT", "IONISM"],
                    answer: "PERFECT",
                    connections: ["PERFECTLY", "PERFECTION", "PERFECTIONIST", "PERFECT FIT", "PERFECTIONISM"]
                }
            ]
        },
        {
            phrase: "ROME WAS NOT BUILT IN A DAY",
            throughLines: [
                {
                    words: ["ANT", "ANCE", "AN", "O", "ISH"],
                    answer: "ROM",
                    connections: ["ROMANT", "ROMANCE", "ROMAN", "ROMEO", "ROMISH"]
                },
                {
                    words: ["HOUSE", "SMITH", "WORK", "YARD", "WORKER"],
                    answer: "BUILD",
                    connections: ["BUILD HOUSE", "BUILDSMITH", "BUILDWORK", "BUILD YARD", "BUILD WORKER"]
                },
                {
                    words: ["SIDE", "DOOR", "LOOK", "WARD", "COMING"],
                    answer: "IN",
                    connections: ["INSIDE", "INDOOR", "INLOOK", "INWARD", "INCOMING"]
                },
                {
                    words: ["BREAK", "DREAM", "LIGHT", "CARE", "TIME"],
                    answer: "DAY",
                    connections: ["DAYBREAK", "DAYDREAM", "DAYLIGHT", "DAYCARE", "DAYTIME"]
                }
            ]
        },
        {
            phrase: "STRIKE WHILE THE IRON IS HOT",
            throughLines: [
                {
                    words: ["OUT", "THROUGH", "BREAKER", "FORCE", "ZONE"],
                    answer: "STRIKE",
                    connections: ["STRIKE OUT", "STRIKE THROUGH", "STRIKEBREAKER", "STRIKE FORCE", "STRIKE ZONE"]
                },
                {
                    words: ["CLAD", "WORKS", "FIST", "MONGER", "STONE"],
                    answer: "IRON",
                    connections: ["IRONCLAD", "IRONWORKS", "IRON FIST", "IRONMONGER", "IRONSTONE"]
                },
                {
                    words: ["DOG", "BLOODED", "SHOT", "TEMPERED", "CAKE"],
                    answer: "HOT",
                    connections: ["HOT DOG", "HOT BLOODED", "HOT SHOT", "HOT TEMPERED", "HOTCAKE"]
                }
            ]
        }
    ];
