class Question < ApplicationRecord
  has_many :quecomments
  belongs_to :user
end
