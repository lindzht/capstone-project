class Company < ApplicationRecord
    has_many :recruiters, dependent: :destroy
    has_many :teams, dependent: :destroy
    has_many :reqs, dependent: :destroy
    

    validates :name, presence: true
    validates :name, uniqueness: true
    
end
