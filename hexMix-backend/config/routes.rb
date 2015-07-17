Rails.application.routes.draw do
  namespace :api do
<<<<<<< HEAD
    resources :palettes do
      resources :hexes
    end
    # resources :palette
=======
    resources :palette
>>>>>>> 0c7ae8ca7e0d215641cfe9cf97b24ed4e20d5bb2
  end
end
