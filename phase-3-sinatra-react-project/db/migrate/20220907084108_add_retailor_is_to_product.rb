class AddRetailorIsToProduct < ActiveRecord::Migration[6.1]
  def change
    add_column :products, :retailor_id, :integer
  end
end
