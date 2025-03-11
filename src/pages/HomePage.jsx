import myPicture from "../assets/ME.jpg";

import Card from "../components/ui/Card";
export default function HomePage() {
  
  return (
    <>
      <div className="flex w-full gap-4">
        <Card className="profile-card w-1/3">
        </Card>
        <div className="flex w-2/3 gap-4">
          <div className="flex h-full w-2/3 flex-col gap-4">
            <div className="h-[300px] w-full rounded-lg bg-secondary p-4 shadow-lg"></div>
            <div className="h-[400px] w-full rounded-lg bg-secondary p-4 shadow-lg"></div>
          </div>
          <div className="w-1/3">
            <aside className="h-full w-full rounded-lg bg-secondary p-4 shadow-lg">
              <h2 className="text-white mb-4 text-2xl font-bold">Articles</h2>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
