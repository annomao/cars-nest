class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image, :categories, :upvotes, :downvotes

  belongs_to :user
  has_many :revcomments
end
