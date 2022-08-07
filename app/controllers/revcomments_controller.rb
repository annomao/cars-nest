class RevcommentsController < ApplicationController
  def create
    comment = Revcomment.create!(allowed_params)
    render json: comment, serializer:RevcommentSerializer, status: :created
  end

  def update
    comment = find_comment
    comment.update!(allowed_params)
    render json: comment, serializer:RevcommentSerializer, status: :created
  end


  private

  def find_comment
    Revcomment.find(params[:id])
  end

  def allowed_params
    params.permit(:description, :upvotes, :downvotes, :review_id, :user_id)
  end

end
