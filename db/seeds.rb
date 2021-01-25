# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Profile.delete_all
Like.delete_all

demo = User.create!(
  username: 'demo-user',
  password: 'demouser'
)
u1 = User.create!(
  username: 'tia',
  password: 'password'
)

u2 = User.create!(
  username: 'will',
  password: 'password'
)

u4 = User.create!(
  username: 'caroline',
  password: 'password'
)

u5 = User.create!(
  username: 'cory',
  password: 'password'
)

u6 = User.create!(
  username: 'maddie',
  password: 'password'
)

u7 = User.create!(
  username: 'william',
  password: 'password'
)

u8 = User.create!(
  username: 'izzi',
  password: 'password'
)
u9 = User.create!(
  username: 'christian',
  password: 'password'
)
u10 = User.create!(
  username: 'mel',
  password: 'password'
)
u11 = User.create!(
  username: 'bjorn',
  password: 'password'
)
u12 = User.create!(
  username: 'ciara',
  password: 'password'
)
u13 = User.create!(
  username: 'jenny',
  password: 'password'
)
u14 = User.create!(
  username: 'justin',
  password: 'password'
)
u15 = User.create!(
  username: 'molly',
  password: 'password'
)
u16 = User.create!(
  username: 'todd',
  password: 'password'
)
u17 = User.create!(
  username: 'tessa',
  password: 'password'
)


p1 = Profile.create!(
  first_name: "Tia",
  zip_code: 90210,
  location: "Los Angeles, CA",
  age: 24,
  gender: 'woman',
  description:"Foodie. Will swipe for dogs.",
  user_id: u1.id,
  img_name: "tia",
  connection: "New friends",
  monogamy: "Monogamous",
  gender_search: "man",
  min_age_range: 25,
  max_age_range: 30,
  ideal_date: "Something competitive like mini-golf - weeds out weaklings",
  kardashian: "Khloe",
  cocktail: "Gin and soda",
  pineapple: "Yes",
  house: "Ravenclaw",
  disney: "Princess and the Frog",
  blackpink: "Jennie",
  pets: "I don't have a dog but I want one!!",
  ariana: "NASA",
  pokemon: "Eevee",
  zodiac: "pisces"
)

p2 = Profile.create!(
  first_name: "Will",
  zip_code: 80014,
  location: "Denver, CO",
  age: 24,
  description: "Looking for life long romance. Will only respond with thumbs up reactions. Would rather be hiking.",
  gender: "man",
  user_id: u2.id,
  img_name: "will",
  connection: "Long-term dating",
  monogamy: "Monogamous",
  gender_search: "woman",
  min_age_range: 25,
  max_age_range: 30,
  ideal_date: "Jazz club",
  kardashian: "Kanye",
  cocktail: "Old fashioned",
  pineapple: "BIG YES",
  house: "Gryffindor",
  disney: "Ratattouille",
  blackpink: "Don't know any of them",
  pets: "Dogs",
  ariana: "7 rings",
  pokemon: "Salamence",
  zodiac: "Capricorn"
)
p3 = Profile.create!(
  first_name: "Jae",
  zip_code: 94107,
  location: "San Francisco, CA",
  age: 23,
  description: "this is my site!! enjoy :)",
  gender: "woman",
  user_id: demo.id,
  img_name: "jae",
  connection: "Short-term dating",
  monogamy: "Monogamous",
  gender_search: "man",
  min_age_range: 25,
  max_age_range: 30,
  ideal_date: "food!!",
  kardashian: "kylie",
  cocktail: "espresso martini",
  pineapple: "could go either way to be honest",
  house: "i pretend that i'm a ravenclaw but am really a slytherin",
  disney: "princess and the frog",
  blackpink: "jennie",
  pets: "dogs!! i don't have any",
  ariana: "positions",
  pokemon: "bulbasaur",
  zodiac: "gemini"
)



p4 = Profile.create!(
  first_name: "Caroline",
  zip_code: 70115,
  location: "New Orleans, LA",
  age: 24,
  description: "Hi My name is Caroline. I know the girl who made this website she’s pretty cool (no it’s not me!) I like ariana grande, makeup, and sailor moon! I’m a cancer sun, leo moon, and leo rising. I'm down to clown!",
  gender: "woman",
  user_id: u4.id,
  img_name: "carol",
  connection: "New friends",
  monogamy: "Monogamous",
  gender_search: "man",
  min_age_range: 24,
  max_age_range: 27,
  ideal_date: "Idk somewhere in public so i know you won’t kill me but like not a movie. Something like mini golf",
  kardashian: "rob lol i don’t leave my house",
  cocktail: "vodka soda #skinny legend",
  pineapple: "Sometimes it just hits different",
  house: "i think im straight up a hufflepuff",
  disney: "Beauty and the beast",
  blackpink: "I don’t know them well enough to know. However, my fav member of one direction is either niall or harry.",
  pets: "None at the moment",
  ariana: "GOOD QUESTION. HARD QUESTION! either needy, in my head, 34+35, or just like magic",
  pokemon: "eevee and all of its evolutions except for the leaf and ice ones because they don’t look as cool",
  zodiac: "Cancer sun! Leo moon! Leo rising! let’s compare birthcharts!"
)

p5 = Profile.create!(
  first_name: "Cory",
  zip_code: 10001,
  location: "New York, NY",
  age: 23,
  description: "NYC resident who loves her dog and coffee more than most things. I often quote the Office in regular conversation.",
  gender: "woman",
  user_id: u5.id,
  img_name: "cory",
  connection: "Long-term dating",
  monogamy: "Monogamous",
  gender_search: "man",
  min_age_range: 24,
  max_age_range: 28,
  ideal_date: "Visiting a museum or exhibit with a stop afterwards at a bakery.",
  kardashian: "Kim - I'm persistent and could totally see myself going back to school one day.",
  cocktail: "Spicy margarita",
  pineapple: "Not cool, man. Not cool.",
  house: "I could fit in with all four but my gut says Gryffindor.",
  disney: "Cinderella",
  blackpink: "Jenny",
  pets: "Dogs. My family has 2 and I only wish they could live with me!",
  ariana: "Have to go with a classic - Problem.",
  pokemon: "Piplup",
  zodiac: "Libra"
)

p6 = Profile.create!(
  first_name: "Maddie",
  zip_code: 10001,
  location: "Worcester, MA",
  age: 23,
  description: "Hi i'm Maddie. I am a medical student that loves hiking and good IPAs.",
  gender: "woman",
  user_id: u6.id,
  img_name: "maddie",
  connection: "New friends",
  monogamy: "Monogamous",
  gender_search: "man",
  min_age_range: 22,
  max_age_range: 30,
  ideal_date: "I like food!.",
  kardashian: "the mom",
  cocktail: "Old fashioned",
  pineapple: "ew no thanks",
  house: "Gryffindor, with a touch of Ravenclaw!",
  disney: "Ratatouille",
  blackpink: "Cory says Lisa!",
  pets: "I have a cat and I love both",
  ariana: "Cory says dangerous woman ;)",
  pokemon: "Umbreon",
  zodiac: "cancer"
)

p7 = Profile.create!(
  first_name: "William",
  zip_code: 94030,
  location: "Bay Area, CA",
  age: 27,
  description: "My hobbies includes powerlifting, drinking scotch and learning code",
  gender: "man",
  user_id: u7.id,
  img_name: "william",
  connection: "New friends",
  monogamy: "Open to monogamy and non-monogamy",
  gender_search: "woman",
  min_age_range: 21,
  max_age_range: 30,
  ideal_date: "Netflix and chill",
  kardashian: "Kim",
  cocktail: "old fashion",
  pineapple: "i dont like it",
  house: "Gryffindor",
  disney: "Lion king",
  blackpink: "the first one",
  pets: "dogs. no",
  ariana: "IDFWU",
  pokemon: "Cyndaquil",
  zodiac: "taurus"
)

p8 = Profile.create!(
  first_name: "Izzi",
  zip_code: 10001,
  location: "New York, NY",
  age: 23,
  description: "I am going to be the CEO of Glossier someday",
  gender: "woman",
  user_id: u8.id,
  img_name: "izzi",
  connection: "New friends",
  monogamy: "Monogamous",
  gender_search: "other",
  min_age_range: 25,
  max_age_range: 30,
  ideal_date: "going out to dinner",
  kardashian: "kylie",
  cocktail: "spicy margarita",
  pineapple: "hard pass",
  house: "slytherin or ravenclaw",
  disney: "the lion king",
  blackpink: "rose",
  pets: "dogs, just one",
  ariana: "thank u next",
  pokemon: "charmander",
  zodiac: "virgo"
)

p9 = Profile.create!(
  first_name: "Christian",
  zip_code: 70118,
  location: "New Orleans, LA",
  age: 24,
  description: "24 yr old law student from Boston living in New Orleans, love Buffalo chicked subs, and looking to meet Mrs.Right",
  gender: "man",
  user_id: u9.id,
  img_name: "christian",
  connection: "New friends",
  monogamy: "Monogamous",
  gender_search: "woman",
  min_age_range: 24,
  max_age_range: 30,
  ideal_date: "A day outside",
  kardashian: "Kim",
  cocktail: "Dark and stormy",
  pineapple: "Allowed but not encouraged",
  house: "Slytherin",
  disney: "Finding Nemo",
  blackpink: "No clue what Blackpink is",
  pets: "1 cat 1 dog",
  ariana: "The song with Mac Miller",
  pokemon: "Totadile",
  zodiac: "Libra"
)

p10 = Profile.create!(
  first_name: "Mel",
  zip_code: 94116,
  location: "San Francisco, CA",
  age: 24,
  description: "future doctor and crafting queen",
  gender: "woman",
  user_id: u10.id,
  img_name: "mel",
  connection: "New friends",
  monogamy: "Monogamous",
  gender_search: "man",
  min_age_range: 23,
  max_age_range: 26,
  ideal_date: "Arcade",
  kardashian: "Kendall",
  cocktail: "Mimosa",
  pineapple: "No",
  house: "Hufflepuff",
  disney: "Bridge to Terabithia (og was Sleeping Beauty)",
  blackpink: "Lisa",
  pets: "Dogs, no",
  ariana: "34+35",
  pokemon: "Eevee",
  zodiac: "Capricorn"
)

p11 = Profile.create!(
  first_name: "Bjorn",
  zip_code: 94132,
  location: "San Francisco, CA",
  age: 23,
  description: "Everyone's favorite finance bro",
  gender: "man",
  user_id: u11.id,
  img_name: "bjorn",
  connection: "Hookups",
  monogamy: "Monogamous",
  gender_search: "woman",
  min_age_range: 23,
  max_age_range: 26,
  ideal_date: "Dinner",
  kardashian: "Kylie",
  cocktail: "Moscow mule",
  pineapple: "Yes!",
  house: "Hufflepuff",
  disney: "Lion King",
  blackpink: "Idk lol I guess Rose",
  pets: "Dogs, I do",
  ariana: "Boyfriend",
  pokemon: "Squirtle",
  zodiac: "Gemini"
)

p12 = Profile.create!(
  first_name: "Ciara",
  zip_code: 53354,
  location: "Dublin, IE",
  age: 24,
  description: "Black never goes out of style. SF -> IE",
  gender: "woman",
  user_id: u12.id,
  img_name: "ciara",
  connection: "Short-term dating",
  monogamy: "Monogamous",
  gender_search: "other",
  min_age_range: 23,
  max_age_range: 30,
  ideal_date: "Scuba diving then bottomless brunch",
  kardashian: "Khloe",
  cocktail: "Gin and tonic",
  pineapple: "LOVE",
  house: "I did it slytherin",
  disney: "Mulan",
  blackpink: "Idk anyone in that band",
  pets: "One doggo",
  ariana: "break up with your girlfriend",
  pokemon: "Charmander",
  zodiac: "Gemini"
)

p13 = Profile.create!(
  first_name: "Jenny",
  zip_code: 77002,
  location: "Houston, TX",
  age: 24,
  description: "Ginger. Math, milk, & smoking",
  gender: "woman",
  user_id: u13.id,
  img_name: "jenny",
  connection: "Short-term dating",
  monogamy: "Monogamous",
  gender_search: "man",
  min_age_range: 23,
  max_age_range: 30,
  ideal_date: "Dinner/drinks",
  kardashian: "Kendall",
  cocktail: "Vodka cran",
  pineapple: "Ew",
  house: "No idea - Hufflepuff?",
  disney: "Lion king",
  blackpink: "what is that",
  pets: "no",
  ariana: "problem",
  pokemon: "Clefairy",
  zodiac: "Aries"
)

p14 = Profile.create!(
  first_name: "Justin",
  zip_code: 92037,
  location: "San Diego, CA",
  age: 24,
  description: "soccer, snowboard, scuba, travel, beach volleyball, San Diego, burritos",
  gender: "man",
  user_id: u14.id,
  img_name: "justin",
  connection: "Long-term dating",
  monogamy: "Monogamous",
  gender_search: "woman",
  min_age_range: 22,
  max_age_range: 30,
  ideal_date: "Scuba dive then brunch (I did copy Ciara)",
  kardashian: "Kendall",
  cocktail: "Shot of Tito's and chase with a ginger beer",
  pineapple: "Thumbs up",
  house: "Hufflepuff",
  disney: "Up (Pixar is now part of Disney, right?",
  blackpink: "who is that",
  pets: "Dogs, parents have a golden retriever",
  ariana: "couldn't name one",
  pokemon: "Snorlax",
  zodiac: "Gemini"
)

p15 = Profile.create!(
  first_name: "Molly",
  zip_code: 98101,
  location: "Seattle, WA",
  age: 25,
  description: "Not to be truffled with. She/hers",
  gender: "woman",
  user_id: u15.id,
  img_name: "molly",
  connection: "Long-term dating",
  monogamy: "Monogamous",
  gender_search: "woman",
  min_age_range: 22,
  max_age_range: 30,
  ideal_date: "Bar w/ live music",
  kardashian: "I don't like any of them but I'd have to pick Kendall as the least problematic",
  cocktail: "Mojito",
  pineapple: "I like it but don't love it",
  house: "Slytherin",
  disney: "Tarzan",
  blackpink: "??",
  pets: "Equally love cats/dogs",
  ariana: "break up with your girlfriend, i'm bored",
  pokemon: "Snorlax",
  zodiac: "Aquarius"
)

p16 = Profile.create!(
  first_name: "Todd",
  zip_code: 90210,
  location: "Los Angeles, CA",
  age: 24,
  description: "Entrepreneur, skater, dog da. Skinnythicc",
  gender: "man",
  user_id: u16.id,
  img_name: "todd",
  connection: "Long-term dating",
  monogamy: "Monogamous",
  gender_search: "woman",
  min_age_range: 24,
  max_age_range: 30,
  ideal_date: "McDonalds",
  kardashian: "Kanye",
  cocktail: "Whiskey",
  pineapple: "Best pizza ever",
  house: "Gryffindor",
  disney: "High School Musical",
  blackpink: "Dua Lipa",
  pets: "1 lizard",
  ariana: "7 rings",
  pokemon: "Squirtle",
  zodiac: "Pisces"
)

p17 = Profile.create!(
  first_name: "Tessa",
  zip_code: 90210,
  location: "Los Angeles, CA",
  age: 24,
  description: "Falls in love easy and out of love easier",
  gender: "woman",
  user_id: u17.id,
  img_name: "tessa",
  connection: "Short-term dating",
  monogamy: "Monogamous",
  gender_search: "man",
  min_age_range: 24,
  max_age_range: 30,
  ideal_date: "Picnic",
  kardashian: "North",
  cocktail: "Cosmo",
  pineapple: "Not mad about it",
  house: "Gryffindor",
  disney: "Hannah Montana the Movie",
  blackpink: "Rose",
  pets: "dogs and 1",
  ariana: "Honeymoon Avenue",
  pokemon: "Jiggly Puff",
  zodiac: "Virgo"
)