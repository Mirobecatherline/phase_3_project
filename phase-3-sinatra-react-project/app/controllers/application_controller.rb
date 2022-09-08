class ApplicationController < Sinatra::Base
  set :default_content_type, 'application/json'
  
  # Add your routes here
  get "/buyers" do
    buyer=Buyer.all
    buyer.to_json
  end
  
  get '/retailors' do
    retailor=Retailor.all
    retailor.to_json
  end

  get '/products' do
    product=Product.all
    product.to_json
  end

  post '/retailors' do
    retailor = Retailor.create(
      name: params[:name],
      location: params[:location]
    )
    retailor.to_json
  end
  post '/buyers' do
    buyer = Buyer.create(
      name: params[:name],
      location: params[:location],
      gender: params[:gender]
    )
    buyer.to_json
  end
  post '/products' do
    product = Product.create(
      title: params[:title],
      category: params[:category],
      description: params[:description],
      buyer_id:params[:buyer_id],
      retailor_id: params[:retailor_id]
    )
    product.to_json
  end
  patch '/buyers/:id' do
    buyer=Buyer.find(params[:id])
    buyer.update(
      name:params[:name],
      location: params[:location],
      gender:params[:gender]
    )
    buyer.to_json

  end
  patch '/retailors/:id' do
    retailor=Retailor.find(params[:id])
    retailor.update(
      name: params[:name],
      location: params[:location]
    )
    retailor.to_json
  end
  delete '/retailors/:id' do
    retailor=Retailor.find(params[:id])
    retailor.destroy
    retailor.to_json
  end
  delete '/buyers/:id' do
    buyers=Buyer.find(params[:id])
    buyers.destroy
    buyers.to_json
  end
end
