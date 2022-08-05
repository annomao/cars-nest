class PostSerializer < ActiveModel::Serializer
  attributes :id, :username
  
  has_many :questions
  has_many :reviews
end
