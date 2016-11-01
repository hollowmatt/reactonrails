module Api

  class UsersController < ApplicationController
    
    def index
      render json: User.all
    end

    private

      def user_params
        params.require(:user).permit(:email, :password_digest)
      end
  end
end