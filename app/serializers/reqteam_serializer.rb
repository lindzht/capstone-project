class ReqteamSerializer < ActiveModel::Serializer
  attributes :id
  has_one :req
  has_one :team
end
