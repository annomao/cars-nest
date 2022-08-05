class PostsController < ApplicationController
  before_action :authorize

  def index
    user = find_user
    render json: user, serializer: PostSerializer, status: :ok 
  end
end
