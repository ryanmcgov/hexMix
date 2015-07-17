class CreatePalettes < ActiveRecord::Migration
  def change
    create_table :palettes do |t|
      t.string :title  , null: false
      t.string :keyword, null: false
      t.timestamps null: false
    end
  end
end
