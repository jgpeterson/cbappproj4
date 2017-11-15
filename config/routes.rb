Rails.application.routes.draw do
  namespace :api do
    get "/users", to: "users#index", as: "users"
    post "/users", to: "users#create"
    get "/users/:id", to: "users#show", as: "user"
    patch "/users/:id", to: "users#update"
    delete "/users/:id", to: "users#destroy"
    get "/discography", to: "discography#index", as: "discography"
    get "/songs", to: "songs#index", as: "songs"
    get "/fans", to: "fans#index", as: "fans"
    post "/fans", to: "fans#create"
    get "/fans/:id", to: "fans#show", as: "fan"
    patch "/fans/:id", to: "fans#update"
    delete "/fans/:id", to: "fans#destroy"
  end
end
