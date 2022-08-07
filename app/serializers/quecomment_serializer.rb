class QuecommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :upvotes, :downvotes
end
