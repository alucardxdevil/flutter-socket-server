const {io} = require('../index')

// Socket messages

io.on('connection', client => {
    console.log('Client connect');
    client.on('disconnect', () => {
        console.log('Client disconnect');
    });
    client.on('message', (payload) => {
        console.log('Client message', payload);
        io.emit('message', {admin: 'New Message'});
    })
});