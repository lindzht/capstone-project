class RecruitersController < ApplicationController

    def create
        # byebug
        if params[:admin] == true
            company = Company.create!(name: params[:company])
            recruiter = Recruiter.create!(
                first_name: params[:first_name],
                last_name: params[:last_name],
                email: params[:email],
                password: params[:password],
                password_confirmation: params[:password_confirmation],
                admin: params[:admin],
                company_id: company.id
                )
            team = Team.create(name: "All #{company.name} Reqs", company_id: company.id)
            Recruiterteam.create(recruiter_id: recruiter.id, team_id: team.id)      
        else 
            recruiter = Recruiter.create(recruiter_params)   
        end
        session[:recruiter_id] = recruiter.id
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

    def admin_recruiter_params
        params.permit(:first_name, :last_name, :email, :password, :password_confirmation, :admin)
    end

    def find_recruiter
        Recruiter.find(session[:recruiter_id])
    end

    def find_company_name
        Company.find(params[:company_id]).name
    end


end

