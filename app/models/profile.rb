class Profile < ApplicationRecord
    validates :first_name, :zip_code, :description, :gender, :match_preferences, :quiz_results, presence: true

    belongs_to :user,
    foreign_key: :user_id, 
    class_name: :User
end
