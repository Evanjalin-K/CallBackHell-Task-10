function startCountdown(duration, callback) {
    setTimeout(function() {
        callback(duration);
    }, 1000);
}

document.addEventListener('DOMContentLoaded', function() {
    startCountdown(10, function(count) {
        document.getElementById('countdown').textContent = count;
        startCountdown(9, function(count) {
            document.getElementById('countdown').textContent = count;
            startCountdown(8, function(count) {
                document.getElementById('countdown').textContent = count;
                startCountdown(7, function(count) {
                    document.getElementById('countdown').textContent = count;
                    startCountdown(6, function(count) {
                        document.getElementById('countdown').textContent = count;
                        startCountdown(5, function(count) {
                            document.getElementById('countdown').textContent = count;
                            startCountdown(4, function(count) {
                                document.getElementById('countdown').textContent = count;
                                startCountdown(3, function(count) {
                                    document.getElementById('countdown').textContent = count;
                                    startCountdown(2, function(count) {
                                        document.getElementById('countdown').textContent = count;
                                        startCountdown(1, function(count) {
                                        document.getElementById('countdown').textContent = count;
                                        startCountdown(0, function() {
                                            document.getElementById('countdown').textContent = "Happy Independence Day!";
                                        });
                                        });
                                    });
                                });
                            });
                        });
                    });
                });
            });
        });
    });
});