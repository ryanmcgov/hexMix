class Palette < ActiveRecord::Base
  validates :title, :keyword, presence: true
end
