class RecruiterteamSerializer < ActiveModel::Serializer
  attributes :id, :recruiter

  has_one :recruiter,  serializer: RecruiterTeamDisplaySerializer
  
end
