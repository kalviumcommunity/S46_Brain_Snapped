const snappedData = [
    {
        id: 11,
        userName: "Katie",
        randomThing: "Telling yourself you'll remember something without writing it down, and then forgetting it."
    },
    {
        id: 12,
        userName: "Liam",
        randomThing: "Laughing at your own jokes, even if nobody else finds them funny."
    },
    {
        id: 13,
        userName: "Megan",
        randomThing: "Forgetting why you walked into a room, then remembering when you walk back out."
    },
    {
        id: 14,
        userName: "Nathan",
        randomThing: "Singing along to songs in a language you don't understand, making up your own lyrics."
    },
    {
        id: 15,
        userName: "Olivia",
        randomThing: "Putting something in a 'safe place' and then forgetting where that place is."
    },
    {
        id: 16,
        userName: "Peter",
        randomThing: "Waving back at someone who wasn't actually waving at you."
    },
    {
        id: 17,
        userName: "Quinn",
        randomThing: "Talking to pets as if they understand everything you say."
    },
    {
        id: 18,
        userName: "Rachel",
        randomThing: "Trying to balance the light switches so they're all in the middle."
    },
    {
        id: 19,
        userName: "Sam",
        randomThing: "Getting excited about plans, then finding any excuse to cancel them."
    },
    {
        id: 20,
        userName: "Tyler",
        randomThing: "Waking up in the middle of the night and checking your phone for no reason."
    },
    {
        id: 21,
        userName: "Ursula",
        randomThing: "Laughing at a text message you received hours ago, as if it's brand new."
    },
    {
        id: 22,
        userName: "Victor",
        randomThing: "Trying to discreetly sniff yourself to check if you need deodorant."
    },
    {
        id: 23,
        userName: "Wendy",
        randomThing: "Using 'Google' as a verb for searching, regardless of the search engine you're actually using."
    },
    {
        id: 24,
        userName: "Xander",
        randomThing: "Making sound effects for everyday actions, like 'whoosh' when opening a door."
    },
    {
        id: 25,
        userName: "Yvonne",
        randomThing: "Pretending to understand a joke you didn't hear, just to fit in with the laughter."
    },
    {
        id: 26,
        userName: "Zack",
        randomThing: "Checking the time on your phone, then realizing you didn't actually look at the clock."
    },
    {
        id: 27,
        userName: "Alice",
        randomThing: "Reading the shampoo bottle in the shower out of sheer boredom."
    },
    {
        id: 28,
        userName: "Bob",
        randomThing: "Trying to quiet down noisy snacks as if they can hear you."
    },
    {
        id: 29,
        userName: "Charlie",
        randomThing: "Having a full conversation with someone in your head and then realizing you never said a word out loud."
    },
    {
        id: 30,
        userName: "David",
        randomThing: "Waving at someone on a video call and then feeling silly when they don't see you."
    },
    {
        id: 31,
        userName: "Emily",
        randomThing: "Trying to convince yourself ketchup is a vegetable to meet your dietary needs."
      },
      {
        id: 32,
        userName: "Finn",
        randomThing: "Accidentally using a baby wipe instead of toilet paper, then trying to play it cool."
      },
      {
        id: 33,
        userName: "Grace",
        randomThing: "Arguing with a fictional character in a movie or show as if they can hear you."
      },
      {
        id: 34,
        userName: "Henry",
        randomThing: "Debating the pronunciation of a word in your head, even though no one is around."
      },
      {
        id: 35,
        userName: "Isabella",
        randomThing: "Spending way too much time trying to find the perfect GIF to express your emotions."
      },
      {
        id: 36,
        userName: "Jack",
        randomThing: "Checking your phone repeatedly, even though you know there are no notifications."
      },
      {
        id: 37,
        userName: "Jacob",
        randomThing: "Trying to catch a fly with your bare hands, pretending you're on a thrilling insect safari."
      },
      {
        id: 38,
        userName: "Jennifer",
        randomThing: "Singing along to a song in public, only to realize you've been singing the wrong lyrics the whole time."
      },
      {
        id: 39,
        userName: "Jessica",
        randomThing: "Pretending to be fluent in a language you barely know, using confident hand gestures to compensate."
      },
      {
        id: 40,
        userName: "Joseph",
        randomThing: "Calculating how much money you'd have if you never bought coffee (spoiler alert: it's probably a lot)."
      },
      {
        id: 41,
        userName: "Lily",
        randomThing: "Convincing yourself you can multitask by watching TV and folding laundry, then ending up with neither done well."
      },
      {
        id: 42,
        userName: "William",
        randomThing: "Trying to impress someone by doing a magic trick, only to accidentally make something disappear forever."
      },
      {
        id: 43,
        userName: "Liam (2)", // Duplicate username avoided
        randomThing: "Spending five minutes untangling your headphones, even though you know the solution is to just not twist them in the first place."
      },
      {
        id: 44,
        userName: "Madison",
        randomThing: "Debating with yourself whether or not to eat the last slice of cake, knowing you'll probably regret it later."
      },
      {
        id: 45,
        userName: "Mason",
        randomThing: "Trying to remember the name of that actor you saw in that one movie, even though it's on the tip of your tongue."
      },
      {
        id: 46,
        userName: "Michael",
        randomThing: "Walking into a room and completely forgetting why you were there, then awkwardly backing out."
      },
      {
        id: 47,
        userName: "Noah",
        randomThing: "Arguing with autocorrect, even though you know it will never win."
      },
      {
        id: 48,
        userName: "Olivia (2)", // Duplicate username avoided
        randomThing: "Trying to look busy at work while secretly scrolling through social media."
      },
      {
        id: 49,
        userName: "Sophia",
        randomThing: "Pretending to know how to play an instrument by just pressing random keys."
      },
      {
        id: 50,
        userName: "Sophia (2)", // Duplicate username avoided, ensuring unique names
        randomThing: "Talking to your houseplants as if they're your best friends, hoping they'll reward you with faster growth."
      },
      {
        id: 31,
        userName: "Emily",
        randomThing: "Trying out new recipes and experimenting with different ingredients."
      },
      {
        id: 32,
        userName: "Finn",
        randomThing: "Organizing your belongings and decluttering your space."
      },
      {
        id: 33,
        userName: "Grace",
        randomThing: "Learning about different cultures and perspectives."
      },
      {
        id: 34,
        userName: "Henry",
        randomThing: "Practicing different accents or languages for fun."
      },
      {
        id: 35,
        userName: "Isabella",
        randomThing: "Researching interesting topics and expanding your knowledge."
      },
      {
        id: 36,
        userName: "Jack",
        randomThing: "Taking a break from your phone and enjoying the moment."
      },
      {
        id: 37,
        userName: "Jacob",
        randomThing: "Observing nature and appreciating the beauty around you."
      },
      {
        id: 38,
        userName: "Jennifer",
        randomThing: "Singing along to your favorite music, even if you're not in public."
      },
      {
        id: 39,
        userName: "Jessica",
        randomThing: "Trying new hobbies and activities to discover your hidden talents."
      },
      {
        id: 40,
        userName: "Joseph",
        randomThing: "Creating a budget and planning your finances wisely."
      },
      {
        id: 41,
        userName: "Lily",
        randomThing: "Focusing on one task at a time and completing it thoroughly."
      },
      {
        id: 42,
        userName: "William",
        randomThing: "Learning a new skill through books, online courses, or videos."
      },
      {
        id: 43,
        userName: "Liam (2)", // Duplicate username avoided
        randomThing: "Taking care of your belongings to avoid needing to replace them often."
      },
      {
        id: 44,
        userName: "Madison",
        randomThing: "Making a list of your goals and working towards achieving them."
      },
      {
        id: 45,
        userName: "Mason",
        randomThing: "Reading books or listening to podcasts to learn new things."
      },
      {
        id: 46,
        userName: "Michael",
        randomThing: "Taking a moment to reflect on your day and appreciate positive moments."
      },
      {
        id: 47,
        userName: "Noah",
        randomThing: "Practicing good communication skills to avoid misunderstandings."
      },
      {
        id: 48,
        userName: "Olivia (2)", // Duplicate username avoided
        randomThing: "Staying focused on your tasks and avoiding distractions."
      },
      {
        id: 49,
        userName: "Sophia",
        randomThing: "Exploring new places and learning about different cultures."
      },
      {
        id: 49,
        userName: "Sophia (2)", // Duplicate username avoided, ensuring unique names
        randomThing: "Volunteering your time and helping others in your community."
      },
    // Add more random things here
];

export default snappedData;
