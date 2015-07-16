class Hex < ActiveRecord::Base
    validates :hex1, :hex2, :hex3, :hex4, :hex5, presence: true
end
