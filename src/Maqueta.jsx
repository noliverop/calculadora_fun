import Skeleton from './Skeleton';
import { BackPaper } from './info_assets/paperStyles';

export default function Maqueta() {
  return (
      <BackPaper variant="elevation">{<Skeleton />}</BackPaper>
  );
}