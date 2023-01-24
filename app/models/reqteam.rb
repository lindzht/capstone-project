class Reqteam < ApplicationRecord
  belongs_to :req
  belongs_to :team

  validates :req_id, uniqueness: { scope: :team_id, 
  message: "You already got this req on this team yo!" }

end
