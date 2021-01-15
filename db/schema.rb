# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_01_13_230932) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.integer "liked_profile_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["liked_profile_id"], name: "index_likes_on_liked_profile_id"
    t.index ["liker_id"], name: "index_likes_on_liker_id"
  end

  create_table "profiles", force: :cascade do |t|
    t.string "first_name", null: false
    t.integer "zip_code", null: false
    t.text "description", null: false
    t.string "gender", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "age"
    t.string "location"
    t.integer "user_id"
    t.string "img_name"
    t.string "connection"
    t.string "monogamy"
    t.string "gender_search"
    t.integer "min_age_range"
    t.integer "max_age_range"
    t.text "ideal_date"
    t.text "kardashian"
    t.text "cocktail"
    t.text "pineapple"
    t.text "house"
    t.text "disney"
    t.text "blackpink"
    t.text "pets"
    t.text "ariana"
    t.text "pokemon"
    t.text "zodiac"
    t.index ["ariana"], name: "index_profiles_on_ariana"
    t.index ["blackpink"], name: "index_profiles_on_blackpink"
    t.index ["cocktail"], name: "index_profiles_on_cocktail"
    t.index ["connection"], name: "index_profiles_on_connection"
    t.index ["disney"], name: "index_profiles_on_disney"
    t.index ["first_name"], name: "index_profiles_on_first_name"
    t.index ["gender"], name: "index_profiles_on_gender"
    t.index ["gender_search"], name: "index_profiles_on_gender_search"
    t.index ["house"], name: "index_profiles_on_house"
    t.index ["ideal_date"], name: "index_profiles_on_ideal_date"
    t.index ["kardashian"], name: "index_profiles_on_kardashian"
    t.index ["max_age_range"], name: "index_profiles_on_max_age_range"
    t.index ["min_age_range"], name: "index_profiles_on_min_age_range"
    t.index ["monogamy"], name: "index_profiles_on_monogamy"
    t.index ["pets"], name: "index_profiles_on_pets"
    t.index ["pineapple"], name: "index_profiles_on_pineapple"
    t.index ["pokemon"], name: "index_profiles_on_pokemon"
    t.index ["user_id"], name: "index_profiles_on_user_id"
    t.index ["zip_code"], name: "index_profiles_on_zip_code"
    t.index ["zodiac"], name: "index_profiles_on_zodiac"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "password_digest", null: false
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
