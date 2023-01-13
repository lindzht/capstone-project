class RecruitersController < ApplicationController

    def create
        companyID = find_company_id
        recruiter = Recruiter.create(recruiter_params)
        recruiter.update(company_id: companyID)
        render json: recruiter, status: :created
    end

    def show
        recruiter = find_recruiter
        render json: recruiter, status: :ok
    end


    private

    def recruiter_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :admin)
    end

    def find_recruiter
        Recruiter.find(session[:recruiter_id])
    end

    def find_company_id
        Company.find_by(name: params[:company_name]).id
    end


end
