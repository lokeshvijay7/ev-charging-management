import charger from '../models/charger.model.js'

export async function createCharger(req, res) {
  const { name, latitude, longitude, status, powerOutput, connectorType } = req.body;

  try {
    if (!name || !latitude || !longitude || !status || !powerOutput || !connectorType) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }

    const newCharger = new charger({
      name,
      latitude,
      longitude,
      status,
      powerOutput,
      connectorType,
      createdBy: req.user._id // Assuming req.user is set by auth middleware
    });

    const savedCharger = await newCharger.save();
    res.status(201).json({ success: true, charger: savedCharger });
  } catch (error) {
    console.error("Error in CreateCharger:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getAllChargers(req, res) {
  try {
    const filter = {};
    if (req.query.status) {
      filter.status = req.query.status;
    }
    if (req.query.connectorType) {
      filter.connectorType = req.query.connectorType;
    }
    const chargers = await charger.find(filter).populate('createdBy', 'name email');
    res.status(200).json({ success: true, chargers });
  } catch (error) {
    console.error("Error in GetAllChargers:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function getChargerById(req, res) {
  const { id } = req.params;

  try {
    const chargerData = await charger.findById(id).populate('createdBy', 'name email');
    if (!chargerData) {
      return res.status(404).json({ message: "Charger not found" });
    }
    res.status(200).json({ success: true, charger: chargerData });
  } catch (error) {
    console.error("Error in GetChargerById:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function updateCharger(req, res) {
  const { id } = req.params;
  const { name, latitude, longitude, status, powerOutput, connectorType } = req.body;

  try {
    const updatedCharger = await charger.findByIdAndUpdate(
      id,
      { name, latitude, longitude, status, powerOutput, connectorType },
      { new: true }
    );

    if (!updatedCharger) {
      return res.status(404).json({ message: "Charger not found" });
    }

    res.status(200).json({ success: true, charger: updatedCharger });
  } catch (error) {
    console.error("Error in UpdateCharger:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

export async function deleteCharger(req, res) {
  const { id } = req.params;

  try {
    const deletedCharger = await charger.findByIdAndDelete(id);
    if (!deletedCharger) {
      return res.status(404).json({ message: "Charger not found" });
    }
    res.status(200).json({ success: true, message: "Charger deleted successfully" });
  } catch (error) {
    console.error("Error in DeleteCharger:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}

