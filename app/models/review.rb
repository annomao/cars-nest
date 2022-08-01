class Review < ApplicationRecord
  has_many :revcomments
  belongs_to :user
end
