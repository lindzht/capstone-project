class RecruitersController < ApplicationController

    def create
        # companyID = find_company_id
        recruiter = Recruiter.create(recruiter_params)
        if recruiter.admin == true 
            company = find_company_name
            team = Team.create(name: "All #{company} Reqs", company_id: params[:company_id])
            Recruiterteam.create(recruiter_id: recruiter.id, team_id: team.id)
        end
        render json: recruiter, status: :created
    end

    def show
        recruiter = find_recruiter
        render json: recruiter, status: :ok
    end

    def update
        
        recruiter = Recruiter.find(session[:recruiter_id])
        recruiter.update(
            first_name: params[:first_name],
            last_name: params[:last_name],
            email: params[:email],
            password: params[:password],
            password_confirmation: params[:password_confirmation]
        )
        render json: recruiter, status: :accepted
    end


    private

    def recruiter_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :admin, :company_id)
    end

    def find_recruiter
        Recruiter.find(session[:recruiter_id])
    end

    def find_company_name
        Company.find(params[:company_id]).name
    end


end
