var uiEvent = (function () {
    var eventQueues = {
            activateLanguage : [],
            deActivateLanguage : [],
            addLanguage: []
        };
    return {
        addUiEventListener : function (obj) {
            Object.keys(obj).forEach(function (key) {
                if (eventQueues.hasOwnProperty(key)) {
                    eventQueues[key].push(obj[key]);
                }
            });
        },
        callUievent : function (eventName, args) {
            var argsList = [].slice.call(arguments, 1, arguments.length);
            if (eventQueues.hasOwnProperty(eventName)) {
                eventQueues[eventName].forEach(function (fc) {
                   fc.apply(null, argsList);
                });
            }
        }
    }
}());

module.exports = uiEvent;