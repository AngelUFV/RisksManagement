export default function UpdateEntity(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/service1.service').isDraftEnabled('Risk')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/service1/Risk/Risk_UpdateEntity.action',
            'Properties': {
                'OnSuccess': ''
            }
        }).then((result) => {
            return clientAPI.executeAction({
                'Name': '/RisksMobile/Actions/DraftSaveEntity.action',
                'Properties': {
                    'Target': {
                        'EntitySet': 'Risk'
                    }
                }
            });
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/service1/Risk/Risk_UpdateEntity.action');
    }
}