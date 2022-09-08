require "faker"
puts "🌱 Seeding spices..."

# Seed data for buyer
10.times do
    buyer = Buyer.create(
        name: Faker::Name.unique.name,
        location: Faker::Address.unique.city,
        gender: Faker::Gender.binary_type
    )
end
# seed data for retailor
15.times do
    retailor = Retailor.create(
       name: Faker::Company.name,
       location:Faker::Address.unique.city
    )

# seed data for product 
rand(1..5).times do

    buyer= Buyer.order('RANDOM()').first
    

    response=RestClient.get 'https://fakestoreapi.com/products'
    data=JSON.parse(response)
    data.each do |data| 
        product=Product.create(
            title: data["title"],
            category: data["category"],
            description:data["description"],
            image: data["image"],  
            buyer_id: buyer.id, 
            retailor_id: retailor.id
        )
    end
    end
end



puts "✅ Done seeding!"
