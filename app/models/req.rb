class Req < ApplicationRecord
  belongs_to :recruiter, optional: true
  belongs_to :company
  has_many :reqteams, dependent: :destroy
  has_many :teams, through: :reqteams

  validates :company, presence: true




  def self.req_goals_due_this_month
    beginning_of_month = Time.current.beginning_of_month
    end_of_month = beginning_of_month.end_of_month  
    self.where(hire_goal: beginning_of_month..end_of_month )
  end


  
end
