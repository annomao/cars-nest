class User < ApplicationRecord
  has_many :questions
  has_many :reviews
  has_many :revcomments, through: :reviews
  has_many :quecomments, through: :questions
end
