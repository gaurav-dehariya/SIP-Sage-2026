function startDownload(callback) {
    console.log("Download Started...");

    setTimeout(() => {
        callback();
    }, 3000);
}

function downloading(callback) {
    console.log("downloading...");

    setTimeout(() => {
        callback();
    }, 2000);
}

function downloadComplete() {
    console.log("Download Completed");
}

startDownload(() => {
    downloading(() => {
        downloadComplete();
    })
})
