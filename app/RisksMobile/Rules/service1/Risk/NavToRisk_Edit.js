export default function NavToEdit(clientAPI) {
    if (clientAPI.getODataProvider('/RisksMobile/Services/service1.service').isDraftEnabled('Risk')) {
        return clientAPI.executeAction({
            'Name': '/RisksMobile/Actions/DraftEditEntity.action',
            'Properties': {
                'Target': {
                    'EntitySet': 'Risk'
                },
                'OnSuccess': '/RisksMobile/Actions/service1/Risk/NavToRisk_Edit.action'
            }
        });
    } else {
        return clientAPI.executeAction('/RisksMobile/Actions/service1/Risk/NavToRisk_Edit.action');
    }
}