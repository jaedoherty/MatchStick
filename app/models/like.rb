class Like < ApplicationRecord
    validates :liker_id, :liked_profile_id, presence: true

    belongs_to :user,
    foreign_key: :liker_id,
    class_name: :User

    belongs_to :liked_user_id,
    foreign_key: :liked_profile_id,
    class_name: :Profile
end
