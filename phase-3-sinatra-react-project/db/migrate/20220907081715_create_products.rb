class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :title
      t.string :category
      t.string :description
      t.string :image
      t.timestamp
    end
  end
end
