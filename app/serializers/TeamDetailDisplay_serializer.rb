class TeamDetailDisplaySerializer < ActiveModel::Serializer
    attributes :id, :name, :recruiters, :reqs, :open_reqs, :hired_reqs

    has_one :company, serializer: TeamCompanyDisplaySerializer
    has_many :recruiters, through: :recruiterteams, serializer: RecruiterReqsDisplaySerializer
    has_many :reqs, through: :reqteams
    has_many :recruiterteams, serializer: RecruiterteamSerializer
    

    # def open_reqs
    #   object.reqs.where(is_hired: false).count
    # end

    # def hired_reqs
    #   object.reqs.where(is_hired: true).count
    # end

    def open_reqs
      object.reqs.where.not(hired_status: "Hired").count
    end
  
    def hired_reqs
      object.reqs.where(hired_status: "Hired").count
    end

  end
  