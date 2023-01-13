class RecruiterteamSerializer < ActiveModel::Serializer
  attributes :id
  has_one :recruiter
  has_one :team
end
