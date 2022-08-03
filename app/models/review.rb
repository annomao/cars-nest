class Review < ApplicationRecord
  has_many :revcomments, dependent: :destroy
  belongs_to :user

  validates :title, presence: true
  validates :description, presence: true
  validates :categories, presence: true
end
