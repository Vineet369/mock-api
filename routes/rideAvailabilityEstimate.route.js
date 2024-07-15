import { asyncHandler } from "../utils/asyncHandler.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const rideAvailabilityEstimate = asyncHandler((req, res) => {
  const { pickup_lat, pickup_lng, drop_lat, drop_lng, service_type, category } = req.query;

  const r = {
        "hotspot_zone": {
            "is_hotpot_zone": true,  // indicates if pick-up lat-lng lies within hotspot zone
            "desc": "Choose from convenient pickup points to board your cab.",
            "default_pickup_point_id": 10881,  // default pickup lat-lng which is considered for ride estimate and booking
            "hotspot_boundary": [   // coordinates which define hotspot limits
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
            "pickup_points": [  // designated pickup points inside the hotspot
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
        "categories": [{
            "id": "auto",
            "display_name": "Auto",
            "currency": "INR",
            "distance_unit": "kilometre",
            "time_unit": "minute",
            "eta": 1,                           // Estimated Time of Arrival for category
            "distance": "0.2",
            "ride_later_enabled": "false",      // Whether Ride Later is applicable for category
            "image": "http://d1foexe15giopy.cloudfront.net/auto.png",
            "hotspot_pickup_points": [         // designated pickup points valid for category
                    10879,
                    10880,
                    10881
            ],
            "cancellation_policy": {           // charges applicable if ride cancelled
                "cancellation_charge": 15,
                "currency": "INR",
                "cancellation_charge_applies_after_time": 5,
                "time_unit": "minute"
            },
            "fare_breakup": [{
                    "type": "flat_rate",  // Default rate card
                    "minimum_distance": 0,
                    "minimum_time": 0,
                    "base_fare": 50,
                    "minimum_fare": 60,
                    "cost_per_distance": 8,
                    "waiting_cost_per_minute": 0,
                    "ride_cost_per_minute": 1,
                    "surcharge": [],
                    "rates_lower_than_usual": false, // Lean Pricing (fare multiplier <1)
                    "rates_higher_than_usual": false // Peak Pricing (fare multiplier >1)
                }
            ],
            "all_cabs": [{                        // Current locations of nearby cabs
                "lat": 12.9543501,
                "lng": 77.5438193,
                "id":"e0e7ba15f7249207c1d77ec07c1c06",
                "bearing":534,
                "accuracy":15
          },
          {
                "lat": 12.9561008,
                "lng": 77.5464725,
                "id":"15f7249207c1d77e9207c1c0601d6c9c",
                "bearing":135,
                "accuracy":10
          }]
        }],
        "ride_estimate": [{
          "category": "auto",
          "distance": 16.9,
          "travel_time_in_minutes": 93,
          "amount_min": 227,      // Lower limit of ride estimate
          "amount_max": 249,      // Upper limit of ride estimate
          "booking_fee": 30,       //  included in fare
          "booking_fee_breakup":
          [
            {
              "display_text": "Advance Booking Fee",
              "value": 30
            }
          ],
          "taxes":
          {
            "total_tax": 11.87      //  included in fare
          },
          "hub_charges":
          {
            "total_hub_fee": 80,    //  included in fare
            "pickup_hub_fee": 80,
            "pickup_hub_name": "Ola pick up charge"
          },
          "discounts":            // Auto-applied coupon information
          {
            "discount_type": "custom",
            "discount_code": "BLR29",
            "discount_mode": "AUTO",
            "discount": 0,
            "cashback": 0,
            "pass_savings": 16                 // Benefit received due to Ola Pass
          },
          "upfront":                         // Will be available only for whitelisted partners
          {
            "fare": 238,
            "fare_id": "1:000008:50002738-7242",   // To lock fare
            "select_discount": null,	               // Available in case of Select users
            "is_upfront_applicable": true          // Indicator of upfront pricing
          }
        }],
        "previous_cancellation_charges":      // Over and above the fare
          [
            {
              "currency": "INR",
              "booking_id": "CRN123456789",  // Booking for which charge levied
              "amount": "25"
            },
            {
              "currency": "INR",
              "booking_id": "OSN123456789",
              "amount": 50
            }
          ]
    }

    return res
          .status(200)
          .json(r)
    
    
})


export {rideAvailabilityEstimate,
       
} 
