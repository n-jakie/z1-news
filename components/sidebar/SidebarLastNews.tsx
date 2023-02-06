import Link from 'next/link';
import dynamic from 'next/dynamic';
const SidebarTitle = dynamic(() => import('./SidebarTitle'));

const SidebarLastNews = ({ lastnews }: any) => {
  return (
    <div className="mb-5">
      <SidebarTitle title="អត្ថបទថ្មីៗ" />
      <ul style={{ listStyleType: 'disc' }} className="pl-6">
        {lastnews.map((item: any) => (
          <li key={item.id}>
            <Link href={`/article/${item.databaseId}`}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SidebarLastNews;
