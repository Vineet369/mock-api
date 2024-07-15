import { Router } from "express";
import { rideAvailabilityEstimate,
    createBooking,
    abortBooking,
    updateDropLocation,
    cabRideTracking,
    rideCancellation,
    rideCancellationReasons,
    rideFeedback,
    driverFeedbackOptions,
    sosSignal,
    couponNonUpfront,
    // couponUpfront,
    availability,
    createRentalBooking,
    cancelRentalBooking,
    rideAvailability,
    createOutstationBooking,
    cancelOutstationBooking,
    cancelSharedBooking,
    createSharedBooking,
    sharedRideAvailability,
    sharedRideTracking,
    rideLaterBooking,
    trackRideResponse,
    myRideRequest,
 } from "../controller/user.controller.js";

const router = Router()



router.route("/devapi.olacabs.com/v1/products").get(rideAvailabilityEstimate)
router.route("/devapi.olacabs.com/v1.5/bookings/create").post(createBooking)
router.route("/devapi.olacabs.com/v1/bookings/abort").post(abortBooking)
router.route("/devapi.olacabs.com/v1/bookings/drop_location").post(updateDropLocation)
router.route("/devapi.olacabs.com/v1/bookings/track_ride").get(cabRideTracking)
router.route("/devapi.olacabs.com/v1/bookings/cancel").post(rideCancellation)
router.route("/devapi.olacabs.com/v1/bookings/cancel/reasons").get(rideCancellationReasons)
router.route("/devapi.olacabs.com/v1/bookings/feedback").post(rideFeedback)
router.route("/devapi.olacabs.com/v1.5/bookings/feedback/options").get(driverFeedbackOptions)
router.route("/devapi.olacabs.com/v1/sos/signal").post(sosSignal)
router.route("/devapi.olacabs.com/v1/coupons/validate").get(couponNonUpfront)
// router.route("/devapi.olacabs.com/v1/coupons/validate").get(couponUpfront)
router.route("/devapi.olacabs.com/v1/products").post(availability)
router.route("/devapi.olacabs.com/v1/bookings/create").post(createRentalBooking)
router.route("/devapi.olacabs.com/v1/bookings/cancel").post(cancelRentalBooking)
router.route("/devapi.olacabs.com/v1.5/products").get(rideAvailability)
router.route("/devapi.olacabs.com/v1.5/bookings/create").post(createOutstationBooking)
router.route("/devapi.olacabs.com/v1/bookings/cancel").post(cancelOutstationBooking)
router.route("/devapi.olacabs.com/v1/bookings/cancel").post(cancelSharedBooking)
router.route("/devapi.olacabs.com/v1.5/bookings/create").post(createSharedBooking)
router.route("/devapi.olacabs.com/v1/products").get(sharedRideAvailability)
router.route("/devapi.olacabs.com/v1/bookings/track_ride").get(sharedRideTracking)
router.route("/devapi.olacabs.com/v1/bookings/create").post(rideLaterBooking)
router.route("/devapi.olacabs.com/v1/bookings/track_ride").get(trackRideResponse)
router.route("/devapi.olacabs.com/v1/bookings/my_rides").get(myRideRequest)

export default router 