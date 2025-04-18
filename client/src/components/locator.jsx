import React, { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder";
import Header from "../common-components/header";


// GeoJSON data for locations
const mapData = {
  type: "FeatureCollection",
  features: [
  
    {
      type: "Feature",
      properties: {
        Name: "Lucknow E-Waste Solutions, Address: Hazratganj, Lucknow, Contact Person: Kashish Bhargava, Contact Number: 1122334455",
      },
      geometry: {
        type: "Point",
        coordinates: [80.9479, 26.8467],
      },
      id: 0,
    },
    {
      type: "Feature",
      properties: {
        Name: "Kanpur E-Cycle Hub, Address: Civil Lines, Kanpur, Contact Person: Mr. Rahul, Contact Number: 0011223344",
      },
      geometry: {
        type: "Point",
        coordinates: [80.3318, 26.4499],
      },
      id: 31,
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Gorakhpur E-Waste Collection Center, Address: Golghar, Gorakhpur, Contact Person: Pranabh Dubey, Contact Number: 9876543210"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [83.3732, 26.7606]
      },
      "id": 33
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Kanpur Green Recycling Hub, Address: Mall Road, Kanpur, Contact Person: Ashmit , Contact Number: 9123456780"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3319, 26.4499]
      },
      "id": 34
    },

    {
      "type": "Feature",
      "properties": {
        "Name": "Kanpur Green Recycling Hub, Address: Mall Road, Kanpur, Contact Person: Ashmit , Contact Number: 9123456780"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.119, 26.4599]
      },
      "id": 34
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Ravi Trading Company",
        "Address": "126 Koyla Nagar, Daheli Sujanpur, Kanpur, Uttar Pradesh 208011",
        "Contact Person": "Ravi Kumar",
        "Contact Number": "+91 9580890292"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3435, 26.4499]
      },
      "id": 1
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Singh Brothers Scrap Vendor",
        "Address": "LIG/1599, Awas Vikas Colony, Kalyanpur, Kanpur, Uttar Pradesh 208017",
        "Contact Person": "Raj Singh",
        "Contact Number": "+91 9452556898"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3215, 26.5123]
      },
      "id": 2
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Kaushlendra Tripathi Recycling",
        "Address": "Sajari Gaon, Daheli Sujanpur, Kanpur, Uttar Pradesh 208015",
        "Contact Person": "Kaushlendra Tripathi",
        "Contact Number": "N/A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3450, 26.4500]
      },
      "id": 3
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Ganesha Ecosphere Ltd.",
        "Address": "216-B, Nawabganj, Kanpur, Uttar Pradesh 208002",
        "Contact Person": "Customer Service",
        "Contact Number": "+91 9198708383"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3310, 26.4760]
      },
      "id": 4
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Cawnpore Plastic",
        "Address": "House No 114b/9 CP, Container Yard Road, Dada Nagar, Govind Nagar, Kanpur, Uttar Pradesh 208006",
        "Contact Person": "Customer Service",
        "Contact Number": "+91 9919985696"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3240, 26.4280]
      },
      "id": 5
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Sri Balajee Traders",
        "Address": "9A, Gopal Nagar, Kanpur, Uttar Pradesh 208011",
        "Contact Person": "Balajee Sharma",
        "Contact Number": "+91 9919100003"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3400, 26.4500]
      },
      "id": 6
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Famous Traders",
        "Address": "85/57, Bansmandi, Cooperganj, Kanpur, Uttar Pradesh 208003",
        "Contact Person": "Amit Verma",
        "Contact Number": "+91 7505737942"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3315, 26.4650]
      },
      "id": 7
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Sonali Traders and Metals",
        "Address": "119/535, Kaushalpuri, Darshan Purwa, Kanpur, Uttar Pradesh 208012",
        "Contact Person": "Sonali Gupta",
        "Contact Number": "N/A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3320, 26.4400]
      },
      "id": 8
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Jai Prakash Enterprise",
        "Address": "Azad Nagar, Kanpur, Uttar Pradesh 208022",
        "Contact Person": "Jai Prakash",
        "Contact Number": "N/A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3500, 26.4600]
      },
      "id": 9
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "HelpUsGreen",
        "Address": "Kanpur, Uttar Pradesh",
        "Contact Person": "Karan Rastogi",
        "Contact Number": "N/A"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3319, 26.4499]
      },
      "id": 10
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoCycle Waste Solutions, Address: Panki Industrial Area, Kanpur, Contact Person: Ramesh Verma, Contact Number: 9123456781"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.2930, 26.4670]
      },
      "id": 35
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Green Earth Recyclers, Address: Govind Nagar, Kanpur, Contact Person: Priya Singh, Contact Number: 9123456782"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3315, 26.4499]
      },
      "id": 36
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Urban Waste Management Co., Address: Kalyanpur, Kanpur, Contact Person: Amit Sharma, Contact Number: 9123456783"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3045, 26.5123]
      },
      "id": 37
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Kanpur E-Waste Hub, Address: Shastri Nagar, Kanpur, Contact Person: Neha Gupta, Contact Number: 9123456784"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3432, 26.4789]
      },
      "id": 38
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BioGreen Recycling, Address: Barra, Kanpur, Contact Person: Suresh Kumar, Contact Number: 9123456785"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3210, 26.4250]
      },
      "id": 39
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanTech Waste Services, Address: Kidwai Nagar, Kanpur, Contact Person: Anjali Mehta, Contact Number: 9123456786"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3567, 26.4478]
      },
      "id": 40
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoWise Recyclers, Address: Swaroop Nagar, Kanpur, Contact Person: Rajeev Malhotra, Contact Number: 9123456787"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3389, 26.4780]
      },
      "id": 41
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Green Future Waste Solutions, Address: Kakadeo, Kanpur, Contact Person: Sunita Rao, Contact Number: 9123456788"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3012, 26.4785]
      },
      "id": 42
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Urban Eco Services, Address: Harjinder Nagar, Kanpur, Contact Person: Deepak Joshi, Contact Number: 9123456789"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3821, 26.4290]
      },
      "id": 43
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Kanpur Waste Recyclers, Address: Juhi Kalan, Kanpur, Contact Person: Meena Kapoor, Contact Number: 9123456790"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.3500, 26.4310]
      },
      "id": 44
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Jhansi E-Waste Drop Point, Address: Civil Lines, Jhansi, Contact Person: Ayush Sharma, Contact Number: 9988776655"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [78.5790, 25.4484]
      },
      "id": 35
    },
    
    {
      type: "Feature",
      properties: {
        Name: "Nagpur E-Waste Solutions, Address: Sitabuldi, Nagpur, Contact Person: Ms. Priya, Contact Number: 9988776655",
      },
      geometry: {
        type: "Point",
        coordinates: [79.109, 21.1458],
      },
      id: 32,
    },
    {
      type: "Feature",
      properties: {
        Name: "Indore E-Cycle Hub, Address: Vijay Nagar, Indore,  Contact Person: Mr. Ravi,  Contact Number: 8899776655",
      },
      geometry: {
        type: "Point",
        coordinates: [75.8577, 22.7196],
      },
      id: 33,
    },
    {
      type: "Feature",
      properties: {
        Name: "Patna E-Waste Solutions,  Address: Patna City, Patna,   Contact Person: Ms. Geetha,  Contact Number: 7788996655",
      },
      geometry: {
        type: "Point",
        coordinates: [85.124, 25.609],
      },
      id: 34,
    },

    {
      type: "Feature",
      properties: {
        Name: "Ghaziabad E-Waste Hub 1, Address: Indirapuram, Ghaziabad,  Contact Person: Mr. Amit, Contact Number: 9876543210",
      },
      geometry: {
        type: "Point",
        coordinates: [77.4156, 28.6558],
      },
      id: 21,
    },
   
  ],
};

const Locator = () => {

  const mapRef = useRef(null); // Reference for the map container
  const mapInstanceRef = useRef(null); // Reference to store the map instance
  

  useEffect(() => {
    if (mapInstanceRef.current) return; // Prevent reinitializing the map

    if (mapRef.current) {
      // Initialize the map
      const map = L.map(mapRef.current).setView([28.669155, 77.453758], 12);

      const mapSatellite = L.tileLayer(
        "https://tiles.stadiamaps.com/tiles/alidade_satellite/{z}/{x}/{y}{r}.{ext}",
        {
          minZoom: 0,
          maxZoom: 20,
          attribution:
            '&copy; CNES, Distribution Airbus DS, © Airbus DS, © PlanetObserver (Contains Copernicus Data) | &copy; <a href="https://www.stadiamaps.com/" target="_blank">Stadia Maps</a> &copy; <a href="https://openmaptiles.org/" target="_blank">OpenMapTiles</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
          ext: "jpg",
        }
      );

      const osm = L.tileLayer(
        "http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}",
        {
          maxZoom: 20,
          subdomains: ["mt0", "mt1", "mt2", "mt3"],
        }
      );

      osm.addTo(map);

      // Set up control layers
      const baseMaps = {
        "Satellite-Map": mapSatellite,
        "Street-Map": osm,
      };

      const overlayMaps = {};

      // Create custom marker icon
      const myIcon = L.icon({
        iconUrl: "png-jpg/maplogo.png",
        iconSize: [40, 40],
      });

      // Add GeoJSON layer
      L.geoJSON(mapData, {
        onEachFeature: (feature, layer) => {
          layer.bindPopup("Details: " + feature.properties.Name);
        },
        pointToLayer: (feature, latlng) => L.marker(latlng, { icon: myIcon }),
      }).addTo(map);

      // Add layer control
      L.control.layers(baseMaps, overlayMaps, { collapsed: false }).addTo(map);

      // Handle mousemove for coordinates
      map.on("mousemove", (e) => {
        const coordinateDiv = document.querySelector(".coordinate");
        if (coordinateDiv) {
          coordinateDiv.innerHTML = `Latitude: ${e.latlng.lat.toFixed(
            4
          )}, Longitude: ${e.latlng.lng.toFixed(4)}`;
        }
      });

      // Add geocoder control
      L.Control.geocoder().addTo(map);

      // Store the map instance
      mapInstanceRef.current = map;
    }

    // Cleanup map on unmount
    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []); // Dependency array ensures it runs only once

  return (
    <>
    <Header/>
    <div>
      <div
        id="map"
        ref={mapRef}
        style={{ width: "100%", height: "80vh" }}
      ></div>
      <div
        className="coordinate"
        style={{
          position: "absolute",
          bottom: "10px",
          right: "50%",
          textDecoration: "none",
          color: "black",
          textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        }}
      ></div>
    </div>
    
    </>

  
  );
};

export default Locator;
