class Req < ApplicationRecord
  belongs_to :recruiter, optional: true
  belongs_to :company
  has_many :reqteams, dependent: :destroy
  has_many :teams, through: :reqteams

  validates :company, presence: true
  validates :hired_status, presence: true


  def self.avg_time_to_hire
    hired_reqs = self.where.not(hired_date: nil)
    total_date_difference = hired_reqs.sum do |req|
      (req.hired_date.to_date - req.open_date.to_date).to_i
    end
    total_date_difference / hired_reqs.length
  end

  def self.avg_time_to_offer
    hired_reqs = self.where.not(hired_date: nil).where.not(candidate_app: nil)
    total_date_difference = hired_reqs.sum do |req|
      (req.hired_date.to_date - req.candidate_app.to_date).to_i
    end
    total_date_difference / hired_reqs.length
  end





    # def self.req_goals_due_this_month
  #   beginning_of_month = Time.current.beginning_of_month
  #   end_of_month = beginning_of_month.end_of_month  
  #   self.where(hire_goal: beginning_of_month..end_of_month )
  # end

  
end
