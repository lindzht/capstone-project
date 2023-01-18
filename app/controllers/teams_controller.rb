class TeamsController < ApplicationController

    def create
        # recruiterID = find_recruiter_id
        team = Team.create(team_params)
        # Recruiterteam.create(recruiter_id: recruiterID, team_id: team.id)
        render json: team, status: :created
    end

    def show
        team = find_team
        render json: team, serializer: TeamDetailDisplaySerializer, status: :ok
    end

    def all_team_data
        
    end

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
