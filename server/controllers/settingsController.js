import Settings from "../models/Settings.js";

/**
 * Returns the single settings document.
 * Creates it automatically if it doesn't exist.
 */
const getSettingsDocument = async () => {
  let settings = await Settings.findOne();

  if (!settings) {
    settings = await Settings.create({});
  }

  return settings;
};

/**
 * GET /api/settings
 */
export const getSettings = async (req, res) => {
  try {
    const settings = await getSettingsDocument();

    res.status(200).json(settings);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch settings.",
    });
  }
};

/**
 * PUT /api/settings
 */
export const updateSettings = async (req, res) => {
  try {
    const settings = await getSettingsDocument();

    settings.general = req.body.general;
    settings.contact = req.body.contact;
    settings.donation = req.body.donation;
    settings.social = req.body.social;

    await settings.save();

    res.status(200).json({
      message: "Settings updated successfully.",
      settings,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update settings.",
    });
  }
};