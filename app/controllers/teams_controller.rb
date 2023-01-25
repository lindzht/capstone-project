class TeamsController < ApplicationController

    # skip_before_action :authorized,  only: [:create, :show, :destroy]

    def create
        team = Team.create(team_params)
        render json: team, status: :created
    end

    def show
        team = find_team
        render json: team, serializer: TeamDetailDisplaySerializer, status: :ok
    end

    def destroy
        team = find_team
        team.destroy
        recruiter = Recruiter.find(session[:recruiter_id])
        render json: recruiter, status: :accepted
    end

    # def all_team_data
        
    # end

    private

    def team_params
        params.permit(:name, :company_id)
    end

    def find_team
        Team.find(params[:id])
    end

    def find_recruiter_id
        Recruiter.find(session[:recruiter_id]).id
    end

end
