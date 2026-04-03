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
            await page.goto('https://www.ny.gov/services/apply-professional-license', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/apply-professional-license.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'apply-professional-license');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/services/apply-professional-license', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/apply-professional-license-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'apply-professional-license-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 1 of 13')
        };
        
    // PAGE 2 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/911-assistance-programs', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/911-assistance-programs.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, '911-assistance-programs');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/911-assistance-programs', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/911-assistance-programs-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, '911-assistance-programs-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 2 of 13')
        };
        
    // PAGE 3 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/abortion-new-york-state-know-your-rights', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/abortion-new-york-state-know-your-rights.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'abortion-new-york-state-know-your-rights');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/abortion-new-york-state-know-your-rights', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/abortion-new-york-state-know-your-rights-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'abortion-new-york-state-know-your-rights-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 3 of 13')
        };
        
    // PAGE 4 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/new-york-state-womens-suffrage-commission/historic-new-york-suffragists', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/historic-new-york-suffragists.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'historic-new-york-suffragists');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/new-york-state-womens-suffrage-commission/historic-new-york-suffragists', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/historic-new-york-suffragists-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'historic-new-york-suffragists-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 4 of 13')
        };
        
    // PAGE 5 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/new-york-and-crisis-lsrael', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/new-york-and-crisis-lsrael.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'new-york-and-crisis-lsrael');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/new-york-and-crisis-lsrael', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/new-york-and-crisis-lsrael-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'new-york-and-crisis-lsrael-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 5 of 13')
        };
        
    // PAGE 6 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/services/apply-snap', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/apply-snap.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'apply-snap');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/services/apply-snap', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/apply-snap-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'apply-snap-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 6 of 13')
        };
        
    // PAGE 7 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/new-york-state-community-commission-reparations-remedies', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/new-york-state-community-commission-reparations-remedies.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'new-york-state-community-commission-reparations-remedies');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/new-york-state-community-commission-reparations-remedies', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/new-york-state-community-commission-reparations-remedies-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'new-york-state-community-commission-reparations-remedies-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 7 of 13')
        };
        
    // PAGE 8 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/open-foil-ny', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/open-foil-ny.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'open-foil-ny');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/open-foil-ny', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/open-foil-ny-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'open-foil-ny-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 8 of 13')
        };
        
    // PAGE 9 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/services', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/services.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'services');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/services', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/services-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'services-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 9 of 13')
        };
        
    // PAGE 10 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/services/apply-federal-disability-benefits', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/apply-federal-disability-benefits.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'apply-federal-disability-benefits');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/services/apply-federal-disability-benefits', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/apply-federal-disability-benefits-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'apply-federal-disability-benefits-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 10 of 13')
        };
        
    // PAGE 11 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/phone-free-schools-implementation-resources', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/phone-free-schools-implementation-resources.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'phone-free-schools-implementation-resources');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/phone-free-schools-implementation-resources', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/phone-free-schools-implementation-resources-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'phone-free-schools-implementation-resources-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 11 of 13')
        };
        
    // PAGE 12 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/enough-enough-combating-sexual-assault-college-campuses', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/enough-enough-combating-sexual-assault-college-campuses.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'enough-enough-combating-sexual-assault-college-campuses');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/programs/enough-enough-combating-sexual-assault-college-campuses', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/enough-enough-combating-sexual-assault-college-campuses-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'enough-enough-combating-sexual-assault-college-campuses-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 12 of 13')
        };
        
    // PAGE 13 of 13
        try {
            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 1500,
                height: 1000,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/homepage.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'homepage');

            // Navigate to the page you want to scan
            await page.goto('https://www.ny.gov/', { waitUntil: "networkidle2" }); // Replace with your target URL
            await page.setViewport({
                width: 400,
                height: 800,
                deviceScaleFactor: 1,
                });

            await page.screenshot({ path: 'IBMresults/homepage-mobile.png' });
            // Perform the accessibility scan using aChecker.getCompliance
            // The aChecker.getCompliance API expects the Puppeteer Page object when using Puppeteer.
            await aChecker.getCompliance(page, 'homepage-mobile');
        }
        finally {
            // close the engine
            await aChecker.close();
            console.log('achecker test has completed page 13 of 13')
        };
        
    


       
        await browser.close();
    })();