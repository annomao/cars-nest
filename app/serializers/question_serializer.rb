class QuestionSerializer < ActiveModel::Serializer
  attributes :id,:title, :description, :image, :categories

  belongs_to :user
  has_many :revcomments
end
