class CreateHexes < ActiveRecord::Migration
  def change
    create_table :hexes do |t|
      t.string :hex1   , null: false
      t.string :hex2   , null: false
      t.string :hex3   , null: false
      t.string :hex4   , null: false
      t.string :hex5   , null: false
      t.timestamps null: false
    end
  end
end
