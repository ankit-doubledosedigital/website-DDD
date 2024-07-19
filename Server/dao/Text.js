const Text = require('../model/text-upload');

module.exports.saveText = async ({ text }) => {
    const data = new Text({ text });
    data.rewards = (data.rewards || 0) + 20;
    await data.save();


   

}
