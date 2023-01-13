class Company < ApplicationRecord
    has_many :recruiters
    has_many :teams

    validates :name, presence: true
    validates :name, uniqueness: true
    
end
