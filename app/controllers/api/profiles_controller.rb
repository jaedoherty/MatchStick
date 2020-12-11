class Api::ProfilesController < ApplicationController
   def create
    @profile = Profile.new(profile_params) 
    if @profile.save
        render :show
    else
        render json: ['Please fill out all fields'], status: 422 
    end
   end

   def show
        @profile = Profile.find(params[:id])
        render :show
   end

   def update
       @profile = Profile.find(params[:id])
       if @profile.update(profile_params)
            render :show
       else
        render json @profile.errors.full_messages, staus: 422 
       end
   end

   private

   def profile_params
        params.require(:profile).permit(
                                        :first_name, 
                                        :zip_code, 
                                        :description,
                                        :gender, 
                                        :match_preferences, 
                                        :quiz_results
                                        )


   end

end
