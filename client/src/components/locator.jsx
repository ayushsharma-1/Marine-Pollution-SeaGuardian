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
      type: "Feature",
      properties: {
        Name: "Kanpur Waste Recyclers, Address: Juhi Kalan, Kanpur, Contact Person: Meena Kapoor, Contact Number: 9123456790"
      },
      geometry: {
        type: "Point",
        coordinates: [80.3500, 26.4310]
      },
      id: 44
    },
    {
      type: "Feature",
      properties: {
        Name: "Kuldeep E-Waste Disposals, Address: Katraj, Pune, Contact Person: Kashish Bhargava, Contact Number: 1122334455"
      },
      geometry: {
        type: "Point",
        coordinates: [73.8567, 18.5204]
      },
      id: 45
    },
    {
      type: "Feature",
      properties: {
        Name: "Green Earth Recyclers, Address: Whitefield, Bengaluru, Contact Person: Rajeev Menon, Contact Number: 9988776655"
      },
      geometry: {
        type: "Point",
        coordinates: [77.7500, 12.9698]
      },
      id: 46
    },
    {
      type: "Feature",
      properties: {
        Name: "EcoSmart Waste Management, Address: Gachibowli, Hyderabad, Contact Person: Sonal Reddy, Contact Number: 9001122334"
      },
      geometry: {
        type: "Point",
        coordinates: [78.3568, 17.4448]
      },
      id: 47
    },
    {
      type: "Feature",
      properties: {
        Name: "Chennai E-Cycle, Address: Tidel Park, Chennai, Contact Person: Ravi Kumar, Contact Number: 9876543210"
      },
      geometry: {
        type: "Point",
        coordinates: [80.2483, 13.0087]
      },
      id: 48
    },
    {
      type: "Feature",
      properties: {
        Name: "E-Scrap Hub, Address: Cyber City, Gurugram, Contact Person: Ayesha Malik, Contact Number: 9822334455"
      },
      geometry: {
        type: "Point",
        coordinates: [77.0678, 28.4941]
      },
      id: 49
    },
    {
      type: "Feature",
      properties: {
        Name: "Reboot Recyclers, Address: Sector 62, Noida, Contact Person: Aman Verma, Contact Number: 9123456789"
      },
      geometry: {
        type: "Point",
        coordinates: [77.4029, 28.6304]
      },
      id: 50
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Cyber City, Bengaluru, Contact Person: Ayesha Malik, Contact Number: 9117353599"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5992,
          12.9773
        ]
      },
      "id": 1
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Tidel Park, Gurugram, Contact Person: Priya Shetty, Contact Number: 9577208520"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.9853,
          28.4654
        ]
      },
      "id": 2
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Indira Nagar, Hyderabad, Contact Person: Meena Kapoor, Contact Number: 9816093019"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.5009,
          17.3653
        ]
      },
      "id": 3
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Gachibowli, Hyderabad, Contact Person: Rajeev Menon, Contact Number: 9354431130"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4756,
          17.4007
        ]
      },
      "id": 4
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Gachibowli, Ahmedabad, Contact Person: Priya Shetty, Contact Number: 9068020019"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5484,
          23.0041
        ]
      },
      "id": 5
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Gachibowli, Kanpur, Contact Person: Nikhil Shah, Contact Number: 9542850994"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3065,
          26.4221
        ]
      },
      "id": 6
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Tech Park, Chennai, Contact Person: Ananya Dey, Contact Number: 9783359110"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2283,
          13.0446
        ]
      },
      "id": 7
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Whitefield, Noida, Contact Person: Aman Verma, Contact Number: 9171415158"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4111,
          28.5297
        ]
      },
      "id": 8
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Gachibowli, Chennai, Contact Person: Aman Verma, Contact Number: 9194348718"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3087,
          13.0479
        ]
      },
      "id": 9
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Prahladnagar, Kolkata, Contact Person: Ayesha Malik, Contact Number: 9308306648"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3475,
          22.6114
        ]
      },
      "id": 10
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Indira Nagar, Gurugram, Contact Person: Ayesha Malik, Contact Number: 9795422636"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0289,
          28.4129
        ]
      },
      "id": 11
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Sector 1, Noida, Contact Person: Aman Verma, Contact Number: 9506373519"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.3913,
          28.5014
        ]
      },
      "id": 12
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Tech Park, Mumbai, Contact Person: Ananya Dey, Contact Number: 9150490652"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8947,
          19.0527
        ]
      },
      "id": 13
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Indira Nagar, Pune, Contact Person: Ravi Kumar, Contact Number: 9103568675"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8322,
          18.5259
        ]
      },
      "id": 14
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Whitefield, Mumbai, Contact Person: Nikhil Shah, Contact Number: 9279098953"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.9158,
          19.0582
        ]
      },
      "id": 15
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Gachibowli, Pune, Contact Person: Priya Shetty, Contact Number: 9714725735"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.9,
          18.4919
        ]
      },
      "id": 16
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Cyber City, Kanpur, Contact Person: Ayesha Malik, Contact Number: 9202133266"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3607,
          26.4404
        ]
      },
      "id": 17
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Indira Nagar, Bengaluru, Contact Person: Meena Kapoor, Contact Number: 9432303485"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.579,
          12.9825
        ]
      },
      "id": 18
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Sector 1, Noida, Contact Person: Ravi Kumar, Contact Number: 9243863642"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.3474,
          28.548
        ]
      },
      "id": 19
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Prahladnagar, Hyderabad, Contact Person: Ananya Dey, Contact Number: 9159226073"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.5328,
          17.3899
        ]
      },
      "id": 20
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Prahladnagar, Gurugram, Contact Person: Rajeev Menon, Contact Number: 9696628806"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.986,
          28.4652
        ]
      },
      "id": 21
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Gachibowli, Kanpur, Contact Person: Priya Shetty, Contact Number: 9377460657"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3111,
          26.4153
        ]
      },
      "id": 22
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Whitefield, Kolkata, Contact Person: Priya Shetty, Contact Number: 9081366709"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3994,
          22.5532
        ]
      },
      "id": 23
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Salt Lake, Mumbai, Contact Person: Meena Kapoor, Contact Number: 9210018026"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8324,
          19.1227
        ]
      },
      "id": 24
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Salt Lake, Kanpur, Contact Person: Nikhil Shah, Contact Number: 9846335263"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3669,
          26.4432
        ]
      },
      "id": 25
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Sector 1, Bengaluru, Contact Person: Kashish Bhargava, Contact Number: 9814447057"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5804,
          12.9716
        ]
      },
      "id": 26
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Cyber City, Bengaluru, Contact Person: Ananya Dey, Contact Number: 9562927064"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6403,
          12.9257
        ]
      },
      "id": 27
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Katraj, Hyderabad, Contact Person: Rajeev Menon, Contact Number: 9259718743"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4818,
          17.4009
        ]
      },
      "id": 28
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Tech Park, Bengaluru, Contact Person: Ayesha Malik, Contact Number: 9900100283"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6296,
          12.9526
        ]
      },
      "id": 29
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Sector 1, Hyderabad, Contact Person: Meena Kapoor, Contact Number: 9979392210"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4839,
          17.4289
        ]
      },
      "id": 30
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Tech Park, Hyderabad, Contact Person: Nikhil Shah, Contact Number: 9029489525"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.5282,
          17.4172
        ]
      },
      "id": 31
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Salt Lake, Bengaluru, Contact Person: Ananya Dey, Contact Number: 9130965450"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5557,
          12.9299
        ]
      },
      "id": 32
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Sector 1, Pune, Contact Person: Sonal Reddy, Contact Number: 9173900331"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8751,
          18.5471
        ]
      },
      "id": 33
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Katraj, Gurugram, Contact Person: Priya Shetty, Contact Number: 9740248375"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.9958,
          28.4223
        ]
      },
      "id": 34
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Katraj, Mumbai, Contact Person: Aman Verma, Contact Number: 9764442696"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.9264,
          19.0955
        ]
      },
      "id": 35
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Salt Lake, Kanpur, Contact Person: Sonal Reddy, Contact Number: 9552263748"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3726,
          26.4464
        ]
      },
      "id": 36
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Indira Nagar, Ahmedabad, Contact Person: Rajeev Menon, Contact Number: 9322060229"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5924,
          22.9896
        ]
      },
      "id": 37
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Salt Lake, Hyderabad, Contact Person: Kashish Bhargava, Contact Number: 9961136287"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4808,
          17.4191
        ]
      },
      "id": 38
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Sector 1, Chennai, Contact Person: Nikhil Shah, Contact Number: 9639172394"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2902,
          13.0424
        ]
      },
      "id": 39
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Tech Park, Pune, Contact Person: Meena Kapoor, Contact Number: 9739910412"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8102,
          18.5435
        ]
      },
      "id": 40
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Katraj, Kolkata, Contact Person: Aman Verma, Contact Number: 9742316250"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3302,
          22.6171
        ]
      },
      "id": 41
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Sector 1, Gurugram, Contact Person: Sonal Reddy, Contact Number: 9733915317"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0309,
          28.4276
        ]
      },
      "id": 42
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Indira Nagar, Gurugram, Contact Person: Ananya Dey, Contact Number: 9866854826"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0484,
          28.4347
        ]
      },
      "id": 43
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Prahladnagar, Ahmedabad, Contact Person: Aman Verma, Contact Number: 9816842409"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5843,
          22.9885
        ]
      },
      "id": 44
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Indira Nagar, Bengaluru, Contact Person: Priya Shetty, Contact Number: 9483318783"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5958,
          12.9793
        ]
      },
      "id": 45
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Whitefield, Mumbai, Contact Person: Meena Kapoor, Contact Number: 9853418159"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8739,
          19.0624
        ]
      },
      "id": 46
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Tech Park, Ahmedabad, Contact Person: Ayesha Malik, Contact Number: 9890413822"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5594,
          22.9754
        ]
      },
      "id": 47
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Gachibowli, Chennai, Contact Person: Nikhil Shah, Contact Number: 9129116334"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2417,
          13.0767
        ]
      },
      "id": 48
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Sector 1, Bengaluru, Contact Person: Sonal Reddy, Contact Number: 9782742440"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6279,
          12.9557
        ]
      },
      "id": 49
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Prahladnagar, Kanpur, Contact Person: Ananya Dey, Contact Number: 9231228414"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.38,
          26.4148
        ]
      },
      "id": 50
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Tech Park, Mumbai, Contact Person: Meena Kapoor, Contact Number: 9681879779"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8858,
          19.1209
        ]
      },
      "id": 51
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Tech Park, Bengaluru, Contact Person: Meena Kapoor, Contact Number: 9381508476"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5596,
          12.998
        ]
      },
      "id": 52
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Sector 1, Kanpur, Contact Person: Rajeev Menon, Contact Number: 9916581569"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3094,
          26.4971
        ]
      },
      "id": 53
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Prahladnagar, Bengaluru, Contact Person: Priya Shetty, Contact Number: 9210129668"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5744,
          13.0039
        ]
      },
      "id": 54
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Tidel Park, Hyderabad, Contact Person: Ananya Dey, Contact Number: 9890956393"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.509,
          17.4277
        ]
      },
      "id": 55
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Gachibowli, Chennai, Contact Person: Ravi Kumar, Contact Number: 9616497518"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2853,
          13.0818
        ]
      },
      "id": 56
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Cyber City, Pune, Contact Person: Kashish Bhargava, Contact Number: 9900145695"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8971,
          18.5072
        ]
      },
      "id": 57
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Prahladnagar, Kanpur, Contact Person: Sonal Reddy, Contact Number: 9649514409"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3471,
          26.4094
        ]
      },
      "id": 58
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Tech Park, Hyderabad, Contact Person: Aman Verma, Contact Number: 9914806873"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4513,
          17.4251
        ]
      },
      "id": 59
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Indira Nagar, Chennai, Contact Person: Priya Shetty, Contact Number: 9104218037"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2734,
          13.0422
        ]
      },
      "id": 60
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Gachibowli, Pune, Contact Person: Ravi Kumar, Contact Number: 9330270543"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8564,
          18.5126
        ]
      },
      "id": 61
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Salt Lake, Mumbai, Contact Person: Sonal Reddy, Contact Number: 9582302262"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8456,
          19.0385
        ]
      },
      "id": 62
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Indira Nagar, Gurugram, Contact Person: Priya Shetty, Contact Number: 9426375888"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0303,
          28.4158
        ]
      },
      "id": 63
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Cyber City, Bengaluru, Contact Person: Ayesha Malik, Contact Number: 9423120305"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5711,
          12.9942
        ]
      },
      "id": 64
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Cyber City, Bengaluru, Contact Person: Ravi Kumar, Contact Number: 9952751608"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6318,
          12.9391
        ]
      },
      "id": 65
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Sector 1, Chennai, Contact Person: Ananya Dey, Contact Number: 9997031417"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2659,
          13.1105
        ]
      },
      "id": 66
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Katraj, Kanpur, Contact Person: Ayesha Malik, Contact Number: 9075067315"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2904,
          26.4266
        ]
      },
      "id": 67
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Sector 1, Bengaluru, Contact Person: Ayesha Malik, Contact Number: 9859896584"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6076,
          12.9935
        ]
      },
      "id": 68
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Indira Nagar, Kanpur, Contact Person: Ananya Dey, Contact Number: 9221320824"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3473,
          26.4868
        ]
      },
      "id": 69
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Tech Park, Pune, Contact Person: Ananya Dey, Contact Number: 9449681605"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8782,
          18.5525
        ]
      },
      "id": 70
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Prahladnagar, Noida, Contact Person: Sonal Reddy, Contact Number: 9700168282"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4052,
          28.514
        ]
      },
      "id": 71
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Katraj, Chennai, Contact Person: Aman Verma, Contact Number: 9710203010"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.304,
          13.1037
        ]
      },
      "id": 72
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Gachibowli, Gurugram, Contact Person: Ananya Dey, Contact Number: 9034727941"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.074,
          28.4193
        ]
      },
      "id": 73
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Tidel Park, Kanpur, Contact Person: Kashish Bhargava, Contact Number: 9103855961"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3059,
          26.4305
        ]
      },
      "id": 74
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Sector 1, Ahmedabad, Contact Person: Aman Verma, Contact Number: 9560551475"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5541,
          23.0082
        ]
      },
      "id": 75
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Sector 1, Bengaluru, Contact Person: Priya Shetty, Contact Number: 9209644869"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6269,
          12.9369
        ]
      },
      "id": 76
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Tidel Park, Gurugram, Contact Person: Rajeev Menon, Contact Number: 9566895965"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0223,
          28.4667
        ]
      },
      "id": 77
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Gachibowli, Mumbai, Contact Person: Sonal Reddy, Contact Number: 9327564591"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8916,
          19.0703
        ]
      },
      "id": 78
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Gachibowli, Chennai, Contact Person: Sonal Reddy, Contact Number: 9700074277"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2528,
          13.0908
        ]
      },
      "id": 79
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Katraj, Kolkata, Contact Person: Kashish Bhargava, Contact Number: 9624173258"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.4054,
          22.5269
        ]
      },
      "id": 80
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Salt Lake, Mumbai, Contact Person: Aman Verma, Contact Number: 9511057802"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8858,
          19.0819
        ]
      },
      "id": 81
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Sector 1, Kanpur, Contact Person: Priya Shetty, Contact Number: 9163606927"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3618,
          26.4286
        ]
      },
      "id": 82
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Gachibowli, Chennai, Contact Person: Ayesha Malik, Contact Number: 9713749254"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2371,
          13.0576
        ]
      },
      "id": 83
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Salt Lake, Chennai, Contact Person: Nikhil Shah, Contact Number: 9191138756"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2527,
          13.0824
        ]
      },
      "id": 84
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Indira Nagar, Kanpur, Contact Person: Aman Verma, Contact Number: 9592026227"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3026,
          26.4621
        ]
      },
      "id": 85
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Katraj, Chennai, Contact Person: Ayesha Malik, Contact Number: 9352861205"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3087,
          13.1253
        ]
      },
      "id": 86
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Cyber City, Bengaluru, Contact Person: Rajeev Menon, Contact Number: 9332866462"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6067,
          12.9368
        ]
      },
      "id": 87
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Indira Nagar, Ahmedabad, Contact Person: Kashish Bhargava, Contact Number: 9644923680"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5658,
          23.0163
        ]
      },
      "id": 88
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Prahladnagar, Gurugram, Contact Person: Kashish Bhargava, Contact Number: 9209990176"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0497,
          28.4408
        ]
      },
      "id": 89
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Tech Park, Kolkata, Contact Person: Priya Shetty, Contact Number: 9462295091"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.378,
          22.5244
        ]
      },
      "id": 90
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Tidel Park, Bengaluru, Contact Person: Nikhil Shah, Contact Number: 9488165996"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5881,
          12.9245
        ]
      },
      "id": 91
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Sector 1, Mumbai, Contact Person: Priya Shetty, Contact Number: 9961119342"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.9226,
          19.0525
        ]
      },
      "id": 92
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Tidel Park, Chennai, Contact Person: Rajeev Menon, Contact Number: 9813521072"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.258,
          13.1268
        ]
      },
      "id": 93
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Indira Nagar, Kolkata, Contact Person: Rajeev Menon, Contact Number: 9465221073"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3687,
          22.5404
        ]
      },
      "id": 94
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Salt Lake, Noida, Contact Person: Rajeev Menon, Contact Number: 9200741042"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.3596,
          28.5589
        ]
      },
      "id": 95
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Sector 1, Mumbai, Contact Person: Ravi Kumar, Contact Number: 9241861066"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.891,
          19.1063
        ]
      },
      "id": 96
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Whitefield, Noida, Contact Person: Aman Verma, Contact Number: 9473023923"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.3669,
          28.5596
        ]
      },
      "id": 97
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Prahladnagar, Mumbai, Contact Person: Aman Verma, Contact Number: 9205343824"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.862,
          19.0668
        ]
      },
      "id": 98
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Salt Lake, Pune, Contact Person: Nikhil Shah, Contact Number: 9913343212"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8196,
          18.5228
        ]
      },
      "id": 99
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Whitefield, Kanpur, Contact Person: Ravi Kumar, Contact Number: 9900734633"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3637,
          26.4655
        ]
      },
      "id": 100
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Tidel Park, Kanpur, Contact Person: Ananya Dey, Contact Number: 9710446505"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3685,
          26.4181
        ]
      },
      "id": 101
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Tech Park, Ahmedabad, Contact Person: Kashish Bhargava, Contact Number: 9307125895"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5481,
          23.0594
        ]
      },
      "id": 102
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Whitefield, Mumbai, Contact Person: Ananya Dey, Contact Number: 9563214607"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8511,
          19.0959
        ]
      },
      "id": 103
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Tidel Park, Hyderabad, Contact Person: Ravi Kumar, Contact Number: 9113514824"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4798,
          17.4338
        ]
      },
      "id": 104
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Sector 1, Kanpur, Contact Person: Ayesha Malik, Contact Number: 9758505038"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2976,
          26.4842
        ]
      },
      "id": 105
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Tidel Park, Kanpur, Contact Person: Nikhil Shah, Contact Number: 9199474912"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3628,
          26.4806
        ]
      },
      "id": 106
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Cyber City, Bengaluru, Contact Person: Sonal Reddy, Contact Number: 9333476651"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5947,
          12.9385
        ]
      },
      "id": 107
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Tech Park, Pune, Contact Person: Ravi Kumar, Contact Number: 9434673804"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8933,
          18.5544
        ]
      },
      "id": 108
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Sector 1, Hyderabad, Contact Person: Ayesha Malik, Contact Number: 9045907741"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4754,
          17.4329
        ]
      },
      "id": 109
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Tidel Park, Pune, Contact Person: Ananya Dey, Contact Number: 9821136942"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.863,
          18.5225
        ]
      },
      "id": 110
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Tidel Park, Ahmedabad, Contact Person: Ayesha Malik, Contact Number: 9058113559"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5728,
          23.0008
        ]
      },
      "id": 111
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Sector 1, Kolkata, Contact Person: Sonal Reddy, Contact Number: 9385463553"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3856,
          22.5329
        ]
      },
      "id": 112
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Whitefield, Ahmedabad, Contact Person: Aman Verma, Contact Number: 9380905323"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5478,
          22.9747
        ]
      },
      "id": 113
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Tech Park, Kanpur, Contact Person: Meena Kapoor, Contact Number: 9140561401"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3746,
          26.4224
        ]
      },
      "id": 114
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Indira Nagar, Gurugram, Contact Person: Ananya Dey, Contact Number: 9324745652"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.012,
          28.4751
        ]
      },
      "id": 115
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Katraj, Mumbai, Contact Person: Ravi Kumar, Contact Number: 9759239391"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8818,
          19.0519
        ]
      },
      "id": 116
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Tidel Park, Bengaluru, Contact Person: Ayesha Malik, Contact Number: 9490038438"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5838,
          12.9392
        ]
      },
      "id": 117
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Katraj, Mumbai, Contact Person: Meena Kapoor, Contact Number: 9397656546"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8941,
          19.0989
        ]
      },
      "id": 118
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Prahladnagar, Hyderabad, Contact Person: Nikhil Shah, Contact Number: 9220159797"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4716,
          17.3929
        ]
      },
      "id": 119
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Gachibowli, Pune, Contact Person: Priya Shetty, Contact Number: 9357455758"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8995,
          18.4713
        ]
      },
      "id": 120
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Salt Lake, Kolkata, Contact Person: Ravi Kumar, Contact Number: 9873837367"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3226,
          22.5782
        ]
      },
      "id": 121
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Salt Lake, Mumbai, Contact Person: Ravi Kumar, Contact Number: 9461567463"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8964,
          19.0482
        ]
      },
      "id": 122
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Cyber City, Gurugram, Contact Person: Priya Shetty, Contact Number: 9680869010"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          76.9952,
          28.4357
        ]
      },
      "id": 123
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Katraj, Gurugram, Contact Person: Meena Kapoor, Contact Number: 9873674630"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0096,
          28.4997
        ]
      },
      "id": 124
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Sector 1, Gurugram, Contact Person: Meena Kapoor, Contact Number: 9734627156"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0584,
          28.499
        ]
      },
      "id": 125
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Whitefield, Mumbai, Contact Person: Ayesha Malik, Contact Number: 9764375252"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.863,
          19.1016
        ]
      },
      "id": 126
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Cyber City, Kanpur, Contact Person: Ayesha Malik, Contact Number: 9075736717"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3195,
          26.4858
        ]
      },
      "id": 127
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Tech Park, Hyderabad, Contact Person: Sonal Reddy, Contact Number: 9946356480"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4753,
          17.4174
        ]
      },
      "id": 128
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Tidel Park, Kolkata, Contact Person: Rajeev Menon, Contact Number: 9548487047"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.4051,
          22.6177
        ]
      },
      "id": 129
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Prahladnagar, Hyderabad, Contact Person: Meena Kapoor, Contact Number: 9775048020"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.4519,
          17.387
        ]
      },
      "id": 130
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Indira Nagar, Bengaluru, Contact Person: Ayesha Malik, Contact Number: 9144153459"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6336,
          12.9678
        ]
      },
      "id": 131
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Indira Nagar, Ahmedabad, Contact Person: Ananya Dey, Contact Number: 9938334628"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5871,
          22.988
        ]
      },
      "id": 132
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Tech Park, Bengaluru, Contact Person: Kashish Bhargava, Contact Number: 9311976713"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5812,
          12.9523
        ]
      },
      "id": 133
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Sector 1, Hyderabad, Contact Person: Ananya Dey, Contact Number: 9998115449"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.509,
          17.3503
        ]
      },
      "id": 134
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Indira Nagar, Kanpur, Contact Person: Ayesha Malik, Contact Number: 9560607283"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.304,
          26.4527
        ]
      },
      "id": 135
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Tech Park, Chennai, Contact Person: Ananya Dey, Contact Number: 9096262758"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2889,
          13.129
        ]
      },
      "id": 136
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Tech Park, Mumbai, Contact Person: Priya Shetty, Contact Number: 9846555117"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.9109,
          19.0385
        ]
      },
      "id": 137
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Tidel Park, Mumbai, Contact Person: Meena Kapoor, Contact Number: 9308207839"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8324,
          19.0915
        ]
      },
      "id": 138
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Tech Park, Hyderabad, Contact Person: Priya Shetty, Contact Number: 9336487299"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.457,
          17.394
        ]
      },
      "id": 139
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Tech Park, Kolkata, Contact Person: Sonal Reddy, Contact Number: 9410864667"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3987,
          22.5968
        ]
      },
      "id": 140
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Cyber City, Ahmedabad, Contact Person: Priya Shetty, Contact Number: 9430957127"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5623,
          23.0469
        ]
      },
      "id": 141
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Sector 1, Kanpur, Contact Person: Ayesha Malik, Contact Number: 9292274659"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3564,
          26.4579
        ]
      },
      "id": 142
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Prahladnagar, Mumbai, Contact Person: Priya Shetty, Contact Number: 9802066842"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8838,
          19.1219
        ]
      },
      "id": 143
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Salt Lake, Bengaluru, Contact Person: Rajeev Menon, Contact Number: 9630511515"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6088,
          12.9474
        ]
      },
      "id": 144
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Whitefield, Pune, Contact Person: Kashish Bhargava, Contact Number: 9945185353"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8263,
          18.4791
        ]
      },
      "id": 145
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Whitefield, Ahmedabad, Contact Person: Nikhil Shah, Contact Number: 9071705674"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5899,
          22.9864
        ]
      },
      "id": 146
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Whitefield, Ahmedabad, Contact Person: Ayesha Malik, Contact Number: 9073094563"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5653,
          23.0648
        ]
      },
      "id": 147
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Whitefield, Kolkata, Contact Person: Nikhil Shah, Contact Number: 9961017277"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3773,
          22.6017
        ]
      },
      "id": 148
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Gachibowli, Kolkata, Contact Person: Priya Shetty, Contact Number: 9958872323"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.4011,
          22.524
        ]
      },
      "id": 149
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Katraj, Mumbai, Contact Person: Nikhil Shah, Contact Number: 9006985999"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8999,
          19.0267
        ]
      },
      "id": 150
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Katraj, Chennai, Contact Person: Ravi Kumar, Contact Number: 9684547445"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2553,
          13.1308
        ]
      },
      "id": 151
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Whitefield, Ahmedabad, Contact Person: Nikhil Shah, Contact Number: 9121348805"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.564,
          22.9754
        ]
      },
      "id": 152
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Tech Park, Bengaluru, Contact Person: Sonal Reddy, Contact Number: 9760314320"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.6378,
          12.9858
        ]
      },
      "id": 153
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Tidel Park, Ahmedabad, Contact Person: Ananya Dey, Contact Number: 9547390577"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5525,
          23.0191
        ]
      },
      "id": 154
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Cyber City, Noida, Contact Person: Nikhil Shah, Contact Number: 9723836427"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4017,
          28.5016
        ]
      },
      "id": 155
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Indira Nagar, Kolkata, Contact Person: Aman Verma, Contact Number: 9811701651"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3582,
          22.5238
        ]
      },
      "id": 156
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Cyber City, Hyderabad, Contact Person: Ayesha Malik, Contact Number: 9936282724"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.457,
          17.3688
        ]
      },
      "id": 157
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Salt Lake, Kolkata, Contact Person: Meena Kapoor, Contact Number: 9949130226"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.344,
          22.5997
        ]
      },
      "id": 158
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Whitefield, Kanpur, Contact Person: Sonal Reddy, Contact Number: 9133702511"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3642,
          26.485
        ]
      },
      "id": 159
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Tech Park, Ahmedabad, Contact Person: Nikhil Shah, Contact Number: 9167984178"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5232,
          22.9957
        ]
      },
      "id": 160
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Indira Nagar, Mumbai, Contact Person: Ravi Kumar, Contact Number: 9180916962"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8582,
          19.0421
        ]
      },
      "id": 161
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Gachibowli, Kanpur, Contact Person: Sonal Reddy, Contact Number: 9490214246"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3552,
          26.4695
        ]
      },
      "id": 162
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Salt Lake, Hyderabad, Contact Person: Ananya Dey, Contact Number: 9781913061"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.463,
          17.3842
        ]
      },
      "id": 163
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Salt Lake, Gurugram, Contact Person: Ayesha Malik, Contact Number: 9833793137"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0079,
          28.4634
        ]
      },
      "id": 164
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Whitefield, Ahmedabad, Contact Person: Ananya Dey, Contact Number: 9922464688"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5318,
          22.9741
        ]
      },
      "id": 165
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Tech Park, Kolkata, Contact Person: Meena Kapoor, Contact Number: 9091650928"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.318,
          22.5899
        ]
      },
      "id": 166
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Indira Nagar, Chennai, Contact Person: Priya Shetty, Contact Number: 9137702827"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2684,
          13.1269
        ]
      },
      "id": 167
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Tech Park, Kolkata, Contact Person: Rajeev Menon, Contact Number: 9149433434"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.4088,
          22.6032
        ]
      },
      "id": 168
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Gachibowli, Noida, Contact Person: Rajeev Menon, Contact Number: 9231376214"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.4372,
          28.5046
        ]
      },
      "id": 169
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Tidel Park, Noida, Contact Person: Meena Kapoor, Contact Number: 9321670407"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.3881,
          28.5075
        ]
      },
      "id": 170
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Cyber City, Kanpur, Contact Person: Rajeev Menon, Contact Number: 9148195337"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2991,
          26.4906
        ]
      },
      "id": 171
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Gachibowli, Pune, Contact Person: Aman Verma, Contact Number: 9687654251"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8471,
          18.5438
        ]
      },
      "id": 172
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Salt Lake, Pune, Contact Person: Aman Verma, Contact Number: 9865071103"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8628,
          18.5401
        ]
      },
      "id": 173
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Prahladnagar, Kolkata, Contact Person: Rajeev Menon, Contact Number: 9742563488"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.4103,
          22.5504
        ]
      },
      "id": 174
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Cyber City, Kanpur, Contact Person: Sonal Reddy, Contact Number: 9719686393"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.3782,
          26.4036
        ]
      },
      "id": 175
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Prahladnagar, Kolkata, Contact Person: Nikhil Shah, Contact Number: 9979195034"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.4023,
          22.5284
        ]
      },
      "id": 176
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Prahladnagar, Kanpur, Contact Person: Priya Shetty, Contact Number: 9067680466"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.2877,
          26.4936
        ]
      },
      "id": 177
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Indira Nagar, Mumbai, Contact Person: Nikhil Shah, Contact Number: 9963864015"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.8893,
          19.0796
        ]
      },
      "id": 178
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Sector 1, Ahmedabad, Contact Person: Ravi Kumar, Contact Number: 9492005884"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5631,
          22.9967
        ]
      },
      "id": 179
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Gachibowli, Kolkata, Contact Person: Ayesha Malik, Contact Number: 9273533855"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3545,
          22.55
        ]
      },
      "id": 180
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "WasteAway, Address: Tidel Park, Kanpur, Contact Person: Nikhil Shah, Contact Number: 9278219675"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          80.297,
          26.4136
        ]
      },
      "id": 181
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX, Address: Salt Lake, Mumbai, Contact Person: Nikhil Shah, Contact Number: 9212093198"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.881,
          19.0803
        ]
      },
      "id": 182
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Whitefield, Bengaluru, Contact Person: Kashish Bhargava, Contact Number: 9121375247"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5568,
          12.9975
        ]
      },
      "id": 183
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoScrap, Address: Gachibowli, Ahmedabad, Contact Person: Aman Verma, Contact Number: 9855904816"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.578,
          22.9979
        ]
      },
      "id": 184
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Indira Nagar, Noida, Contact Person: Priya Shetty, Contact Number: 9679796439"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.438,
          28.5517
        ]
      },
      "id": 185
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Gachibowli, Kolkata, Contact Person: Nikhil Shah, Contact Number: 9813678913"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          88.3405,
          22.5929
        ]
      },
      "id": 186
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Cyber City, Pune, Contact Person: Kashish Bhargava, Contact Number: 9289855896"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8212,
          18.5362
        ]
      },
      "id": 187
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Gachibowli, Mumbai, Contact Person: Ravi Kumar, Contact Number: 9402935491"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.832,
          19.0778
        ]
      },
      "id": 188
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Sector 1, Hyderabad, Contact Person: Priya Shetty, Contact Number: 9715291258"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.511,
          17.4172
        ]
      },
      "id": 189
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Gachibowli, Gurugram, Contact Person: Rajeev Menon, Contact Number: 9696137479"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.0582,
          28.4887
        ]
      },
      "id": 190
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenLoop, Address: Salt Lake, Bengaluru, Contact Person: Sonal Reddy, Contact Number: 9620255386"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5822,
          12.96
        ]
      },
      "id": 191
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Tech, Address: Salt Lake, Hyderabad, Contact Person: Ayesha Malik, Contact Number: 9732508749"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          78.5285,
          17.3835
        ]
      },
      "id": 192
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Katraj, Pune, Contact Person: Meena Kapoor, Contact Number: 9373078396"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8096,
          18.5086
        ]
      },
      "id": 193
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Salt Lake, Noida, Contact Person: Kashish Bhargava, Contact Number: 9528291632"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.387,
          28.5451
        ]
      },
      "id": 194
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Cycle Hub, Address: Tech Park, Pune, Contact Person: Meena Kapoor, Contact Number: 9423548353"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8613,
          18.4939
        ]
      },
      "id": 195
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "CleanEarth, Address: Tidel Park, Pune, Contact Person: Ayesha Malik, Contact Number: 9660749318"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.8154,
          18.535
        ]
      },
      "id": 196
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Gachibowli, Ahmedabad, Contact Person: Rajeev Menon, Contact Number: 9000543271"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          72.5537,
          23.0654
        ]
      },
      "id": 197
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "UrbanRecycle, Address: Indira Nagar, Pune, Contact Person: Ayesha Malik, Contact Number: 9230658975"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          73.901,
          18.4742
        ]
      },
      "id": 198
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "BinBuddy, Address: Whitefield, Bengaluru, Contact Person: Aman Verma, Contact Number: 9168028704"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.5909,
          12.9238
        ]
      },
      "id": 199
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Waste Pro, Address: Salt Lake, Bengaluru, Contact Person: Ravi Kumar, Contact Number: 9466211044"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [
          77.631,
          13.0054
        ]
      },
      "id": 200
    },
    {
      type: "Feature",
      properties: {
        Name: "Urban Eco Waste, Address: Andheri East, Mumbai, Contact Person: Priya Shetty, Contact Number: 9000088888"
      },
      geometry: {
        type: "Point",
        coordinates: [72.8697, 19.1197]
      },
      id: 51
    },
    {
      type: "Feature",
      properties: {
        Name: "RecycleX India, Address: Prahladnagar, Ahmedabad, Contact Person: Nikhil Shah, Contact Number: 9977554433"
      },
      geometry: {
        type: "Point",
        coordinates: [72.5185, 23.0110]
      },
      id: 52
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Kuldeep E-Waste Disposals",
        "Address": "Katraj, Pune",
        "Contact Person": "Kashish Bhargava",
        "Contact Number": "1122334455"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [73.8567, 18.5204]
      },
      "id": 45
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Green Earth Recyclers",
        "Address": "Whitefield, Bengaluru",
        "Contact Person": "Rajeev Menon",
        "Contact Number": "9988776655"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [77.7500, 12.9698]
      },
      "id": 46
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoSmart Waste Management",
        "Address": "Gachibowli, Hyderabad",
        "Contact Person": "Sonal Reddy",
        "Contact Number": "9001122334"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [78.3568, 17.4448]
      },
      "id": 47
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Chennai E-Cycle",
        "Address": "Tidel Park, Chennai",
        "Contact Person": "Ravi Kumar",
        "Contact Number": "9876543210"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.2483, 13.0087]
      },
      "id": 48
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "E-Scrap Hub",
        "Address": "Cyber City, Gurugram",
        "Contact Person": "Ayesha Malik",
        "Contact Number": "9822334455"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [77.0678, 28.4941]
      },
      "id": 49
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Reboot Recyclers",
        "Address": "Sector 62, Noida",
        "Contact Person": "Aman Verma",
        "Contact Number": "9123456789"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [77.4029, 28.6304]
      },
      "id": 50
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Urban Eco Waste",
        "Address": "Andheri East, Mumbai",
        "Contact Person": "Priya Shetty",
        "Contact Number": "9000088888"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [72.8697, 19.1197]
      },
      "id": 51
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "RecycleX India",
        "Address": "Prahladnagar, Ahmedabad",
        "Contact Person": "Nikhil Shah",
        "Contact Number": "9977554433"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [72.5185, 23.0110]
      },
      "id": 52
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "GreenBin Kolkata",
        "Address": "Salt Lake Sector V, Kolkata",
        "Contact Person": "Ananya Dey",
        "Contact Number": "9801122334"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [88.4312, 22.5791]
      },
      "id": 53
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "EcoCycle Solutions",
        "Address": "Hinjawadi, Pune",
        "Contact Person": "Vikram Joshi",
        "Contact Number": "9012345678"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [73.7684, 18.5913]
      },
      "id": 54
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "TechWaste Recyclers",
        "Address": "Electronic City, Bengaluru",
        "Contact Person": "Meera Nair",
        "Contact Number": "9123456780"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [77.6845, 12.8390]
      },
      "id": 55
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Hyderabad E-Waste Center",
        "Address": "Madhapur, Hyderabad",
        "Contact Person": "Arjun Rao",
        "Contact Number": "9234567890"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [78.3860, 17.4483]
      },
      "id": 56
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Chennai Green Recyclers",
        "Address": "Guindy, Chennai",
        "Contact Person": "Lakshmi Menon",
        "Contact Number": "9345678901"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [80.2209, 13.0108]
      },
      "id": 57
    },
    {
      "type": "Feature",
      "properties": {
        "Name": "Delhi E-Waste Solutions",
        "Address": "Okhla Industrial Area, Delhi",
        "Contact Person": "Rohan Kapoor",
        "Contact Number": "9456789012"
      },
      "geometry": {
        "type": "Point",
        "coordinates": [77.2695, 28.5245]
      },
      "id": 58
    },
    {
      type: "Feature",
      properties: {
        Name: "GreenBin Kolkata, Address: Salt Lake Sector V, Kolkata, Contact Person: Ananya Dey, Contact Number: 9801122334"
      },
      geometry: {
        type: "Point",
        coordinates: [88.4312, 22.5791]
      },
      id: 53
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
      const map = L.map(mapRef.current).setView([26.4499, 80.3318], 14);

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
    <div>
      <Header/>
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
  );
};

export default Locator;
