/**
 * telemetry.js
 * ONESCAN AI QR Reviews Platform — Client Telemetry & Live Dashboard Sync
 * Connects this review landing page back to your central ONESCAN Studio Dashboard.
 */
(function() {
    const config = window.ONESCAN_CONFIG || {
        businessId: 'delhi-chaap-express',
        businessName: 'Delhi Chaap Express'
    };

    const businessId = config.businessId || 'delhi-chaap-express';
    let channel = null;

    try {
        if (typeof BroadcastChannel !== 'undefined') {
            channel = new BroadcastChannel('onescan_telemetry_channel');
        }
    } catch (e) {
        console.warn('BroadcastChannel not available:', e);
    }

    const OnescanTelemetry = {
        track: function(type, data) {
            const payload = {
                businessId: businessId,
                type: type, // 'scan' | 'review_copied' | 'category_change'
                data: data || {},
                timestamp: Date.now(),
                url: window.location.href,
                referrer: document.referrer || ''
            };

            // 1. Instant Real-Time Sync via BroadcastChannel (to any open dashboard tab)
            try {
                if (channel) {
                    channel.postMessage(payload);
                }
            } catch (e) {}

            // 2. Cross-tab LocalStorage Bridge (triggers storage event on dashboard)
            try {
                localStorage.setItem('onescan_telemetry_ping', JSON.stringify(payload));

                // Directly increment local store if on same origin
                const storeKey = 'onescan_businesses_v1';
                const raw = localStorage.getItem(storeKey);
                if (raw) {
                    const list = JSON.parse(raw);
                    const biz = list.find(function(item) { return item.id === businessId; });
                    if (biz) {
                        biz.stats = biz.stats || {};
                        if (type === 'scan') biz.stats.scans = (biz.stats.scans || 0) + 1;
                        if (type === 'review_copied') {
                            biz.stats.copiedToGoogle = (biz.stats.copiedToGoogle || 0) + 1;
                            biz.stats.reviewsGenerated = (biz.stats.reviewsGenerated || 0) + 1;
                        }
                        localStorage.setItem(storeKey, JSON.stringify(list));
                    }
                }
            } catch (e) {}

            // 3. PostMessage for iframe / preview embeds
            try {
                if (window.parent && window.parent !== window) {
                    window.parent.postMessage({ onescanTelemetry: payload }, '*');
                }
            } catch (e) {}

            // 4. Remote Webhook / API Beacon (if configured)
            if (config.webhookUrl && config.webhookUrl.startsWith('http')) {
                try {
                    const body = JSON.stringify(payload);
                    if (navigator.sendBeacon) {
                        navigator.sendBeacon(config.webhookUrl, body);
                    } else {
                        fetch(config.webhookUrl, {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: body,
                            mode: 'no-cors'
                        }).catch(function() {});
                    }
                } catch (e) {}
            }
        }
    };

    window.OnescanTelemetry = OnescanTelemetry;

    // Auto-record scan on initial page load
    window.addEventListener('DOMContentLoaded', function() {
        window.OnescanTelemetry.track('scan', {
            screen: window.innerWidth + 'x' + window.innerHeight
        });
    });
})();
