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


p1 = Profile.create!(
  first_name: "Tia",
  zip_code: 90210,
  location: "Los Angeles, CA",
  age: 24,
  gender: 'woman',
  description:"Foodie. Will swipe for dogs.",
  user_id: u1.id,
  img_name: "kirby",
  connection: "New friends",
  monogamy: "Monogamous",
  gender_search: "man",
  min_age_range: 25,
  max_age_range: 30,
  ideal_date: "anything food related",
  kardashian: "kourtney",
  cocktail: "moscow mule",
  pineapple: "don’t have a preference",
  house: "ravenclaw",
  disney: "tangled",
  blackpink: "Jennie",
  pets: "I don't have a dog but I want one!!",
  ariana: "7 rings",
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
  img_name: "bowser",
  connection: "Long-term dating",
  monogamy: "Monogamous",
  gender_search: "woman",
  min_age_range: 25,
  max_age_range: 30,
  ideal_date: "going on a hike",
  kardashian: "scott",
  cocktail: "anything with whiskey",
  pineapple: "love it",
  house: "gryffindor",
  disney: "hercules",
  blackpink: "... who?",
  pets: "dogs, just one",
  ariana: "I couldn't name one",
  pokemon: "squirtle",
  zodiac: "capricorn"
)
p2 = Profile.create!(
  first_name: "Jae",
  zip_code: 94107,
  location: "San Francisco, CA",
  age: 23,
  description: "this is my site!! enjoy :)",
  gender: "woman",
  user_id: demo.id,
  img_name: "yoshi",
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
  ariana: "down",
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
  img_name: "pichu",
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
  img_name: "peach",
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
  first_name: "Cory",
  zip_code: 10001,
  location: "Worcester, MA",
  age: 23,
  description: "Hi i'm Maddie. I am a medical student that loves hiking and good IPAs.",
  gender: "woman",
  user_id: u6.id,
  img_name: "kirby",
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
  img_name: "kirby",
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

p7 = Profile.create!(
  first_name: "Izzi",
  zip_code: 10001,
  location: "New York, NY",
  age: 23,
  description: "I am going to be the CEO of Glossier someday",
  gender: "woman",
  user_id: u8.id,
  img_name: "ice_climbers",
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