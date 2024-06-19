class CommentsController < ApplicationController
  before_action :set_post

  def create
    @post.comments.create! params.required(:comment).permit(:content)
    respond_to do |format|
      format.html { redirect_to post_url(@post), notice: "Comment was successfully created." }
      format.turbo_stream
    end
  end

  def set_post
    @post = Post.find(params[:post_id])
  end
end
