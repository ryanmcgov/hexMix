Rails.application.routes.draw do
  namespace :api do
    resources :palettes do
      resources :hexes
    end
    # resources :palette
  end
end
