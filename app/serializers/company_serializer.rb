class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :teams, :recruiters, :reqs
  has_many :teams
  has_many :recruiters
  has_many :reqs

  def teams
    object.teams.order(name: :asc)
  end

  def recruiters
    object.recruiters.order(first_name: :asc)
  end



end
