class Api::UsersController < ApplicationController

    def index
     @users = User.all 

     redner json: @users 
    end 

    def create 
        user_params = params.require(:user).permit(:picture, :name, :favorite_album, :favorite_song, :fan_since)
        @user = User.new(user_params)

        if @user.save
            render json: @user 
        end 

    def show 
        user_id = params[:id]

        @user = User.find_by_id(user_id)
        render json: @creature 
    end 
end
