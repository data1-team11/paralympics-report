from urllib.request import urlopen
import json
import time
import os.path

geojson_filename = "../data/sewage_nodes.geojson"
url = "https://api.data.amsterdam.nl/v1/leidingeninfrastructuur/waternet_rioolknopen/?page_size=1000"

if os.path.exists(geojson_filename):
    print("Data has already been parsed to geojson. Please view '{}'".format(geojson_filename))
    exit()

api_response = json.load(urlopen(url))

data_entries = []
max_count = 3
count  = 0

while api_response is not None: # and count < max_count:
  time.sleep(0.5)
  data = api_response["_embedded"]["waternet_rioolknopen"]
  data_entries += data

  if "next" in api_response["_links"]: # has next page of results
    api_response = json.load(urlopen(api_response["_links"]["next"]["href"]))
  else: # is last page of results
    api_response = None

  count += 1


# print(data)

geojson = {
  "type": "FeatureCollection",
  "features": []
}

for entry in data_entries:
  # print(entry)
  feature = {
    "type": "Feature",
    "geometry": {
      "type": "Point",
      "coordinates": entry["geometrie"]["coordinates"]
    },
    "properties": {
      "id": entry["id"],
      "typeKnoop": entry["typeKnoop"]
    }
  }

  geojson["features"].append(feature)

with open(geojson_filename, encoding='utf-8') as outfile:
    json.dump(geojson, outfile)
