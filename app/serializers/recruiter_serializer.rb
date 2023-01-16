class RecruiterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :password_digest, :admin
  has_one :company
  # has_many :recruiterteams
  has_many :teams, through: :recruiterteams
  has_many :reqs 
end
