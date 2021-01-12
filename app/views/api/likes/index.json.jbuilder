@likes.each do |profile|
    json.set! profile.id do
      json.extract! profile, :id, :first_name, :zip_code, :gender, :description, :match_preferences, :quiz_results, :user_id, :age, :location, :img_name  
    end
end