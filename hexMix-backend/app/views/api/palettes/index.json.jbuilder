json.array! @palettes do |palette|
  json.id palette.id
  json.title palette.title
  json.keyword palette.keyword

  json.hexes do
    json.array! palette.hexes do |hex|
      json.hex1 hex.hex1
      json.hex2 hex.hex2
      json.hex3 hex.hex3
      json.hex4 hex.hex4
      json.hex5 hex.hex5
    end
  end
end
