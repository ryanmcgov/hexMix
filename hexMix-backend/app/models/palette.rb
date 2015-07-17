class Palette < ActiveRecord::Base
  validates :title, :keyword, presence: true
  validates :title, uniqueness: true
end
