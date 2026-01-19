import mongoose, { Schema, Model, models } from 'mongoose';

export interface IContact {
  _id?: string;
  name: string;
  phone: string;
  createdAt?: Date;
  updatedAt?: Date;
}

const ContactSchema = new Schema<IContact>(
  {
    name: {
      type: String,
      required: [true, 'Please provide a name'],
      trim: true,
      maxlength: [100, 'Name cannot be more than 100 characters'],
    },
    phone: {
      type: String,
      required: [true, 'Please provide a phone number'],
      trim: true,
      maxlength: [20, 'Phone number cannot be more than 20 characters'],
    },
  },
  {
    timestamps: true,
  }
);

const Contact: Model<IContact> = models.Contact || mongoose.model<IContact>('Contact', ContactSchema);

export default Contact;
