class Recruiter < ApplicationRecord
  has_secure_password
  belongs_to :company
  has_many :recruiterteams
  has_many :teams, through: :recruiterteams
  has_many :reqs 

  validates :first_name, :last_name, :email, :password, :password_confirmation, presence: true
  validates :email, uniqueness: true


end
