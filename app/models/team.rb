class Team < ApplicationRecord
  belongs_to :company
  has_many :recruiterteams, dependent: :destroy
  has_many :recruiters, through: :recruiterteams
  has_many :reqteams
  has_many :reqs, through: :reqteams, dependent: :destroy


  def avg_time_to_hire
    hired_reqs = self.reqs.where(hired_status: "Hired")
    sum = hired_reqs.each do |req|
      (req.hired_date - req.open_date).to_i
    end
    puts sum
  end


end
