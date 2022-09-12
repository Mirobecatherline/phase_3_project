class CreateRetailors < ActiveRecord::Migration[6.1]
  def change
    create_table :retailors do |t|
      t.string :name
      t.string :location
      t.timestamp :year_of_licensing
    end
  end
end
