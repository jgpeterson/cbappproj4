class AddPictureToFans < ActiveRecord::Migration[5.1]
  def change
    add_column :fans, :picture, :string
  end
end
