class Recruiterteam < ApplicationRecord
  belongs_to :recruiter
  belongs_to :team

  validates :recruiter_id, uniqueness: { scope: :team_id, 
  message: "You already got this recruiter on this team yo!" }

end
