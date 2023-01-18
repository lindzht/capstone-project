class RecruiterteamsController < ApplicationController


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
