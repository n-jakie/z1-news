import { BOTTOM_BANNER } from '../home/BOTTOM_BANNER';
import { CATEGORY_PAGE_TOP_BANNER } from '../home/categorys/CATEGORY_PAGE_TOP_BANNER';
import { LastNewBanner } from '../home/LastNewBanner';
import { LAST_POST } from '../home/LAST_POST';
import { TOP_BANNER } from '../home/TopBanner';
import { SIDEBAR_ADS } from '../sidebar/SIDEBAR_ADS';
import { SIDEBAR_VIDEO } from '../sidebar/SIDEBAR_VIDEO';
import { SPONSOR } from '../sidebar/SPONSOR';
import { ABOUT_Z1NEWS } from './ABOUT_Z1NEWS';
import { CONTACT_INFO } from './CONTACT_INFO';
import { FLAG } from './FLAG';
import { FOOTER_BACKGROUND } from './FOOTER_BACKGROUND';
import MENU from './GET_MENU';
import LOGO from './LOGO';
import { MAIN_SOCIAL_MEDIA } from './MAIN_SOCIAL_MEDIA';
import { POLICY_PRIVACY } from './POLICY_PRIVACY';
import { TERMS_AND_CONDITIONS } from './TERMS_AND_CONDITIONS';

export const GET_LAYOUT = `
  ${CATEGORY_PAGE_TOP_BANNER} 
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
`;
