class Company < ApplicationRecord
    has_many :recruiters
    has_many :teams
end
