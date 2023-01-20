class Req < ApplicationRecord
  belongs_to :recruiter, optional: true
  belongs_to :company
  has_many :reqteams
  has_many :teams, through: :reqteams

  validates :company, presence: true
  
end
