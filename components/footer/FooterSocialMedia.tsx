import Link from 'next/link';

import FooterHeading from './FooterHeading';

const FooterSocialMedia = ({ socialmedia }: any) => {
  return (
    <div>
      <FooterHeading title="បណ្តាញសង្គម" />
      <div>
        <ul className=" flex gap-2">
          {socialmedia.children.map((social: any) => (
            <Link href={social.custom_icon.link} key={social.id}>
              <li
                className={`px-[15px] h-[40px] flex items-center  border rounded-md`}
                onMouseEnter={(e: any) =>
                  e.target.nodeName == 'LI'
                    ? (e.target.style.backgroundColor = `${social.custom_icon.backgroundColor}`)
                    : (e.target.style.backgroundColor = ``)
                }
                onMouseLeave={(e: any) =>
                  e.target.nodeName == 'LI'
                    ? (e.target.style.backgroundColor = ``)
                    : (e.target.style.backgroundColor = ``)
                }
              >
                <i className={`${social.custom_icon.icon} text-[#d4d4d4]`}></i>
              </li>
            </Link>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default FooterSocialMedia;
