class Recruiter < ApplicationRecord
  has_secure_password
  belongs_to :company
  has_many :recruiterteams
  has_many :teams, through: :recruiterteams
  has_many :reqs 
end
