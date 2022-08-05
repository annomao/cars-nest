Rails.application.routes.draw do
  scope :api do
    scope :v1 do
      resources :users, only: [:create]
      resources :reviews
      resources :questions
      resources :quecomments, only: [:create, :update, :destroy]
      resources :revcomments, only: [:create, :update, :destroy]
      get '/me', to: 'users#show' 
      get 'user/posts', to: 'posts#index'
      post '/auth/login', to: 'sessions#create'
      delete '/auth/logout', to: 'sessions#destroy'
    end
  end

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
