class SessionsController < ApplicationController

    skip_before_action :authorized, only: [:create, :destroy]

    # CREATE /login
    def create
        recruiter = Recruiter.find_by(email: params[:email])
        if recruiter&.authenticate(params[:password])
            session[:recruiter_id] = recruiter.id 
            render json: recruiter, status: :ok
        else
            render json:{error: "Invalid username or password"}, status: :unauthorized
        end
    end

    # DELETE /logout
    def destroy
        session.delete :recruiter_id
        head :no_content
    end
    

end
