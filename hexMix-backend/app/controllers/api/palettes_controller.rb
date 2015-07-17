class Api::PalettesController < ApplicationController
  
  def index
    @palettes = Palette.all
    render json: Palette.all
  end

  def show
    @palette = get_palette
      render :get_palette
  end

  def create
    @palette = Palette.new(palette_params)
    if @palette.save
      render status: 201
    else
      render json: @palette.errors, status: 422
    end
  end

  def update
    @palette = get_palette
    if @palette.update_attributes(palette_params)
      render :updated
    else 
      render json: @palette.errors, status: 422
    end
  end

  def destroy
    @palette = get_palette
    if @palette.destroy
      render head: 204
    else
      render json: @palette.errors, status: 422
    end
  end

  private

  def palette_params
    params.require(:palette).permit(:title, :keyword)
  end

  def get_palette
    Palette.find(params[:id])
  end
end