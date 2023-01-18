class ReqSerializer < ActiveModel::Serializer
  attributes :id, :req_id, :name, :org, :hiring_manager, :open_date, :hire_goal, :is_hired, :hired_date, :candidate, :candidate_app, :recruiter
  has_one :recruiter
end
