import mongoose from "mongoose";

const DeliverySchema = new mongoose.Schema(
  {
    delivery: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    party: {
      type: String,
      required: true,
    },
    weight: {
      type: Number,
      required: true,
    },
  },
  { _id: false } // prevents auto _id for each delivery
);

const TruckSchema = new mongoose.Schema(
  {
    truckNo: {
      type: String,
      required: true,
      unique: true,
    },
    tripId: {
      type: String,
      unique: true,
    },
    tripStatus: {
      type: String,
      required: true,
      enum: ["Active", "Completed"],
    },
    status: {
      type: String,
      required: true,
    },
    selectedDelivery: {
      type: String,
      required: true,
    },
    currentLocation: {
      type: String,
      required: true,
    },
    deliveries: {
      type: [DeliverySchema],
      default: [],
    },
    trip: {
      type: Number,
      default: 1,
      min: 1,
    },
    day: {
      type: Number,
      default: 1,
      min: 1,
    },
  },
  { timestamps: true }
);

export default mongoose.model("TruckModel", TruckSchema);
