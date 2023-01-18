class CompanySerializer < ActiveModel::Serializer
  attributes :id, :name, :teams, :recruiters
  has_many :teams
  has_many :recruiters
end
