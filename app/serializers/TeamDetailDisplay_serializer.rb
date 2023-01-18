class TeamDetailDisplaySerializer < ActiveModel::Serializer
    attributes :id, :name, :recruiters, :reqs

    has_one :company, serializer: TeamCompanyDisplaySerializer
    has_many :recruiters, through: :recruiterteams
    has_many :reqs, through: :reqteams
    has_many :recruiterteams, serializer: RecruiterteamSerializer
    
  end
  