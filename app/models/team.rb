class Team < ApplicationRecord
  belongs_to :company
  has_many :recruiterteams
  has_many :recruiters, through: :recruiterteams
  has_many :reqteams
  has_many :reqs, through: :reqteams
end
