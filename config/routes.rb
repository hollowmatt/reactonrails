Rails.application.routes.draw do
  
  root 'dashboard#index'
  resources :people, only: [:index]

  namespace :api do
    resources :events, only: [:index, :create, :destroy, :update] do
      get :search, on: :collection
    end
    resources :users, only: [:index] 
  end

end
