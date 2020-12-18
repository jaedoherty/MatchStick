class Api::LikesController < ApplicationController
    def index 
        @likes = Like.all
        render 'api/profiles/index'
    end

    def create
        @like = Like.new
        @like.liker_id = current_user.id
        @like.liked_profile_id = params[:liked_user_id] 

        if @like.save
            render 'api/profiles/show'
        else
            render json: @like.errors.full_messages, status: 422
        end

    end

    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        render 'api/profiles/show'
    end
end
