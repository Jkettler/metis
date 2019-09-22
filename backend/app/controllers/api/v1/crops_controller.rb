module Api::V1
  class CropsController < ApplicationController

    def index
      @crops = Crop.order(:id)

      render json: @crops
    end
  end
end