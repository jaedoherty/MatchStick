@likes.each do |profile|
    json.set! profile.id do
      json.extract! profile, :id, :first_name, :zip_code, :gender, :description, :age, :location, :img_name, :user_id, 
:connection, :monogamy, :gender_search, :min_age_range, :max_age_range, :ideal_date, :kardashian, :cocktail, :pineapple, :house, :disney, :blackpink, :pets, :ariana, :pokemon,  :zodiac
    end
end