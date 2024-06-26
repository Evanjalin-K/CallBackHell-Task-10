document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        document.getElementById('countdown').textContent = 10;
        setTimeout(function() {
            document.getElementById('countdown').textContent = 9;
            setTimeout(function() {
                document.getElementById('countdown').textContent = 8;
                setTimeout(function() {
                    document.getElementById('countdown').textContent = 7;
                    setTimeout(function() {
                        document.getElementById('countdown').textContent = 6;
                        setTimeout(function() {
                            document.getElementById('countdown').textContent = 5;
                            setTimeout(function() {
                                document.getElementById('countdown').textContent = 4;
                                setTimeout(function() {
                                    document.getElementById('countdown').textContent = 3;
                                    setTimeout(function() {
                                        document.getElementById('countdown').textContent = 2;
                                        setTimeout(function() {
                                            document.getElementById('countdown').textContent = 1;
                                            setTimeout(function() {
                                                document.getElementById('countdown').textContent = "Happy Independence Day!";
                                            }, 1000);
                                        }, 1000);
                                    }, 1000);
                                }, 1000);
                            }, 1000);
                        }, 1000);
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);
});