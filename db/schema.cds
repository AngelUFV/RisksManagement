namespace riskmanagement;

using { BusinessPartnerA2X } from '../srv/external/BusinessPartnerA2X.cds';

using { managed } from '@sap/cds/common';

entity Risk : managed
{
    key ID : UUID;
    title : String(100);
    prio : String(5);
    descr : String(100);
    impact : Integer;
    criticality : Integer;
    miti : Association to one Mitigations;
    supplier : Association to one BusinessPartnerA2X.A_BusinessPartner;
}

entity Mitigations : managed
{
    key ID : UUID;
    description : String(100);
    owner : String(100);
    timeline : String(100);
    risks : Association to many Risk on risks.miti = $self;
}
