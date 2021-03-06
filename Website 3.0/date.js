exports.getDate = function(){
    const today = new Date();
    const options = {
    weekday: "long",
    year:"numeric",
    month:"long",
    day:"numeric"
    }

    return today.toLocaleDateString('en-US', options);
} 

exports.getYear = function(){
    const today = new Date();
    options = {
        year:"numeric"
    }

    return today.toLocaleDateString('en-US', options);
}
