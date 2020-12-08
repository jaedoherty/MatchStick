class Api::UsersController < ApplicationController
    def create
        @user = User.new(user_params)

        if @user.save
        login(@user)
        render :new
        else
        render json: @user.errors.full_messages, status: 422
        end
    end

    def destroy
        @user = User.find(params[:id])
        render :new 
    end

    private

    def user_params
        params.require(:user).permit(:username, :password)
    end
end

