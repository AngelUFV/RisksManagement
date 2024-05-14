sap.ui.require(
    [
        'sap/fe/test/JourneyRunner',
        'riskmanagement/Risks/test/integration/FirstJourney',
		'riskmanagement/Risks/test/integration/pages/RiskList',
		'riskmanagement/Risks/test/integration/pages/RiskObjectPage'
    ],
    function(JourneyRunner, opaJourney, RiskList, RiskObjectPage) {
        'use strict';
        var JourneyRunner = new JourneyRunner({
            // start index.html in web folder
            launchUrl: sap.ui.require.toUrl('riskmanagement/Risks') + '/index.html'
        });

       
        JourneyRunner.run(
            {
                pages: { 
					onTheRiskList: RiskList,
					onTheRiskObjectPage: RiskObjectPage
                }
            },
            opaJourney.run
        );
    }
);