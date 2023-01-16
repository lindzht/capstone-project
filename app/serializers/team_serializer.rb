class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :recruiters, :reqs
  has_one :company
  has_many :recruiters, through: :recruiterteams
  has_many :reqs, through: :reqteams
  
end
