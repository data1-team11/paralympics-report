# Sewage Overflow Nodes

The Waternet sewerage network data is retrieved from https://data.overheid.nl/dataset/xnhveaeyheww2w. 
As we were unable to download the WFS data (link returned 404 error), we used a Python [script](../../code/parse_sewer_data.py) to retrieve the data via the provided API and save it as a [GeoJSON file](../../data/sewage_nodes.geojson). 
The Coordinate Reference System used is EPSG:28992.

The sewage nodes can be viewed using QGIS, using the files in [qgis-sewage-nodes](../../data/qgis-sewage-nodes). We used QGIS to filter the nodes into overflow and non-overflow nodes, and saved the data to csv files.
