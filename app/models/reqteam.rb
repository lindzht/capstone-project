class Reqteam < ApplicationRecord
  belongs_to :req
  belongs_to :team

  # validates :req_id, uniqueness: { scope: :team_id }

end
