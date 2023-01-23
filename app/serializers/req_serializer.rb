class ReqSerializer < ActiveModel::Serializer
  attributes :id, :req_id, :name, :org, :hiring_manager, :open_date, :hire_goal, :hired_status, :hired_date, :candidate, :candidate_app, :recruiter
  has_one :company
  has_one :recruiter
end
