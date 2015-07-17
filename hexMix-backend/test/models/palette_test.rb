require 'test_helper'

class PaletteTest < ActiveSupport::TestCase
  def setup
    @palette = palettes(:one)
  end

  test 'fixture is valid' do
    assert @palette.valid?
  end

  test 'invalid without title' do
    @palette.title = nil
    refute @palette.valid?
    assert @palette.errors.keys.include?(:title)
  end

  test 'invalid without keyword' do
    @palette.keyword = nil
    refute @palette.valid?
    assert @palette.errors.keys.include?(:keyword)
  end

  test 'does not duplicate palette title' do
    palette = Palette.new(title: 'Test')
    refute palette.valid?
    assert @palette.errors.keys.include?(:title)
  end

  test 'title responds' do
    assert_respond_to @palette, :title
  end

  test 'keyword responds' do
    assert_respond_to @palette, :keyword
  end
end