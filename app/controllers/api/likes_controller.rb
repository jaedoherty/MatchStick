class Api::LikesController < ApplicationController
    def index 
        @likes = current_user.liked_profiles
        render 'api/likes/index'
    end

    def create
        @like = Like.new
        @like.liker_id = current_user.id
        @like.liked_profile_id = params[:profileId] 
         
        if @like.save!
            render 'api/likes/show'
        else
            render json: @like.errors.full_messages, status: 422
        end

    end

   
    def destroy
         
        @like = Like.find_by(liked_profile_id: params[:liked_profile_id], liker_id: current_user.id)
        @like.delete
         
        render 'api/likes/show'
    end
end
