import { get_newsletters } from '@/lib/database'
import BrowsePage from '@/components/pages/BrowsePage'

export const revalidate = 60;

export default async function Browse() {
  const newsletters = await get_newsletters();
  return <BrowsePage newsletters={newsletters}></BrowsePage>
}
