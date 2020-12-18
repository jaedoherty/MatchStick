class ChangeProfileColumns < ActiveRecord::Migration[5.2]
  def change
    add_column :profiles, :age, :integer
    add_column :profiles, :location, :string
    remove_column :profiles, :user_id
    add_column :profiles, :user_id, :integer
    remove_column :profiles, :match_preferences
    add_column :profiles, :match_preferences, :string, array: true, default: []
    remove_column :profiles, :quiz_results
    add_column :profiles, :quiz_results, :string, array: true, default: []
  end
end
