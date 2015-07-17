Rails.application.routes.draw do
  namespace :api do
    resources :palette
  end
end
