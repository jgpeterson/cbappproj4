class RemoveDescriptionFromSongs < ActiveRecord::Migration[5.1]
  def change
    remove_column :songs, :description
    remove_column :songs, :mp3    
  end
end
