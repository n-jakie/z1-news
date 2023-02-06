import { gql } from '@apollo/client';
import MENU from '../general_data/GET_MENU';
import { CONTACT_INFO } from '../general_data/CONTACT_INFO';
import { MAIN_SOCIAL_MEDIA } from '../general_data/MAIN_SOCIAL_MEDIA';
import { FLAG } from '../general_data/FLAG';
import { LAST_POST } from '../home/LAST_POST';
import LOGO from '../general_data/LOGO';
import { TOP_BANNER } from '../home/TopBanner';
import { CATEGORY_BANNER } from '../home/CATEGORY_BANNER';
import { REALESTATE_CATEGORY_POST } from '../home/categorys/REALESTATE_CATEGORY_POST';
import { PROJECT_CATEGORY_POST } from '../home/categorys/PROJECT_CATEGORY_POST';
import { ECONOMIC_CATEGORY_POST } from '../home/categorys/ECONOMIC_CATEGORY_POST';
import { BUYSELL_CATEGORY_POST } from '../home/categorys/BUYSELL_CATEGORY_POST';
import { BOTTOM_BANNER } from '../home/BOTTOM_BANNER';
import { SIDEBAR_VIDEO } from '../sidebar/SIDEBAR_VIDEO';
import { SPONSOR } from '../sidebar/SPONSOR';
import { SIDEBAR_ADS } from '../sidebar/SIDEBAR_ADS';
import { ABOUT_Z1NEWS } from '../general_data/ABOUT_Z1NEWS';
import { TERMS_AND_CONDITIONS } from '../general_data/TERMS_AND_CONDITIONS';
import { POLICY_PRIVACY } from '../general_data/POLICY_PRIVACY';
import { KNOWLEDGE_CATEGORY_POST } from '../home/categorys/KNOWLEDGE_CATEGORY_POST';
import { FOOTER_BACKGROUND } from '../general_data/FOOTER_BACKGROUND';
import { LastNewBanner } from '../home/LastNewBanner';
import { DETAIL_BANNER } from '../general_data/DETAIL_BANNER';

export const GET_HOMEPAGE = gql`
    query HomePage {
        ${FLAG}
                ${MAIN_SOCIAL_MEDIA}
                ${CONTACT_INFO}
                ${LOGO}
                ${TOP_BANNER}
                ${MENU}
                ${LAST_POST}
                ${LastNewBanner}
                ${BOTTOM_BANNER}
                ${SIDEBAR_VIDEO}
                ${SPONSOR}
                ${SIDEBAR_ADS}
                ${ABOUT_Z1NEWS}
                ${TERMS_AND_CONDITIONS}
                ${POLICY_PRIVACY}
                ${FOOTER_BACKGROUND}
        ${LAST_POST}
        ${CATEGORY_BANNER}
        ${REALESTATE_CATEGORY_POST}
        ${PROJECT_CATEGORY_POST}
        ${ECONOMIC_CATEGORY_POST}
        ${BUYSELL_CATEGORY_POST}
        ${KNOWLEDGE_CATEGORY_POST}
       ${DETAIL_BANNER}
        
    }
`;
