class Req < ApplicationRecord
  belongs_to :recruiter, optional: true
  has_many :reqteams
  has_many :teams, through: :reqteams
end
