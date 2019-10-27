Rails.application.routes.draw do
  resources :users do
    get "dashboard", on: :member
    post "update_password", on: :member
  end

  devise_for :user, controllers: { registrations: 'users/registrations' }
  root to: 'users#index'

  get '/log_out', to: "sessions#log_out", as: :log_out
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
