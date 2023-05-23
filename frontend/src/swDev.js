export default function swDev() {
  //   function determineAppServerKey() {
  //     const vapidPublicKey =
  //       "BJthRQ5myDgc7OSXzPCMftGw-n16F7zQBEN7EUD6XxcfTTvrLGWSIG7y_JxiWtVlCFua0S8MTB5rPziBqNx1qIo";
  //     return urlBase64ToUint8Array(vapidPublicKey);
  //   }

  //   function urlBase64ToUint8Array(base64String) {
  //     const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
  //     const base64 = (base64String + padding)
  //       .replace(/\-/g, "+")
  //       .replace(/_/g, "/");

  //     const rawData = window.atob(base64);
  //     const outputArray = new Uint8Array(rawData.length);

  //     for (let i = 0; i < rawData.length; ++i) {
  //       outputArray[i] = rawData.charCodeAt(i);
  //     }
  //     return outputArray;
  //   }

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;

  console.log("swUrl ::::", swUrl);

  console.log(navigator.serviceWorker);

  if ("serviceWorker" in navigator) {
    console.log("service worker supported");
    navigator.serviceWorker.register(swUrl).then((res) => {
      console.log("swResponse:", res);

      // return res.pushManager.getSubscription().then(function (subscription) {
      //   console.log(subscription);
      //   res.pushManager.subscribe({
      //     userVisibleOnly: true,
      //     applicationServerKey: determineAppServerKey(),
      //   });
      // });
    });

    // ask for notificaion permisssion
    //   navigator.serviceWorker.ready.then((reg) => {
    //     return reg.pushManager.getSubscription().then((subscription) => {
    //       reg.pushManager.subscribe({
    //         userVisibleOnly: true,
    //         applicationServerKey: determineAppServerKey(),
    //       });
    //     });
    //   });
  } else {
    console.log("service worker not supported");
  }
}
