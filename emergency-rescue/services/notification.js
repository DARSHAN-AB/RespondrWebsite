const { io, responders } = require('../server');

async function sendNotificationToResponders({ reportId, type, latitude, longitude, photoUrl, description }) {
  const message = {
    reportId,
    type,
    latitude,
    longitude,
    photoUrl: type === 'SOS' ? photoUrl : null,
    description
  };

  responders.forEach((socket) => {
    socket.emit('newReport', message);
  });
}

module.exports = { sendNotificationToResponders };