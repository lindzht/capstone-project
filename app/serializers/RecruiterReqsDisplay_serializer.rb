class RecruiterReqsDisplaySerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :admin, :reqs, :open_reqs, :hired_reqs, :avg_time_to_fill, :avg_time_to_hire

    has_many :reqs 

    def open_reqs
      object.reqs.where.not(hired_status: "Hired").count
    end
  
    def hired_reqs
      object.reqs.where(hired_status: "Hired").count
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
  
  
end
  