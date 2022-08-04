class ReviewsController < ApplicationController
  before_action :authorize
  skip_before_action :authorize, only: [:index, :show]

  def index
    render json: Review.order(created_at: :desc)
  end

  def create
    user = find_user
    review = user.reviews.create!(allowed_params)
    render json: review, status: :created
  end

  def show
  end

  def update
    review = find_review
    review.update!(allowed_params)
    render json: review, status: :created

  end

  def destroy
    review = find_review
    review.destroy
    head :no_content
  end

  private

  def find_review
    Review.find(params[:id])
  end

  def allowed_params
    params.permit(:title,:description,:upvotes, :downvotes, :image)
  end

end
