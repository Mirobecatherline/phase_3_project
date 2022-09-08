class DeleteBuyer < ActiveRecord::Migration[6.1]
  def change
    Buyer.delete_all 
  end
end
