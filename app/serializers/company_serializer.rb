class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :teams, :recruiters, :reqs
  has_many :teams
  has_many :recruiters
  has_many :reqs
end
