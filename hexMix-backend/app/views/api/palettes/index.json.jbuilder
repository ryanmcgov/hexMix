json.array! @palettes do |palette|
  json.id palette.id
  json.title palette.title
  json.keyword palette.keyword

  json.hexes do
    json.array! palette.hexes do |hex|
      json.hex1 hexes.hex1
      json.hex2 hexes.hex2
      json.hex3 hexes.hex3
      json.hex4 hexes.hex4
      json.hex5 hexes.hex5
    end
  end
end
