class ChangeProfileDataTypes < ActiveRecord::Migration[5.2]
  def change
    remove_column :profiles, :match_preferences
    add_column :profiles, :match_preferences, :text
    remove_column :profiles, :quiz_results
    add_column :profiles, :quiz_results, :text
    add_index :profiles, :user_id
  end
end
