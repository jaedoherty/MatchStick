class ChangeProfiles < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :match_preferences
    remove_column :profiles, :quiz_results
    add_column :profiles, :connection, :string
    add_column :profiles, :monogamy, :string 
    add_column :profiles, :gender_search, :string
    add_column :profiles, :min_age_range, :integer
    add_column :profiles, :max_age_range, :integer
    add_column :profiles, :ideal_date, :text
    add_column :profiles, :kardashian, :text
    add_column :profiles, :cocktail, :text
    add_column :profiles, :pineapple, :text
    add_column :profiles, :house, :text
    add_column :profiles, :disney, :text
    add_column :profiles, :blackpink, :text
    add_column :profiles, :pets, :text
    add_column :profiles, :ariana, :text
    add_column :profiles, :pokemon, :text
    add_column :profiles, :zodiac, :text

    add_index :profiles, :connection 
    add_index :profiles, :monogamy 
    add_index :profiles, :gender_search 
    add_index :profiles, :min_age_range 
    add_index :profiles, :max_age_range
    add_index :profiles, :ideal_date
    add_index :profiles, :kardashian
    add_index :profiles, :cocktail
    add_index :profiles, :pineapple
    add_index :profiles, :house
    add_index :profiles, :disney
    add_index :profiles, :blackpink
    add_index :profiles, :pets
    add_index :profiles, :ariana
    add_index :profiles, :pokemon
    add_index :profiles, :zodiac
  end
end
