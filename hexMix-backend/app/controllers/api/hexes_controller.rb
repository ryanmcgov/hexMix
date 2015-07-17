class Api::HexesController < ApplicationController
  def index
    @hexes = Hex.all
    render json: @hexes
  end
end 