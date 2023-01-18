class CompaniesController < ApplicationController

    def index
        render json: Company.all, status: :ok
    end

    def create
        company = Company.create!(company_params)
        render json: company, status: :created
    end

    def show
        company = Company.find(params[:id])
        render json: company, serializer: CompanyTeamDetailSerializer, status: :ok
    end


    private

    def company_params
        params.permit(:name)
    end

end
