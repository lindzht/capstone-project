class Team < ApplicationRecord
  belongs_to :company
  has_many :recruiterteams, dependent: :destroy
  has_many :recruiters, through: :recruiterteams
  has_many :reqteams
  has_many :reqs, through: :reqteams, dependent: :destroy



  def metrics_by_recruiter
    self.recruiters.map do |recruiter|
      hired = recruiter.reqs.where(hired_status: "Hired").count
      reqs = recruiter.reqs.where.not(hired_status: "Hired").count

      hired_reqs = recruiter.reqs.where.not(hired_date: nil).where.not(candidate_app: nil)
      total_date_difference = hired_reqs.sum do |req|
        (req.hired_date.to_date - req.candidate_app.to_date).to_i
      end
      if hired_reqs.length > 0
        avg_time_to_hire = total_date_difference / hired_reqs.length
      end

      hired_reqs = recruiter.reqs.where.not(hired_date: nil)
      total_date_difference = hired_reqs.sum do |req|
        (req.hired_date.to_date - req.open_date.to_date).to_i
      end
      if hired_reqs.length > 0
        avg_time_to_fill = total_date_difference / hired_reqs.length
      end

      {"first_name"=>recruiter.first_name, "last_name"=>recruiter.last_name, "hired"=>hired, "open"=>reqs, "time_to_hire"=>avg_time_to_hire, "time_to_fill"=>avg_time_to_fill}
    end
 end






 
  #  def reqs_in_team
  #   self.reqs.select do |req|
      
  #       req.teams.select do |team|
  #         team.id === self.id
  #       end
    
  #   end
  #  end


  #  def metrics_by_recruiter
  #   self.recruiters.map do |recruiter|
      
      
  #     hired = recruiter.teams.reqs.where(hired_status: "Hired").count 
  #     reqs = recruiter.reqs.where.not(hired_status: "Hired").count

  #     hired_reqs = recruiter.reqs.where.not(hired_date: nil).where.not(candidate_app: nil)
  #     total_date_difference = hired_reqs.sum do |req|
  #       (req.hired_date.to_date - req.candidate_app.to_date).to_i
  #     end
  #     if hired_reqs.length > 0
  #       avg_time_to_hire = total_date_difference / hired_reqs.length
  #     end

  #     hired_reqs = recruiter.reqs.where.not(hired_date: nil)
  #     total_date_difference = hired_reqs.sum do |req|
  #       (req.hired_date.to_date - req.open_date.to_date).to_i
  #     end
  #     if hired_reqs.length > 0
  #       avg_time_to_fill = total_date_difference / hired_reqs.length
  #     end

  #     {"first_name"=>req.recruiter.first_name, "last_name"=>req.recruiter.last_name, "hired"=>hired, "open"=>reqs, "time_to_hire"=>avg_time_to_hire, "time_to_fill"=>avg_time_to_fill}
    
  #   end
  # end



end
