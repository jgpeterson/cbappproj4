class AddTitleToFans < ActiveRecord::Migration[5.1]
  def change
    add_column :fans, :title, :string
  end
end
