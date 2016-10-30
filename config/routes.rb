Rails.application.routes.draw do
  
  mount RailsAdmin::Engine => '/admin', as: 'rails_admin'
  resources :users, only: [:index, :new, :create]
  root 'dashboard#index'
  namespace :api do
    resources :events, only: [:index, :create, :destroy, :update] do
      get :search, on: :collection
    end
    resources :users, only: [:index, :create, :update]
  end

end
