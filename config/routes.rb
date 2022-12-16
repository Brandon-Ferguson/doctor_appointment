Rails.application.routes.draw do
  namespace :api do
    resources :users
    resources :doctors
    get '/:id/doctors', to: 'users#doctors'
    get '/:id/users', to: 'doctors#users'
  end
end
