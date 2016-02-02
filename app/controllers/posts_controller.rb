class PostsController < ApplicationController
  respond_to :json

  def index
    @posts = Post.all
  end
end
