class RevcommentsController < ApplicationController
  def create
    user = find_user
    comment = user.revcomments.create!(allowed_params)
    render json: comment, status: :created
  end

  def update
    comment = find_comment
    comment.update!(allowed_params)
    render json: comment, status: :created
  end


  private

  def find_comment
    Revcomment.find(params[:id])
  end

  def allowed_params
    params.permit(:description, :upvotes, :downvotes, :review_id)
  end

end
