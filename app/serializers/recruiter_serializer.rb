class RecruiterSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :email, :admin, :open_reqs, :hired_reqs, :avg_time_to_fill, :avg_time_to_hire


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


  def avg_time_to_fill
    hired_reqs = object.reqs.where.not(hired_date: nil)
    total_date_difference = hired_reqs.sum do |req|
      (req.hired_date.to_date - req.open_date.to_date).to_i
    end
    if hired_reqs.length > 0
      total_date_difference / hired_reqs.length
    else
      return 0
    end
  end


  

  def avg_time_to_hire
    hired_reqs = object.reqs.where.not(hired_date: nil).where.not(candidate_app: nil)
    total_date_difference = hired_reqs.sum do |req|
      (req.hired_date.to_date - req.candidate_app.to_date).to_i
    end
    if hired_reqs.length > 0
      total_date_difference / hired_reqs.length
    else
      return 0
    end
  end

  def reqs
    object.reqs.order(hire_goal: :asc)
  end


  # def avg_time_to_fill_by_team
  #   object.teams.map do |team|
  #     hired = team.reqs.where(recruiter_id: object.id).where.not(hired_date: nil)
  #     date_difference = hired.sum do |req|
  #       (req.hired_date.to_date - req.open_date.to_date).to_i
  #     end
  #     if hired.length > 0
  #       divide = date_difference/hired.length
  #     end
  #     {"id"=>team.id, "fill"=>divide} 
  #   end
  # end



end
