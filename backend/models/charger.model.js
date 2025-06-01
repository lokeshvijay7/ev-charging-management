import mongoose from 'mongoose';

const chargerSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  latitude: { 
    type: Number, 
    required: true 
  },
  longitude: { 
    type: Number, 
    required: true 
  },
  status: { 
    type: String, 
    enum: ['Active', 'Inactive'], 
    required: true },
  powerOutput: { 
    type: Number, 
    required: true 
  }, // kW
  connectorType: { 
    type: String, 
    required: true 
  },
  createdBy: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User' 
  }

},{ timestamps : true});

const charger = mongoose.model('Charger', chargerSchema);
export default charger;