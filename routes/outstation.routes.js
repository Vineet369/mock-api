import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const rideAvailability = asyncHandler((req, res) => {
    
    const { pickup_lat,pickup_lng,drop_lat,drop_lng,category,pickup_time,pickup_mode,drop_time } = req.query
    const r = {
        "hotspot_zone": {
             "is_hotpot_zone": true,
             "desc": "Choose from convenient pickup points to board your cab.",
             "default_pickup_point_id": 10881,
             "hotspot_boundary": [
                 [
                     12.9468154,
                     77.6472151
                 ],
                 [
                     12.9474219,
                     77.6475155
                 ],
                 [
                     12.9478192,
                     77.6467001
                 ]
             ],
             "pickup_points": [
                 {
                     "lat": 12.9509456,
                     "lng": 77.6408958,
                     "name": "Sunriver",
                     "id": 10880
                 },
                 {
                     "lat": 12.9506006,
                     "lng": 77.6417542,
                     "name": "Cherry Hills",
                     "id": 10881
                 }
             ]
       },
         "categories": [
         {
           "id": "outstation",  //category id
           "display_name": "Outstation",
           "currency": "INR",   //currency unit
           "distance_unit": "kilometer",
           "time_unit": "minute",
           "eta": 1,   // nearest cab (will be 45 mins in case of LATER)
           "distance": "0.0",   //distance of nearest cab
           "ride_later_allowed": true,  // is RIDE LATER option available
           "ride_now_allowed": false,   // is RIDE NOW option available
           "image": "http://d1foexe15giopy.cloudfront.net/outstation.png",  //logo to be displayed
           "hotspot_pickup_points": [
              10879,
              10880,
              10881
           ],
     
     
           "all_cabs": [   // all available cabs
             {
               "lat": 12.950347,
               "lng": 77.6415151,
               "bearing": 270,
               "accuracy": 16,
               "id": "ef796a2e62"
             }
           ],
           "cancellation_policy": {
             "cancellation_charge": 150,
             "currency": "INR",
             "cancellation_charge_applies_after_time": 5,
             "time_unit": "minute"
           },
           "select_applicable": false,
           "sub_categories": [  // sub categories for outstation
             {
               "id": "compact",
               "display_name": "Mini",
               "currency": "INR",
               "distance_unit": "kilometer",
               "time_unit": "minute",
               "eta": 1,
               "fare_breakup": [  // rate card
                 [
                   {
                     "type": "one_way",    // type of trip
                     "distance_unit": "kilometer",
                     "time_unit": "hour",
                     "base_fare": 2049,
                     "minimum_distance": 170,  // inclusive distance
                     "minimum_time": 4.5,     // inclusive hours
                     "price_per_distance": 11,
                     "time_charge_per_extra_time": 100,
                     "day_allowance": 150,
                     "night_allowance": 150,
                     "night_allowance_start_time": "23:00",
                     "night_allowance_end_time": "6:00"
                   },
                   {
                     "type": "two_way",
                     "distance_unit": "kilometer",
                     "time_unit": "hour",   //time unit
                     "minimum_trip_time": 8,   // minimum trip time considered
                     "threshold_time": 8,   // kms per hour different below and above this threshold
                     "pre_inclusive_distance_per_time": 15,  // included kms per hour (below threshold)
                     "post_inclusive_distance_per_time": 12,  // included kms per hour (above threshold)
                     "price_per_distance": 10.5,
                     "time_charge_per_extra_time": 250,  //charge for each extra time unit
                     "day_allowance": 250,
                     "night_allowance": 250,
                     "night_allowance_start_time": "23:00",
                     "night_allowance_end_time": "06:00"
                   }
                 ]
               ],
               "description": "Comfy hatchbacks at pocket-friendly fares",
               "car_models": [
                 "Tata Indica",
                 " Maruti Ritz"
               ],
               "highlights": [
                 "Value For Money",
                 "AC",
                 "Regular Hatchback"
               ],
               "capacity": "4"
             }
           ]
         }
       ],
       "ride_estimate": {
         "one_way": {
           "sub_categories": [
             {
               "category": "Mini",
               "distance_unit": "kilometer",
               "time_unit": "hour",
               "minimum_distance": 170,
               "base_fare": 2049,
               "extra_distance": 0,   // distance exceeded
               "extra_distance_charge": 0,  // extra_distance * price_per_distance
               "no_of_days": 1, //days
               "day_allowance_charge": 150,    // no_of_days * day_allowance
               "no_of_nights": 0,
               "night_allowance_charge": 0,  // no_of_nights * night_allowance
               "taxes": 0,  // total tax
               "discount": 0,  //total discount
               "amount": 2199    // total fare
             }
           ]
         },
         "two_way": {
           "sub_categories": [
             {
               "category": "Mini",
               "distance_unit": "kilometer",
               "time_unit": "hour",
               "minimum_distance": 120,
               "base_fare": 1260,        // base fare = minimum_distance *price/distance
               "extra_distance": 11,
               "extra_distance_charge": 115,
               "no_of_days": 1,
               "day_allowance_charge": 250,
               "no_of_nights": 0,
               "night_charge": 0,
               "taxes": 0,
               "discount": 0,
               "amount": 1626
             }
           ]
         }
       },
         "previous_cancellation_charges": []
     }
    
    
    
    return res
    .status(200)
    .json(r)
    

})

const createOutstationBooking = asyncHandler((req, res) => {
    
    const {pickup_mode} = req.body 
    const bookForNow = {
        "status": "SUCCESS",
        "booking_id": "CRN123456789",
        "message": "Searching for a cab.",
        "booking_timeout": 70,   // time post which driver allocation will no longer happen
        "booking_timeout_unit": "SECONDS"
       }
    const bookForLater = {
      "status": "SUCCESS",
      "booking_id": "CRN112312309",
      "message": "Your booking (CRN112312309) is confirmed for today, 08:00 PM. Your ride details will be shared 1 hour before pickup time.",
      "otp": {
          "start_trip": {
              "text": "OTP to start ride",
              "value": "8716"
          }
      }
    }
    if (pickup_mode === 'NOW') {

    return res
    .status(200)
    .json(bookForNow)
    } else if (pickup_mode === 'LATER') {
      return res
    .status(200)
    .json(bookForLater)
    }
    

})

const cancelOutstationBooking = asyncHandler((req, res) => {
    
    
    const r = {
      "status": "SUCCESS",
      "request_type": "BOOKING_CANCEL",
      "header": "Booking Cancelled",
      "text": "Your booking with crn 000000000 has been cancelled successfully."
    }
    
    
    return res
    .status(200)
    .json(r)
    

})


export {rideAvailability,
  createOutstationBooking,
    cancelOutstationBooking
} 
