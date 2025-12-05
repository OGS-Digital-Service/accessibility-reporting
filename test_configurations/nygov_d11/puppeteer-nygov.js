    const puppeteer = require('puppeteer-extra');
    const aChecker = require('accessibility-checker');
    const StealthPlugin = require('puppeteer-extra-plugin-stealth');
    // add the stealth plugin
    puppeteer.use(StealthPlugin());

    (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // PAGE 1 of 5
        try {
            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-homepage.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-homepage');

            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-homepage-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-homepage-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 1 of 5')
        };

         // PAGE 2 of 5
         try {
            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/procurement', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-procurement.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-procurement');

            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/procurement', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-procurement-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-procurement-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 2 of 5')
        };

         // PAGE 3 of 5
         try {
            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/procurement/ogs-centralized-contracts-list', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-contracts.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-contracts');

            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/procurement/ogs-centralized-contracts-list', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-contracts-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-contracts-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 3 of 5')
        };

        // PAGE 4 of 5
         try {
            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/parking', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-parking.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-parking');

            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/parking', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-parking-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-homepage-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 4 of 5')
        };

        // PAGE 5 of 5
         try {
            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/design-construction', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-design-construction.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-design-construction');

            // Navigate to the page you want to scan
            await page.goto('https://ogs.ny.gov/design-construction', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/ogs-design-construction-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'ogs-design-construction-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 5 of 5')
        };

       
        await browser.close();
    })();