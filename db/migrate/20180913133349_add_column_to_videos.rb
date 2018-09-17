class AddColumnToVideos < ActiveRecord::Migration[5.2]
  def change
    add_column :videos, :intensity, :string
    add_column :videos, :duration, :string
  end
end
