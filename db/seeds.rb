# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Profile.delete_all

demo = User.create!(
  username: 'demo-user',
  password: 'demouser'
)
u1 = User.create!(
  username: 'tia',
  password: 'tia_password'
)

u2 = User.create!(
  username: 'will_s',
  password: 'will_password'
)


p1 = Profile.create!(
  first_name: "Tia",
  zip_code: 90210,
  location: "Los Angeles, CA",
  age: 24,
  gender: 'F',
  description: "Foodie. Will swipe for dogs.",
   match_preferences: [{I am looking for..: "Men and Women"},
    {I am...: "Non-monogamous"},
    {What connections are you looking for?: "Hookups"},
     { How old should they be?: "25"}
  ],
  quiz_results: [{Dogs or cats (and do you have any)?: "no dogs but I want one!!!"}],
# {How do you feel about pineapple on pizza?: "don’t have a preference"},
# {If you were a Kardashian, which one would you be?: "kourtney"},
# {What is your astrological sign?: "pisces"},
# {What is your favorite Ariana Grande song?: "7 rings"},
# {What is your favorite Disney movie?: "tangled"},
# {What is your favorite Pokémon?: "Eevee"},
# {What is your go to cocktail?: "espresso martini"},
# {What is your ideal first date?: "anything food related"},
# {Which house would the sorting hat place you in?: "ravenclaw"},
# {Which member of BlackPink would you be?: "Jennie" }],
  user_id: u1.id,
)

p2 = Profile.create!(
  first_name: "Will",
  zip_code: 80014,
  location: "Denver, CO",
  age: 24,
  description: "Looking for life long romance. Will only respond with thumbs up reactions. Would rather be hiking.",
  gender: "M",
    match_preferences: [{I am looking for..: "Women"},
      #  {I am...: "Monogamous"},
      #  {What connections are you looking for?: "Long-term dating"},
      #  {How old should they be?: "25"}
  ],
  quiz_results: [{Dogs or cats (and do you have any)?: "dogs, just one"}],
# {How do you feel about pineapple on pizza?: "love it"},
# {If you were a Kardashian, which one would you be?: "kourtney"},
# {What is your astrological sign?: "Capricorn"},
# {What is your favorite Ariana Grande song?: "I couldn’t name one"},
# {What is your favorite Disney movie?: "Hercules"},
# {What is your favorite Pokémon?: "squirtle"},
# {What is your go to cocktail?: "anything whiskey"},
# {What is your ideal first date?: "going on a hike"},
# {Which house would the sorting hat place you in?: "gryffindor"},
# {Which member of BlackPink would you be?: "... who?" }], 
  user_id: u2.id
)

p3 = Profile.create!(
  first_name: "Demo",
  zip_code: 94107,
  location: "San Francisco, CA",
  age: 21,
  description: "Not looking for anything serious.",
  gender: "M",
    match_preferences: [{I am looking for..: "Men and Women"},
      #  {I am...: "Monogamous"},
      #  {What connections are you looking for?: "Short-term dating"},
      #  {How old should they be?: "25"}
  ],
  quiz_results: [{Dogs or cats (and do you have any)?: "dogs, nope!"}],
# {How do you feel about pineapple on pizza?: "hard pass"},
# {If you were a Kardashian, which one would you be?: "kylie"},
# {What is your astrological sign?: "virgo"},
# {What is your favorite Ariana Grande song?: "thank u next"},
# {What is your favorite Disney movie?: "the lion king"},
# {What is your favorite Pokémon?: "charmander"},
# {What is your go to cocktail?: "spicy margarita"},
# {What is your ideal first date?: "going out to dinner"},
# {Which house would the sorting hat place you in?: "slytherin or ravenclaw"},
# {Which member of BlackPink would you be?: "rose" }], 
  user_id: demo.id
)

