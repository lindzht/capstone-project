class ReqteamsController < ApplicationController

    skip_before_action :authorized,  only: [:destroy_req_from_team]

    def destroy_req_from_team
        reqteam = find_reqteam 
        reqteam.destroy
        render json: reqteam, status: :accepted
    end

    private

    def find_reqteam
        Reqteam.find_by(req_id: params[:req_id], team_id: params[:team_id])
    end

end
