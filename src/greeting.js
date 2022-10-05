function getTime() {
    let time = new Date();
    let hour = time.getHours();
    let minutes = time.getMinutes();
    return {hour, minutes}
}

function getGreeting() {
    let {hour, minutes} = getTime();
    
    let greeting = {
        morning: 'Good Morning.',
        afternoon: 'Good Afternoon.',
        evening: 'Good Evening.'
    }
    
    // conclude the greeting corresponding to the current hour.
    if (hour >= 5 && minutes == 0 && hour <= 11 && minutes <= 59) {
        return greeting.morning;
    } else if (hour >= 12 && minutes >= 1 && hour <= 17 && minutes <= 59) {
        return greeting.afternoon;
    } else if (hour >= 18 && minutes >= 1) {
        return greeting.evening;
    }
}

export default getGreeting;