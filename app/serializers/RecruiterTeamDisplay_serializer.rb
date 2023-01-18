class RecruiterTeamDisplaySerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name
#   has_one :company
  # has_many :recruiterteams
#   has_many :teams, through: :recruiterteams, serializer: TeamRecruiterDisplaySerializer
#   has_many :reqs 
  end