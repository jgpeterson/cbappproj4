class SongsController < ApplicationController
 
    def index
        @songs = Song.all 
   
        render json: @songs 
       end 
   
       def create 
           song_params = params.require(:song).permit(:title, :description, :mp3)
           @song = Song.new(song_params)
   
           if @song.save
               render json: @song 
           end 
       end
   
       def show 
           song_id = params[:id]
   
           @song = Song.find_by_id(song_id)
           render json: @song
       end 
   
       def update 
           song_id = params[:id]
   
           @song = Song.find_by_id(song_id)
   
           song_params = params.require(:song).permit(:title, :description, :mp3)
           @song.update_attributes(song_params)
   
           render json: @song
       end 
   
       def destroy 
           song_id = params[:id]
           @song = Song.find_by_id(song_id)
   
           @song.destroy 
   
           render json: {
               msg: "Successfully Deleted"
           }
       end
   
       private 
   
       def song_params 
           params.require(:song).permit(:title, :description, :mp3)
       end
   end    