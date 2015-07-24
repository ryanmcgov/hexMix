class Api::HexesController < ApplicationController
  def index
    @hex = Hex.all
    render json: @hex
  end

  private

  def hexes_params
    params.require(:hex).permit(:hex1, :hex2, :hex3, :hex4, :hex5)
  end

  def get_hexes
    Hex.find(params[:id])
  end
end 