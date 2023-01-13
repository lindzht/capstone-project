class CompaniesController < ApplicationController

    def index
        render json: Company.all, status: :ok
    end
    
end
