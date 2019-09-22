Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :crops, only: [:index]
      resources :crop_cycles, only: [:create, :update]
    end
  end
end
