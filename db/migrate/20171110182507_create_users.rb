class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :picture
      t.string :name
      t.string :favorite_album
      t.string :favorite_song
      t.string :fan_since

      t.timestamps
    end
  end
end
