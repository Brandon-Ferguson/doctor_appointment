Rails.application.routes.draw do
  
  namespace :api do
    resources :users
    resources :doctors do
      resources :appointments
      get '/:doctorId/noAppointment', to: 'appointments#noAppointmentUsers'
      get '/:doctorId/yesAppointment', to: 'appointments#yesAppointmentUsers'
    end 
    get '/:id/doctors', to: 'users#doctors'
    get '/:id/users', to: 'doctors#users'
  end 
end
