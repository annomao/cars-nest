class EditreviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :upvotes, :downvotes
end
