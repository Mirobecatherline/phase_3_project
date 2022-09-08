class Product < ActiveRecord::Base
    belongs_to :buyer
    belongs_to :retailor
end