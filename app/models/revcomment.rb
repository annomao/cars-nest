class Revcomment < ApplicationRecord
  belongs_to :review
  belongs_to :user

  validates :description, presence: true
end
