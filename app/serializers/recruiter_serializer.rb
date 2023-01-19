class RecruiterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :admin
  has_one :company
  # has_many :recruiterteams
  has_many :teams, through: :recruiterteams, serializer: TeamRecruiterDisplaySerializer
  has_many :reqs 

  def sort_companyteams
    object.company.teams.order(name: :asc)
  end

end
