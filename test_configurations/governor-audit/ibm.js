    const puppeteer = require('puppeteer-extra');
    const aChecker = require('accessibility-checker');
    const StealthPlugin = require('puppeteer-extra-plugin-stealth');
    // add the stealth plugin
    puppeteer.use(StealthPlugin());

    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

     




    

    
    

    


    
     
    // PAGE 1 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/eliminating-distractions-new-york-schools', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/eliminating-distractions-schools.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'eliminating-distractions-schools');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/eliminating-distractions-new-york-schools', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/eliminating-distractions-schools-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'eliminating-distractions-schools-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 1 of 13')
        };
        
    // PAGE 2 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/legislation', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/legislation.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'legislation');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/legislation', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/legislation-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'legislation-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 2 of 13')
        };
        
    // PAGE 3 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/2025-state-state', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/2025-state-of-the-state.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, '2025-state-of-the-state');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/2025-state-state', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/2025-state-of-the-state-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, '2025-state-of-the-state-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 3 of 13')
        };
        
    // PAGE 4 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/news', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/news.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'news');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/news', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/news-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'news-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 4 of 13')
        };
        
    // PAGE 5 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/executiveorders', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/executive-orders.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'executive-orders');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/executiveorders', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/executive-orders-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'executive-orders-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 5 of 13')
        };
        
    // PAGE 6 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/schedule/governor-hochul-new-york-city-dutchess-county-and-albany', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/governor-schedule.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'governor-schedule');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/schedule/governor-hochul-new-york-city-dutchess-county-and-albany', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/governor-schedule-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'governor-schedule-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 6 of 13')
        };
        
    // PAGE 7 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/news/governor-hochul-announces-billion-dollar-rescue-plan-small-businesses-and-strengthen-new-yorks', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/small-business-rescue-plan.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'small-business-rescue-plan');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/news/governor-hochul-announces-billion-dollar-rescue-plan-small-businesses-and-strengthen-new-yorks', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/small-business-rescue-plan-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'small-business-rescue-plan-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 7 of 13')
        };
        
    // PAGE 8 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/addressing-youth-mental-health-crisis-new-york', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/youth-mental-health-crisis.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'youth-mental-health-crisis');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/addressing-youth-mental-health-crisis-new-york', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/youth-mental-health-crisis-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'youth-mental-health-crisis-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 8 of 13')
        };
        
    // PAGE 9 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/news/audio-video-photos-b-roll-rush-transcript-governor-hochul-elected-officials-and-mta-leadership', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/mta-leadership-transcript.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'mta-leadership-transcript');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/news/audio-video-photos-b-roll-rush-transcript-governor-hochul-elected-officials-and-mta-leadership', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/mta-leadership-transcript-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'mta-leadership-transcript-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 9 of 13')
        };
        
    // PAGE 10 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/new-penn-station', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/new-penn-station.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'new-penn-station');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/new-penn-station', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/new-penn-station-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'new-penn-station-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 10 of 13')
        };
        
    // PAGE 11 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/taking-action-against-car-theft', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/taking-action-car-theft.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'taking-action-car-theft');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/programs/taking-action-against-car-theft', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/taking-action-car-theft-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'taking-action-car-theft-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 11 of 13')
        };
        
    // PAGE 12 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/executive-order/no-58-declaring-disaster-emergency-counties-albany-bronx-columbia-greene-delaware', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/executive-order-58-disaster-emergency.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'executive-order-58-disaster-emergency');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/executive-order/no-58-declaring-disaster-emergency-counties-albany-bronx-columbia-greene-delaware', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/executive-order-58-disaster-emergency-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'executive-order-58-disaster-emergency-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 12 of 13')
        };
        
    // PAGE 13 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/content/governor-contact-form', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/governor-contact-form.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'governor-contact-form');

            // Navigate to the page you want to scan
            await page.goto('https://www.governor.ny.gov/content/governor-contact-form', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/governor-contact-form-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'governor-contact-form-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 13 of 13')
        };
        

        await browser.close();
    })();