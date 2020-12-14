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
  match_preferences: ["hook up", "M or F"],
  quiz_results: ["Pisces"],
  user_id: u1.id,
)

p2 = Profile.create!(
  first_name: "Will",
  zip_code: 80014,
  location: "Denver, CO",
  age: 24,
  description: "Looking for life long romance. Will only respond with thumbs up reactions. Would rather be hiking.",
  gender: "M",
  match_preferences: ["long-term relationship", "F"],
  quiz_results: ["Capricorn"], 
  user_id: u2.id
)

