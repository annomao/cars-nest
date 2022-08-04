class QuestionSerializer < ActiveModel::Serializer
  attributes :id,:title, :description, :image, :categories, :summary

  belongs_to :user
  has_many :quecomments

  def summary
    "#{self.object.title} - #{self.object.description[0..49]}..."
  end
end
