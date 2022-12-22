class Doctor < ApplicationRecord
  has_many :appointments, dependent: :destroy
  has_many :users, through: :appointments

  validates :doctor_fname, :doctor_lname, :specialty, presence: true
end
