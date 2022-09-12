class DropRetailor < ActiveRecord::Migration[6.1]
  def change
    drop_table :retailors
  end
end
