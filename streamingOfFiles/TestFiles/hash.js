
firebase.initializeApp(config);
/*
 * Creating a FCM messaging instance
 */
var messaging = firebase.messaging();
var subscriberDetails = {
    domainid: subdomainid,
    token: '',
    browser: '',
    OS: '',
    subscribedURL: '',
    subscribedDate: '',
    geoLocation:''
};

var subscriberPromise = '';

function getBrowser() {
    if (!!window.chrome && !!window.chrome.webstore) {
        return 'Chrome';
    } else if (typeof InstallTrigger !== 'undefined') {
        return 'Firefox';
    } else if (!!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0) {
        return 'Opera';
    }  else if (Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0) {
        return 'Safari';
    } else {
        return 'Others';
    }
}

function getSubscriberDetails() {
    subscriberPromise = new Promise(function (resolve, reject) {
        subscriberDetails.browser = getBrowser();
        subscriberDetails.subscribedURL = window.location.href;
        subscriberDetails.subscribedDate = new Date();
        subscriberDetails.OS = navigator.platform;
        resolve(subscriberDetails);
    });
}

if ('serviceWorker' in navigator) {
    /* Register service worker */
    navigator.serviceWorker.register('service-worker.js').then(function (reg) {
        messaging.useServiceWorker(reg);
        var notificationPermission = false;
        if(Notification.permission === 'granted') {
            notificationPermission = true;
        }else{
        messaging.requestPermission()
            .then(function () {
                return messaging.getToken()
                    .then(function (currentToken) {
                        if (currentToken && !notificationPermission) {
                            console.log('current_token:', currentToken);
                            subscriberDetails.token = currentToken;
                            getSubscriberDetails();
                            subscriberPromise.then(function (res) {
                                console.log('subscriber_data', res);
                                fetch("https://www.engageto.com:8081/v1/node/domains/subscribers", {
                                    method: 'post',
                                    headers: {
                                        "Content-type": "application/json"
                                    },
                                    body: JSON.stringify(res)
                                }).then(function (response) {
                                    if (response.status !== 200) {
                                        console.log('Looks like there was a problem. Status Code: ' + response.status);
                                        return;
                                    } else {
                                        fetch("/userSubscribed", {
                                            method: 'post',
                                            headers: {
                                                "Content-type": "application/json"
                                            },
                                            body: JSON.stringify({
                                                subscriber_token: currentToken,
                                                subdomain_id: subdomainid
                                            })
                                        }).then(function (response) {
                                            if (response.status !== 200) {
                                                console.log('Looks like there was a problem. Status Code: ' + response.status);
                                                return;
                                            } else {
                                                console.log('Successfully sent welcome notification');
                                            }
                                        }).catch(function (err) {
                                            console.log('Fetch Error :-S', err);
                                        });
                                    }
                                }).catch(function (err) {
                                    console.log('Fetch Error :-S', err);
                                });
                            }).catch(function (err) {
                                console.log('Handle rejected promise (' + err + ') here.');
                            });

                        } else {
                          // there is an error in token generation from fcm
                        }

                    }).catch(function (err) {
                        console.log('An error occurred while retrieving token. ', err);
                    });
            })
            .catch(function (err) {
                console.log('Unable to get permission to notify. ', err);
            });

        messaging.onMessage(function (payload) {
            console.log('data received in onMessage: ', payload);
            var options = {
                body: payload.data.body,
                icon: payload.data.icon,
                actions: []
            };
           navigator.serviceWorker.ready.then(function(registration){
             registration.showNotification(payload.data.title,options).then(function(success){
               console.log('notification display was succesfull');
               window.close();
             }).catch(function(failed){
               console.log('notification display was unsuccessfull');
               window.close();
             });
           }).catch(function(error){
             console.log('error comming while making service-worker ready');
           });
        });
    }).catch(function (err) {
        console.error("SW registration failed with error: " + err);
    });
}else{
    console.log('Notification is not supported by this browser');
}
