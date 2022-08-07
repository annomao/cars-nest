class QuecommentsController < ApplicationController
  def create
    comment = Quecomment.create!(allowed_params)
    render json: comment, serializer:QuecommentSerializer, status: :created
  end

  def update
    comment = find_comment
    comment.update!(allowed_params)
    render json: comment, serializer:QuecommentSerializer, status: :created
  end


  private

  def find_comment
    Quecomment.find(params[:id])
  end

  def allowed_params
    params.permit(:description, :upvotes, :downvotes, :question_id, :user_id)
  end

end
