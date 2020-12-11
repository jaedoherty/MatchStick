class Profile < ApplicationRecord
    validates :first_name, :zip_code, :description, :gender, :match_preferences, :quiz_results, presence: true
    # validates :gender, inclusion: {in : ['M', 'F', 'other']}

    belongs_to :user,
    foreign_key: :user_id, 
    class_name: :User

end
