require 'test_helper'

class Api::PalettesControllerTest < ActionController::TestCase
  def setup
    @palette = palettes(:one)
  end

  test 'GET #index' do
    get :index, format: :json
    assert_response 200
    r = JSON.parse(response.body, symbolize_name: true)[0]
    ['title', 'keyword'].each do |item|
      assert_equal @palette.send(item), r[item.to_sym]
    end
  end

  test "GET #show displays correct palette" do
      get :show, id: @palette, format: :json
      assert_response 200
      r = JSON.parse(response.body, symbolize_name: true)
      ['title', 'keyword'].each do |item|
      assert_equal @palette.send(item), r[item.to_sym]
    end
  end

  test 'POST creates with valid attributes' do 
    attributes = { title: 'recycle', keyword: 'green' }
    assert_difference('Palette.count', 1) do
      post :create, palette: attributes, format: :json
    end  
    assert_response 201
  end

  test 'POST does not creates with invalid attributes' do 
    attributes = { title: '', keyword: '' }
    assert_no_difference('Palette.count') do
      post :create, palette: attributes, format: :json
    end
    assert_response 422
  end

  test 'PATCH updates with valid attributes' do
    attributes = { title: 'recycle', keyword: 'green' }
    patch :update, id: @palette, palette: attributes, format: :json
    assert_response 200
    @palette.reload
    r = JSON.parse(response.body, symbolize_name: true)
    ['title', 'keyword'].each do |item|
      assert_equal @palette.send(item), r[item.to_sym]
    end
  end

  test 'PATCH does not update invalid attributes' do
    attributes = { title: '', keyword: '' }
    patch :update, id: @palette, palette: attributes, format: :json
    assert_response 422
    @palette.reload
    r = JSON.parse(response.body, symbolize_name: true)
    ['title', 'keyword'].each do |item|
      assert_not_equal @palette.send(item), r[item.to_sym]
    end
  end

  test 'DELETE destroy does in fact destroy' do
    assert_difference('Palette.count', -1) do
      delete :destroy, id: @palette, format: :json
    end
    assert_response 204
    begin
      check = Palette.find(id: @palette.id)
    rescue
      check = nil
    end
    refute check
  end
end
