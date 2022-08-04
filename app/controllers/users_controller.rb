class UsersController < ApplicationController

  def create
    user = User.create!(allowed_params)
    render json: user, status: :created
  end

  def show
    user = find_user
    render json: user, status: :ok
  end

  private 

  def allowed_params
    params.permit(:name, :username,:email,:password)
  end

end
