const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema(
    {
        name: String,
        descriptio: String,
        topics: [String],
        attendees: [String],
        location: {
            x: Number,
            y: Number,
        },
        time: {
            start: String,
            end: String,
        },
        link: String,
    }
);

module.exports = mongoose.model('event', eventSchema, 'events');