class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :user_id, null: false
      t.string :first_name, null: false
      t.integer :zip_code, null: false
      t.text :description, null: false
      t.string :gender, null: false
      t.text :match_preferences, null: false
      t.string :quiz_results, null: false
      t.timestamps
    end

    add_index :profiles, :user_id
    add_index :profiles, :first_name
    add_index :profiles, :zip_code
    add_index :profiles, :gender
    add_index :profiles, :match_preferences
    add_index :profiles, :quiz_results
  end
end
