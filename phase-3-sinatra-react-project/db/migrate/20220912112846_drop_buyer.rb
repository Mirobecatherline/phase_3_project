class DropBuyer < ActiveRecord::Migration[6.1]
  def change
    drop_table :buyers
  end
end
