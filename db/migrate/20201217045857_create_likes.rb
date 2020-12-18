class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false;
      t.integer :liked_profile_id, null: false
      t.boolean :already_liked?, null: false
      t.timestamps
    end
    add_index :likes, :liker_id
    add_index :likes, :liked_profile_id
    add_index :likes, :already_liked?
  end
end
