class RemoveAlreadyLikedFromLikes < ActiveRecord::Migration[5.2]
  def change
    remove_column :likes, :already_liked?
  end
end
