class RecruiterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :admin
  has_one :company
  # has_many :recruiterteams
  has_many :teams, through: :recruiterteams, serializer: TeamRecruiterDisplaySerializer
  has_many :reqs 

  # def open_reqs
  #   object.reqs.where(is_hired: false).count
  # end

  # def hired_reqs
  #   object.reqs.where(is_hired: true).count
  # end

end
