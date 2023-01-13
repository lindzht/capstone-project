Rails.application.routes.draw do
  
  resources :reqteams
  resources :recruiterteams
  resources :reqs
  resources :teams
  resources :recruiters
  resources :companies

  post "/login", to: "sessions#create"
  delete "/logout", to:"sessions#destroy"

  post "/signup", to: "recruiters#create"

  # STAY LOGGED IN: 
  get "/me", to: "recruiters#show"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
