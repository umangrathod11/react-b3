export const EDUCATION = [
    {
        value: '10_PASS',
        display: '10th Pass'
    },
    {
        value: '12_PASS',
        display: '12th Pass'
    },
    {
        value: 'BACHELOR',
        display: 'Bachelor Degree'
    },
    {
        value: 'MASTER',
        display: 'Master Degree'
    },
    {
        value: 'PhD',
        display: 'Doctrate (PhD)'
    },
];

export const EDU_TO_TEXT = EDUCATION.reduce((acc, obj) => { acc[obj.value] = obj.display; return acc; }, {});

export const INTEREST_CONTRIBUTION = [
    {
        value: 'MATRIMONIAL',
        display: 'Matrimonial Activities',
        description: 'Contribute in finding matches for youths from our village.',
    },
    {
        value: 'GAUSHALA_DEVELOPMENT',
        display: 'Gaushala Development / Maintanance',
        description: 'We have total 2 Gaushala in our village. Need man hours to maintain accounts, contact to regular donors and do needful activities'
    },
    {
        value: 'CARRER_COUNSELLING',
        display: 'Carrer counselling',
        description: 'More than 70 kids pass 12th every year from our village. Guide them on choosing the right path, education loans, career outside Gujarat / India etc'
    },
    {
        value: 'GRANTS_HELP',
        display: 'Grants & Subsidy Awareness',
        description: 'Every year our village get grants of amount 10L or more, but because of lack of awareness, legal process - we are not able to utilise it. Help our Gram panchayat to avail it.'
    },
];

export const INTEREST_TO_TEXT = INTEREST_CONTRIBUTION.reduce((acc, obj) => { acc[obj.value] = obj.display; return acc; }, {});


export const TAB_IDS = {
    'ADD_MEMBER': 'ADD_MEMBER',
    'VIEW_MEMBERS': 'VIEW_MEMBERS',
    'EDUCATION_REPORT': 'EDUCATION_REPORT',
    'VOLUNTEER_REPORT': 'VOLUNTEER_REPORT',
    'GEO_GRAPHY_REPORT': 'GEO_GRAPHY_REPORT',
};

export const TABS = [
    {
        id: TAB_IDS.ADD_MEMBER,
        text: 'Add New Member'
    },
    {
        id: TAB_IDS.VIEW_MEMBERS,
        text: 'View Members'
    },
    {
        id: TAB_IDS.EDUCATION_REPORT,
        text: 'Education Report'
    },
    {
        id: TAB_IDS.VOLUNTEER_REPORT,
        text: 'Volunteers Report'
    },
    {
        id: TAB_IDS.GEO_GRAPHY_REPORT,
        text: 'City Wise Report'
    }
];