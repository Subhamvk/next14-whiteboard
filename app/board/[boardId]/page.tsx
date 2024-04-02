
import { Canvas } from "./_components/canvas";
import { Room } from "@/components/room";
import { Loading } from "./_components/loading";

interface BoarIdPageProps {
    params: {
        boardId: string;
    };
};

const BoarIdPage = ({
    params,
}:BoarIdPageProps) => {
    return (
        <Room roomId={params.boardId} fallback={<Loading/>}>
          <Canvas boardId={params.boardId} />
        </Room>
      );
};

export default BoarIdPage;