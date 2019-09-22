class AddForeignKeyToCropCycles < ActiveRecord::Migration[6.0]
  def change
    add_reference :crop_cycles, :crop, foreign_key: true
  end
end
