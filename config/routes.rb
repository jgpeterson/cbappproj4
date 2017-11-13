Rails.application.routes.draw do
  namespace :api do
    get "/users", to: "users#index", as: "users"
    post "/users", to: "users#create"
    get "/users/:id", to: "users#show", as: "user"
    patch "/users/:id", to: "users#update"
    delete "/users/:id", to: "users#destroy"
    get "/discography", to: "discography#index", as: "discography"
  end
  
  devise_for :remixes
  root 'welcome#index'

  resources :remixes, only: [:index, :show] do
    resources :songs
  end 
end 