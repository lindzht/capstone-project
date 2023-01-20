class RecruiterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :admin, :open_reqs, :hired_reqs
  has_one :company
  # has_many :recruiterteams
  has_many :teams, through: :recruiterteams, serializer: TeamRecruiterDisplaySerializer
  has_many :reqs 

  def open_reqs
    object.reqs.where.not(hired_status: "Hired").count
  end

  def hired_reqs
    object.reqs.where(hired_status: "Hired").count
  end

end
