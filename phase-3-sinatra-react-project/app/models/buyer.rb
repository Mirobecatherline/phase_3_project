class Buyer < ActiveRecord::Base
    has_many :products
    has_many :retailors, through: :products
end