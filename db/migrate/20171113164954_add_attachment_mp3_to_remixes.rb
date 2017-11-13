class AddAttachmentMp3ToRemixes < ActiveRecord::Migration
  def self.up
    change_table :remixes do |t|
      t.attachment :mp3
    end
  end

  def self.down
    remove_attachment :remixes, :mp3
  end
end
