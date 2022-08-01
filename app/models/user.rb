class User < ApplicationRecord
  has_many :questions
  has_many :reviews
  has_many :revcomments, through: :reviews
  has_many :quecomments, through: :questions

  has_secure_password

  validates :email, uniqueness: true, presence: true
  validates :name, presence: true
  validates :username, presence: true
  validates :password, presence: true
end
