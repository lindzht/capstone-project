class ReqsController < ApplicationController

    def create
        req = Req.create!(req_params)
        render json: req, status: :created
    end

    private

    def req_params
        params.permit(:req_id, :name, :org, :hiring_manager, :open_date, :hire_goal, :hired_status, :hired_date, :candidate, :candidate_app, :recruiter_id, :company_id)
    end

end
