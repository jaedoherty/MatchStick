class Profile < ApplicationRecord
    validates :first_name, :zip_code, :description, :gender, :connection, :monogamy, :gender_search, :min_age_range, :max_age_range, :ideal_date, :kardashian, :cocktail, :pineapple, :house, :disney, :blackpink, :pets, :ariana, :pokemon,  :zodiac, presence: true
    

    belongs_to :user,
    foreign_key: :user_id, 
    class_name: :User

    has_many :likes,
    foreign_key: :liked_user_id,
    class_name: :Like

    has_many :likers,
    through: :likes,
    source: :liker
end
