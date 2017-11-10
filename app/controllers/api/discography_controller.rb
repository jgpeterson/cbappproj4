class Api::DiscographyController < ApplicationController
    def index
        @discography = Discography.all 
   
        render json: @discography 
       end 
end
