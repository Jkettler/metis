class CreateCrops < ActiveRecord::Migration[6.0]
  def change
    create_table :crops do |t|
      t.string :name, null: false
      t.integer :grow_cycle_days, null: false
      t.decimal :daily_cost, null: false
      t.decimal :sell_price, null: false
      t.string :ui_color, null: false

      t.timestamps
    end

    create_table :crop_cycles do |t|
      t.datetime :plant_time, null: false
      t.datetime :harvest_time
      t.integer :yield
    end
  end
end