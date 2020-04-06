const moment = require.requireActual('moment');

// takes timestamp, if not : set it to 0.
// return an instance of moment taking our timestamp
export default (timestamp = 0) => {
    return moment(timestamp);
};