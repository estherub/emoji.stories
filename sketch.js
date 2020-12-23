const EMOJIS = {
  '1': ['happy', 'smile', 'smiled', 'smiling', 'happiness'],
  '2': ['laugh', 'laughing', 'laughed', 'funny'],
  '3': ['hilarious', 'laughable', 'haha'],
  '4': ['fine', 'well', 'nice'],
  '5': ['flirt', 'flirty', 'flirted', 'flirting', 'wink', 'winked'],
  '6': ['angel', 'angelic', 'angelina', 'saint'],
  '7': ['kiss', 'kissed', 'kisses', 'smooch'],
  '8': ['crazy', 'cuckoo', 'cray', 'silly'],
  '9': ['hug', 'hugged'],
  '10': ['oops', 'oopsie', 'blush', 'blushed', 'embarrassing', 'embarrass', 'embarrassed', 'whoops'],
  '11': ['what', 'who', 'why', 'when', 'where', 'does','something'],
  '12': ['liar', 'lied', 'lie'],
  '13': ['sad', 'dissapointed', 'depression', 'depressed', 'lonely', 'unhappy', 'dissapointing'],
  '14': ['drool', 'drooling', 'drooled', 'yummy', 'dumb', 'stupid', 'dumbass'],
  '15': ['tired', 'sleepy', 'sleep', 'sleeping', 'slept', 'tiring', 'tiresome'],
  '16': ['sick', 'ill', 'disgusting', 'gross', 'yuck', 'yucky', 'nausea', 'nauseous'],
  '17': ['puke', 'puked', 'vomit', 'vomited'],
  '18': ['freezing', 'cold', 'frozen', 'freeze'],
  '19': ['surprise', 'surprised', 'shock', 'shocked', 'shocking'],
  '20': ['worry', 'worried', 'worrysome', 'scared', 'afraid', 'scare'],
  '21': ['crying', 'cryed', 'cry', 'tears', 'devastated', 'devastating', 'tear'],
  '22': ['anger', 'angry', 'furious', 'annoying', 'annoyed', 'hate', 'hates', 'hating'],
  '23': ['skull', 'death', 'dead', 'die', 'dying', 'grave', 'bones', 'bone'],
  '24': ['poop', 's***', 'feces', 'poo', 'dung'],
  '25': ['clown', 'creepy', 'creep'],
  '26': ['devil', 'hell', 'demon', 'demonic'],
  '27': ['ghost', 'halloween', 'snapchat', 'scary'],
  '28': ['alien', 'outsider'],
  '29': ['robot', 'machine', 'robotic'],
  '30': ['love', 'heart', 'dear', 'lovely', 'hearts', 'loved', 'loving', 'adore'],
  '31': ['hearbreak', 'broken', 'breakup', 'hurt', 'hurting', 'heartbroken'],
  '32': ['hundred', 'perfect'],
  '33': ['blast', 'blasted', 'blasting', 'exploded', 'explode', 'explosion','accidentally','accident'],
  '34': ['drop', 'drops', 'dropped', 'cum', 'came'],
  '35': ['fart', 'wind', 'blow', 'blew', 'farted', 'air'],
  '36': ['hole'],
  '37': ['bomb', 'bombed', 'bombing'],
  '38': ['say', 'said', 'saying', 'tell', 'told', 'telling', 'type', 'typed', 'typing', 'speak', 'spoke', 'speaking', 'talk', 'talking', 'talked', 'spoken', 'ask', 'asking', 'asked'],
  '39': ['think', 'thought', 'thinking', 'wonder', 'wondered', 'wondering'],
  '40': ['hello', 'hi', 'bye', 'wave', 'waved', 'waving', 'goodbye', 'hey'],
  '41': ['hand', 'stop', 'fingers', 'palm'],
  '42': ['okay', 'ok', 'sure', 'good', 'great'],
  '43': ['tiny', 'small', 'petite', 'little', 'bit'],
  '44': ['wait'],
  '45': ['peace', 'victory'],
  '46': ['up', 'upwards'],
  '47': ['f***', 'f******', 'motherfuker'],
  '48': ['down', 'downward'],
  '49': ['bad', 'suck', 'sucks', 'sucked', 'boo'],
  '50': ['fist', 'fight', 'attack', 'attacking'],
  '51': ['clap', 'clapping', 'applaud', 'applauding'],
  '52': ['hands', 'palms'],
  '53': ['please', 'thanks', 'thank', 'thanking', 'thanked', 'preach', 'pray', 'praying', 'prayed', 'beg', 'begged', 'begging'],
  '54': ['write', 'wrote', 'writing', 'written'],
  '55': ['manicure', 'gel', 'nails', 'polish', 'nail', 'cosmetic', 'neat', 'girly'],
  '56': ['selfie', 'selfies', 'selfish'],
  '57': ['byceps', 'strong', 'fit', 'bodybuilder', 'bodybuilding', 'muscle', 'muscles', 'muscular', 'fitness', 'workout'],
  '58': ['leg', 'legs'],
  '59': ['foot', 'feet', 'steps', 'stepped', 'stepping'],
  '60': ['hear', 'ear', 'ears', 'heard', 'hearing', 'listen', 'listened', 'listening', 'eavesdropping', 'eavesdropped', 'deaf'],
  '61': ['nose', 'noses', 'nosy', 'smell', 'smelly', 'smells', 'smelled'],
  '62': ['brain', 'smart', 'clever', 'inteligent', 'brainy', 'genius', 'intelectual'],
  '63': ['tooth', 'teeth', 'teething'],
  '64': ['look', 'looked', 'saw', 'see', 'seeing', 'sees', 'looking', 'eyes','notice','noticed'],
  '65': ['eye', 'i'],
  '66': ['tongue'],
  '67': ['lips', 'mouth', 'lip'],
  '68': ['baby', 'newborn', 'babies', 'child', 'kid'],
  '69': ['boy', 'boys'],
  '70': ['girl', 'girls'],
  '71': ['man', 'guy', 'person', 'men', 'guys', 'boyfriend', 'friend', 'stranger', 'husband'],
  '72': ['woman', 'women', 'girlfriend'],
  '73': ['grandma', 'grandmother', 'granny', 'lady', 'nanna'],
  '74': ['old', 'grandpa', 'grandfather', 'gentleman'],
  '75': ['no', 'not', 'never', 'niether', 'either', 'dont', 'didnt', 'doesnt'],
  '76': ['doctor', 'surgeon', 'doctors', 'doc'],
  '77': ['student', 'graduate', 'graduated', 'students'],
  '78': ['teacher', 'teaching', 'taught', 'teachers', 'professor', 'professors', 'class', 'classes'],
  '79': ['judge', 'law', 'court'],
  '80': ['farmer', 'worker', 'farming', 'farmers'],
  '81': ['chef', 'cook', 'cooking', 'cooks'],
  '82': ['mechanic', 'handyman', 'handy', 'fix', 'fixing', 'fixed'],
  '83': ['scientist', 'experiment'],
  '84': ['designer', 'work'],
  '85': ['queen', 'princess', 'queens', 'royal'],
  '86': ['king', 'prince', 'kings', 'princes'],
  '87': ['muslim', 'muslims'],
  '88': ['bride', 'veil', 'wife', 'wives'],
  '89': ['pregnant', 'mom', 'mother', 'mama', 'mothers', 'moms'],
  '90': ['dad', 'father', 'daddy', 'fathers', 'pappa'],
  '91': ['santa', 'claus'],
  '92': ['fairy'],
  '93': ['zombie', 'zombies'],
  '94': ['massage', 'head', 'headache', 'heads'],
  '95': ['go', 'went', 'walk', 'walking', 'walked'],
  '96': ['hair', 'haircut', 'barber'],
  '97': ['run', 'running', 'ran', 'runs'],
  '98': ['calm', 'meditate', 'meditation', 'calms', 'calming', 'chill'],
  '99': ['dance', 'dancing', 'danced'],
  '100': ['shower', 'bath', 'bathing'],
  '101': ['bed'],
  '102': ['you', 'they', 'them', 'he', 'him', 'she', 'her', 'there'],
  '103': ['couple', 'couples', 'two', 'interracial', 'double'],
  '104': ['lesbian', 'lesbians', 'girlfriends'],
  '105': ['gay', 'gays'],
  '106': ['family', 'together'],
  '107': ['monkey', 'monkeys'],
  '108': ['dog', 'dogs', 'doggie', 'pet'],
  '109': ['cat', 'cats', 'kitty', 'kitties'],
  '110': ['tiger', 'tigers'],
  '111': ['horse', 'horses'],
  '112': ['zebra', 'zebras', 'stripes'],
  '113': ['cow', 'cows'],
  '114': ['unicorn', 'unicorns', 'unreal', 'magical'],
  '115': ['giraffe', 'giraffes'],
  '116': ['elephant', 'elephants'],
  '117': ['mouse', 'mice', 'pest', 'pests'],
  '118': ['chicken', 'chickens', 'hen', 'hens', 'rooster', 'roosters', 'bird'],
  '119': ['fish'],
  '120': ['coronavirus', 'corona', 'virus', 'viruses', 'pandemic'],
  '121': ['flower', 'flowers'],
  '122': ['tree', 'trees'],
  '123': ['banana', 'bananas'],
  '124': ['apple', 'apples'],
  '125': ['ass', 'peach', 'peaches', 'butt', 'cheeks'],
  '126': ['eggplant', 'eggplants', 'penis', 'dick', 'cock'],
  '127': ['hamburger', 'hamburgers', 'burger', 'food', 'hungry', 'meal', 'lunch', 'dinner', 'hunger', 'starving', 'starved'],
  '128': ['chips', 'fries'],
  '129': ['pizza', 'pizzas'],
  '130': ['sandwich', 'sandwiches'],
  '131': ['egg', 'eggs'],
  '132': ['pasta', 'spagetti'],
  '133': ['sushi'],
  '134': ['icecream'],
  '135': ['lolipop', 'lollipop', 'candy', 'sweet'],
  '136': ['chocolate', 'chocolates'],
  '137': ['donut', 'donuts'],
  '138': ['cake', 'cakes', 'dessert', 'sweet'],
  '139': ['coffee', 'coffees', 'caffeine'],
  '140': ['milk', 'water'],
  '141': ['drink', 'drinks', 'drinking', 'drank', 'drunk', 'alcohol', 'alcoholic', 'alcoholism'],
  '142': ['cheers', 'beer'],
  '143': ['knife', 'knives', 'kill', 'killed', 'killing', 'cut', 'cutting', 'cuts'],
  '144': ['world', 'earth', 'globe', 'global', 'globalization'],
  '145': ['mountain', 'mountains'],
  '146': ['beach', 'island', 'vacation'],
  '147': ['home', 'house', 'homes', 'houses'],
  '148': ['hospital', 'hospitals', 'medic'],
  '149': ['hotel', 'hotels', 'motel', 'hostel'],
  '150': ['castle', 'castles'],
  '151': ['church', 'churches'],
  '152': ['synagogue', 'sheul', 'temple'],
  '153': ['mosque', 'mosques'],
  '154': ['tent', 'tents', 'camping', 'camp', 'campyard'],
  '155': ['sunrise'],
  '156': ['ferris', 'amusement'],
  '157': ['train', 'trains'],
  '158': ['taxi', 'cab', 'taxis', 'cabs'],
  '159': ['car', 'cars', 'uber', 'drive', 'drove', 'driving'],
  '160': ['bus', 'buses'],
  '161': ['ambulance', 'ambulances'],
  '162': ['police', 'cops'],
  '163': ['bike', 'bikes', 'biked', 'biking', 'bicycle'],
  '164': ['wheelchair', 'handycapped'],
  '165': ['airplane', 'plane', 'planes', 'travel', 'traveling', 'traveled', 'traveler'],
  '166': ['ship', 'ships', 'cruise'],
  '167': ['clock', 'time', 'alarm', 'times'],
  '168': ['luggage', 'suitcase', 'case'],
  '169': ['moon', 'moons', 'night'],
  '170': ['sun', 'morning', 'day', 'sunny', 'summer'],
  '171': ['rain', 'rainy', 'raining'],
  '172': ['rainbow', 'rainbows'],
  '173': ['umbrella', 'umbrellas'],
  '174': ['fire', 'fires', 'fired', 'firing'],
  '175': ['snowman', 'snowmen', 'winter'],
  '176': ['sea', 'ocean'],
  '177': ['christmas', 'festive', 'holiday'],
  '178': ['baloon', 'baloons'],
  '179': ['party', 'congrats', 'congratulations'],
  '180': ['gift', 'gifts', 'present', 'presents'],
  '181': ['champion', 'trophy', 'win', 'won', 'winner'],
  '182': ['ball', 'balls', 'soccer', 'football', 'game'],
  '183': ['fortune', 'future'],
  '184': ['luck', 'lucky', 'casino', 'gambling', 'gamble'],
  '185': ['picture', 'art', 'photo', 'frame', 'painting'],
  '186': ['glasses'],
  '187': ['dress', 'dressed', 'dressing', 'dresses'],
  '188': ['shoe', 'shoes'],
  '189': ['clothes', 'clothing'],
  '190': ['ring', 'diamond', 'engaged', 'engagement', 'propose', 'proposed', 'proposing', 'proposal'],
  '191': ['music', 'guitar', 'instrument', 'musician'],
  '192': ['laptop', 'computer', 'macbook', 'netflix'],
  '193': ['camera', 'cameras'],
  '194': ['bulb', 'light', 'lamp', 'idea', 'ideas', 'lit'],
  '195': ['book', 'books', 'read', 'reading', 'reads', 'author'],
  '196': ['tv', 'television'],
  '197': ['money', 'cash', 'dollars', 'rich', 'expensive', 'bank'],
  '198': ['pencil', 'draw'],
  '199': ['key', 'keys', 'keying'],
  '200': ['gun', 'shoot', 'shot', 'pistol', 'armed', 'weapon'],
  '201': ['blood'],
  '202': ['pill', 'pills', 'drug', 'drugs', 'medicine'],
  '203': ['toilet', 'restroom', 'washroom', 'bathroom'],
  '204': ['door', 'doors', 'room'],
  '205': ['job', 'lawyer', 'appropriate', 'business'],
  '206': ['sing', 'musical', 'singer', 'singing', 'song', 'sang', 'artist', 'show', 'concert'],
  '207': ['alone', 'myself', 'sit', 'sitting', 'sat'],
  '208': ['play', 'juggle', 'juggling', 'juggles', 'performer', 'performance', 'perform', 'playing', 'played', 'player'],
  '209': ['people', 'humans', 'everyone', 'everybody', 'friends', 'friend'],
  '210': ['snake'],
  '211': ['spider'],
  '212': ['grow', 'growing', 'grew', 'grown', 'planet', 'life'],
  '213': ['healthy', 'vegetables', 'veggies', 'salad', 'vegan', 'vegetable'],
  '214': ['movie', 'drama', 'popcorn', 'movies', 'theatre', 'snack', 'snacks', 'snacking', 'snacked'],
  '215': ['salt', 'salty', 'tasteless', 'taste', 'season', 'seasoning'],
  '216': ['toy', 'toys', 'teddy', 'bear', 'childhood'],
  '217': ['yesterday', 'back', 'before', 'then', 'ago', 'was', 'were', 'left'],
  '218': ['today', 'now', 'this'],
  '219': ['tomorrow', 'will', 'would', 'could', 'right'],
  '220': ['and', 'plus', 'more', 'advantage', 'advantages', 'pluses'],
  '221': ['yes', 'approve', 'approved', 'pass'],
  '222': ['less', 'minus'],
  '223': ['me', 'my', 'mine', 'own'],
  '224': ['need', 'needs', 'want', 'wants', 'wanting', 'wanted', 'needing', 'needed'],
  '225': ['big', 'huge', 'large', 'much', 'many', 'forever'],
  '226': ['give', 'gave', 'giving', 'giver', 'given'],
  '227': ['send', 'sent', 'sending', 'mail', 'email', 'mailing', 'mailed'],
  '228': ['card', 'credit', 'swipe', 'swiped', 'swiping'],
  '229': ['start', 'started', 'starting', 'starts'],
  '230': ['end', 'ending', 'ended', 'ends'],
  '231': ['change', 'changed', 'changing', 'changes'],
  '232': ['danger', 'dangerous', 'caution', 'beware', 'cautionary'],
  '233': ['town', 'city', 'skyline'],
  '234': ['life', 'live', 'lived', 'living', 'lives'],
  '235': ['call', 'called', 'phone', 'phoned', 'calling'],
  '236': ['ex'],
  '237': ['another']
  


}

const LOADED_IMAGE = {}

var HAS_TALKED = false

var myRec = new p5.SpeechRec('en-US'); // new P5.SpeechRec object
var myVoice = new p5.Speech(); // new P5.Speech object
var imagex = 100;
var imagey = 200;
var spacing = 60
var x = 100
var y = 0


myRec.continuous = true; // do continuous recognition
//myRec.interimResults = true; // allow partial recognition (faster, less accurate)


function preload() {
  for (let i = 1; i <= 237; i++) {
    LOADED_IMAGE[`${i}`] = loadImage(`assets/${i}.png`)
  }
  wow = loadImage('assets/wow.png');
}

function setup() {
  // graphics stuff:
  createCanvas(displayWidth, displayHeight);
  background(143, 0, 255);
  image(wow, 50, 40, 327, 67);
  fill(255, 194, 0, 255);
  // instructions:
  textSize(32);
  textAlign(CENTER);
  text("start speaking", width / 2, height / 2 - 50);
  myRec.onResult = showResult;
  myRec.start();


  // myVoice.speak("say something");

}

function draw() {
  // why draw when you can talk?
}

function showResult() {
  if (myRec.resultValue === true) {

    if (HAS_TALKED == false) {
      createCanvas(displayWidth, displayHeight);
      background(143, 0, 255);
      image(wow, 50, 40, 327, 67);
      HAS_TALKED = true
    }
    //text(myRec.resultString, width / 2, height / 2);

    //  myVoice.interrupt = checkbox.elt.checked;
    // myVoice.speak(myRec.resultString); // debug printer for voice options
    console.log(myRec.resultString);

    var splittedText = split(myRec.resultString.toLowerCase(), " ");
    // For each word in the sentence
    splittedText.map(substring => {
      // for each emoji in EMOJIS
      Object.keys(EMOJIS).map(emoji => {
        if (EMOJIS[emoji].includes(substring)) {
          image(LOADED_IMAGE[emoji], imagex, imagey, 50, 50)
          imagex = imagex + 70
          if (imagex > width - 100) {
            imagex = 100;
            imagey = imagey + spacing;
          }
        }
      })
    })
  }






}