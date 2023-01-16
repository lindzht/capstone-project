class TeamsController < ApplicationController

    def create
        recruiterID = find_recruiter_id
        team = Team.create(team_params)
        # Recruiterteam.create(recruiter_id: recruiterID, team_id: team.id)
        render json: team, status: :created
    end

    private

    def team_params
        params.permit(:name)
    end

    def find_recruiter_id
        Recruiter.find(session[:recruiter_id]).id
    end

end
