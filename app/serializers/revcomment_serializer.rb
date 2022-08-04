class RevcommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :upvotes, :downvotes

  belongs_to :user
end
