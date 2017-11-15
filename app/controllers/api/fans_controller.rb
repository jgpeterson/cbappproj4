class Api::FansController < ApplicationController
    def index
        @fans = Fan.all 

        render json: @fans 
    end 
   
    def create 
        @Fan = Fan.create(fan_params)

        if @fan.save
            render json: @fan 
        end 
    end

    def show 
        fan_id = params[:id]

        @fan = Fan.find_by_id(fan_id)
        render json: @fan
    end 

    def update 
        fan_id = params[:id]

        @fan = Fan.find_by_id(fan_id)

        fan_params = params.require(:fan).permit(:title, :description)
        @fan.update_attributes(fan_params)

        render json: @fan
    end 
   
    def destroy 
        fan_id = params[:id]
        @fan = Fan.find_by_id(fan_id)

        @fan.destroy 

        @fans = Fan.all 
        
        render json: @fans 
    end

    private 

    def fan_params 
        params.require(:fan).permit(:title, :description, :picture)
    end
end
