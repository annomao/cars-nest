class UsersController < ApplicationController

  def create
    user = User.create!(allowed_params)
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  private 

  def allowed_params
    params.permit(:name, username,email,password)
  end

end
