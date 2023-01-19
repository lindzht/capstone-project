class Company < ApplicationRecord
    has_many :recruiters
    has_many :teams
    has_many :reqs
    

    validates :name, presence: true
    validates :name, uniqueness: true
    
end
