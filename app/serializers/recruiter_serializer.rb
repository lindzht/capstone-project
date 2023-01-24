class RecruiterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :admin, :open_reqs, :hired_reqs, :avg_time_to_hire
  has_one :company
  has_many :teams, through: :recruiterteams, serializer: TeamRecruiterDisplaySerializer
  has_many :reqs

  def open_reqs
    object.reqs.where.not(hired_status: "Hired").count
  end

  def hired_reqs
    object.reqs.where(hired_status: "Hired").count
  end

  def teams
    object.teams.order(name: :asc)
  end

  def avg_time_to_hire
    hired_reqs = object.reqs.where.not(hired_date: nil)
    total_date_difference = hired_reqs.sum do |req|
      (req.hired_date.to_date - req.open_date.to_date).to_i
    end
    total_date_difference / hired_reqs.length
  end



  # def req_due_this_month
  #   beginning_of_month = Time.current.beginning_of_month
  #   end_of_month = beginning_of_month.end_of_month  
  #   object.reqs.where(hire_goal: beginning_of_month..end_of_month )
  # end

end
