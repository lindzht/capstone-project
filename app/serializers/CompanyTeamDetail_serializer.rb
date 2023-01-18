class CompanyTeamDetailSerializer < ActiveModel::Serializer
    attributes :id, :name, :teams
    has_many :teams, serializer: TeamDetailDisplaySerializer
  end
  