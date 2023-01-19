class RecruiterReqsDisplaySerializer < ActiveModel::Serializer
    attributes :id, :first_name, :last_name, :email, :admin, :reqs

    has_many :reqs 
  
  
  end
  