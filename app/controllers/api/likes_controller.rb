class Api::LikesController < ApplicationController
    def index 
        @likes = current_user.liked_profiles
        render 'api/likes/index'
    end

    def create
        @like = Like.new
        @like.liker_id = current_user.id
        @like.liked_profile_id = params[:profileId] 
        # debugger
        if @like.save!
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 422
        end

    end

   
    def destroy
        @like = Like.find(params[:id])
        @like.destroy
        render 'api/likes/show'
    end
end
