class RevcommentSerializer < ActiveModel::Serializer
  attributes :id, :description, :upvotes, :downvotes
end
