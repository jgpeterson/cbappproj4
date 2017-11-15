class Api::UsersController < ApplicationController

    def index
     @users = User.all 

     render json: @users 
    end 

    def create 
        @user = User.create(user_params)

        if @user.save
            render json: @user 
        end 
    end

    def show 
        user_id = params[:id]

        @user = User.find_by_id(user_id)
        render json: @user 
    end 

    def update 
        user_id = params[:id]

        @user = User.find_by_id(user_id)

        user_params = params.require(:user).permit(:picture, :name, :favorite_album, :favorite_song, :fan_since)
        @user.update_attributes(user_params)

        render json: @user
    end 

    def destroy 
        user_id = params[:id]
        @user = User.find_by_id(user_id)

        @user.destroy 

        @users = User.all 
        
        render json: @users 
    end

    private 

    def user_params 
        params.require(:user).permit(:picture, :name, :favorite_album, :favorite_song, :fan_since, :profile_picture)
    end
end 