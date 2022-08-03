class UsersController < ApplicationController

  skip_before_action :authorize, only: :create

  def create
    user = User.create!(allowed_params)
    render json: user, status: :created
  end

  def show
    render json: @current_user, status: :ok
  end

  private 

  def allowed_params
    params.permit(:name, :username,:email,:password)
  end

end
