class RecruiterteamsController < ApplicationController

    skip_before_action :authorized,  only: [:create, :destroy]

    def create
        # byebug
        relationship = Recruiterteam.create!(recruiter_id: params[:recruiter_id], team_id: params[:team_id])
        render json: relationship, status: :created
    end

    def destroy
        # byebug
        recruiterteam = find_recruiterteam 
        recruiterteam.destroy
        render json: recruiterteam, status: :accepted
    end


    private

    def find_recruiterteam
        Recruiterteam.find(params[:id])
    end

end
