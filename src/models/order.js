const mongoose = require('mongoose');
const Customer = require('./customer');
const Address = require('./address');
const Dish = require('./dish');
const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    dishes: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Dish',
      },
    ],
    customerId: {
      type: Schema.Types.ObjectId,
      ref: `Customer`,
      required: true,
    },  
    //I added cookerID
    cookerId: {
      type: Schema.Types.ObjectId,
      ref: `Cooker`,
      // required: true,
    },
    status: {
      type: String,
      enum: ['Received', 'Cancelled', 'Delayed', 'Completed', 'Delivered'],
      default: 'Completed',
      required: true,
    },
    deliveryAddress: {
      type: Schema.Types.ObjectId,
      ref: 'Address',
      required: true,
    },
    expectedDeliveryTime: {
      type: Date,
      required: true,
    },
    totalAmount: {
      type: Number,
      default: 0,
      // required: true,
    },
  },
  { timestamps: true }
);

//for calculating the total amount
orderSchema.pre('save', function () {
  let sum = 0;
  this.dishes.forEach((element) => {
    sum += element.price;
  });
  this.totalAmount = sum;
});

module.exports = mongoose.model('Order', orderSchema);
