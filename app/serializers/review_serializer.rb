class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :image, :categories, :upvotes, :downvotes, :summary

  belongs_to :user
  has_many :revcomments

  def summary
    "#{self.object.title} - #{self.object.description[0..49]}..."
  end
end
