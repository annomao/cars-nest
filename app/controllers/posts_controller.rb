class PostsController < ApplicationController
  before_action :authorize

  def index
    user = find_user
    render json: user, status: :ok 
  end
end
